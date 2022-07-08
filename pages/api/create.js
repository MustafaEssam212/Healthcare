
import mv from "mv"
import { IncomingForm } from 'formidable'
import fs from 'fs';
import Patients from '../../model/patientsSchema'
import dateFormat from "dateformat";

export const config = {
    api: {
       bodyParser: false,
    }
};

export default async function Create(req, res){
   
  

   const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()
    
     form.parse(req, (err, fields, files) => {
         if (err) return reject(err)
         
        
       Patients.findOne({name: fields.Name}, (err, result) => {
        if(result){
            res.json({message: 'Patient Already Exists'})
            return
        }else{
            const patientID = Math.floor(Date.now() / 2000);
            try{
                if(!fs.existsSync(`./public/${patientID}`)){
                    fs.mkdirSync(`./public/${patientID}`)
                }
    
                
                var oldProfilePath = files.Profile.filepath;
                var newProfilePath = `./public/${patientID}/${patientID+files.Profile.originalFilename}`;
                mv(oldProfilePath, newProfilePath, function(err) {
                });
    
                var oldReportPath = files.Reports.filepath;
                var newReportPath = `./public/${patientID}/${patientID+files.Reports.originalFilename}`;
                mv(oldReportPath, newReportPath, function(err) {
                });
                
                const newPatient = new Patients({
                    name: fields.Name,
                    age: fields.Age,
                    gender: fields.Gender,
                    bloodType: fields.BloodType,
                    allergies: fields.Allergies,
                    diseases: fields.Diseases,
                    height: fields.Height,
                    weight: fields.Weight,
                    bloodPressure: fields.BloodPressure,
                    heartRate: fields.HeartRate,
                    bodyTempreature: fields.BodyTempreature,
                    glucose: fields.Glucose,
                    patientId: patientID,
                    lastVisit: dateFormat(Date(), "dddd, mmmm dS, yyyy"),
                    reports: [{fileName: patientID+files.Reports.originalFilename}],
                    profile: patientID+files.Profile.originalFilename
                })
    
                newPatient.save()
                res.json({Done: 'Patient added successfully'})
    
            }catch(err){
                res.json({message: 'Error occured, please try again'})
            }
        }
       })

         
     })
 })
 
    
}