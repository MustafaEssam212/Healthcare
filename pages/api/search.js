

import Patients from '../../model/patientsSchema'

export default async function(req, res){
    const filter = await req.query.q ? new RegExp(req.query.q, "i") : ""
    Patients.find((err, result)=>{
        const results = result.filter(({name: name}) => name.match(filter))
        res.send(results)
    })
    
}
