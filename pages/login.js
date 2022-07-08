import React from 'react'
import Doctor from '../public/doctor1.png'
import Guest from '../public/guest.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import cookie from 'react-cookies'
import {useRouter} from 'next/router'

const Login = () => {   

    

    const [Account, setAccount] = useState('');
    const [ID, setID] = useState('');
    const [Password, setPassword] = useState('');
    const [Message, setMessage] = useState('');
    const router = useRouter();


    useEffect( () =>{
        if(cookie.load('Token') !== undefined){
            router.push('/dashboard')
        }
    }, [])
    
    
    async function handleLogin(e){
        
        e.preventDefault();
        setMessage('');

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ID, Password})
        })
        
        const data = await res.json()
        if(data.token){
            cookie.save('Token', data.token, { path: '/' })
           router.push('/dashboard')
            
        }else{
            setMessage(data.message)
        }
    }

    
    
  return (
    <div className='LoginContainer'>

        <h4>Choose Account!</h4>

        <div className='ButtonsContainer'>
            <button onClick={()=>setAccount('Guest')}><Image src={Guest} width={110} height={110}></Image>Guest</button>
            <button onClick={()=>setAccount('Doctor')}><Image src={Doctor} width={110} height={110}></Image>Doctor</button>
        </div>

        <div className='LoginInfo'>
            {Account === 'Guest' ? <div className='GuestDiv'>

                <p>Hello Guest!</p>
                <p>You can log into the system without being an existing Doctor or a specialist.</p>
                <p>the only access you have is to explore the patients and see the reports and the patient's medical condition without modifying or adding to them.</p>

                <button className='GuestButtonLogin'>Login</button>
            
            </div> : <div className='DoctorDiv'>

                <p>Hello Doctor!</p>
                <p>Use your ID & Password to log in our system.</p>
                
                    {Message === '' ? <></> : <p className='MessageAlert'>{Message}</p>}
                    <form onSubmit={handleLogin}>
                        <input id='FirstInput' onChange={(e)=>setID(e.target.value)} type="text" placeholder='EX: 26543984'></input>
                        
                        <p className='FirstIcon'><FontAwesomeIcon icon={faUser} size="xs"></FontAwesomeIcon></p>
                        <p className='FirstDefinition' id='FirstDefinition'>Doctor's ID</p>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"></input>
                        <p className='SecondIcon'><FontAwesomeIcon icon={faLock} size="xs"></FontAwesomeIcon></p>
                        <p id='SecondDefinition'>Doctor's Password</p>
                        <button onClick={handleLogin}>Login</button>
                    </form>

                
                </div>}
        </div>
        
      
    </div>
  )
}

export default Login
