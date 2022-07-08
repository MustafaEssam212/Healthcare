
import Users from '../../model/usersSchema'
import database from '../../utiles/database'


export default async function Register(req, res){
    await database()
   
    const newUser = new Users({
        name: req.body.Name,
        status: req.body.Status,
        profile: req.body.Profile,
        loginId: req.body.LoginID,
        password: req.body.Password
    })

    newUser.save()
    res.json({message: 'Success'})

}