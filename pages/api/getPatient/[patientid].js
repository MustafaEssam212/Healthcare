
import Patients from '../../../model/patientsSchema'
export default function getPatient(req, res){
    Patients.findOne({patientId: req.query.patientid}, (err, result) => {
        if(result){
            res.json(result)
        }else{
            res.json({message: 'Error occured'})
        }
    })
}