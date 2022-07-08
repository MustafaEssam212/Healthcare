import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    reports: [],
    profile: {type: String, required: true},
    patientId: {type: Number, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    bloodType: {type: String, required: true},
    allergies: {type: String, required: true},
    diseases: {type: String, required: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    lastVisit: {type: String, required: true},
    prescriptions: [],
    bloodPressure: {type: String, required: true},
    heartRate: {type: String, required: true},
    bodyTempreature: {type: String, required: true},
    glucose: {type: String, required: true},
})





export default mongoose.models.Patients || mongoose.model("Patients", patientsSchema)