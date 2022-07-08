
import database from '../../utiles/database'
import jwt from 'jsonwebtoken'
import Users from '../../model/usersSchema'


export default async function Login (req, res){
    
    await database()
   

    if(req.method === "POST"){

        
        
        const LoginID = req.body.ID;
        const Password = req.body.Password;

        Users.findOne({loginId: LoginID, password: Password}, (err, result) => {
            if(result !== null){
                
                let token = jwt.sign({
                    status: result.status,
                    name: result.name,
                    id: result.loginId,
                   
                }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})

                
                res.json({token})
              
            }else{
                res.json({message: 'Check your ID & Password'})
            }
        })
        
        

    }else if(req.method === "GET"){
        
        if(!req.cookies.Token){
            res.json({message: 'Not Authenticated'})
        }else{
            
            try{

                const data = jwt.verify(req.cookies.Token, process.env.JWT_SECRET)
                if(data.status === "Admin"){
                    return
                }else{
                    res.json({message: "You are not authorized to visit this page"})
                }
            }catch(err){
                res.json({message: 'There is an error please try to login again'})
            }

        }


    }else{
        console.log('Error')
    }

}

