import Icon from '../public/icon.png'
import Image from 'next/image';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faCircleInfo, faHouse, faUserGroup, faChartColumn, faFileLines, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {useRouter} from 'next/router'
import cookie from 'react-cookies'
import {useEffect, useState} from 'react'

const Side = () => {

    const router = useRouter();
     const [Token, setToken] = useState(null);

    useEffect(()=>{
     
        if(cookie.load('Token') !== undefined){
            setToken(cookie.load('Token'))
            
        }else{
            setToken(null)
        }
     
    })
    
    
    function handleLogout(){
        cookie.remove('Token', {path: '/'})
      
    }
  
    return(

        <>      {!Token ? <div className="SideContainer">

        <div className='Icon'><Link href='/'><a><Image title='Healthcare' alt='Healthcare' width={40} height={40} src={Icon}></Image></a></Link></div>
        
        <ul>
            <li id={router.pathname == "/login" ? "active" : ""}><Link href='/login'><a><FontAwesomeIcon icon={faArrowRightToBracket} size="lg"/></a></Link></li><span id='LoginSpan'>Log in</span>
            
            <li id={router.pathname == "/documentation" ? "active" : ""}><Link href='/documentation'><a><FontAwesomeIcon icon={faCircleInfo} size="lg"/></a></Link></li><span id='HelpSpan'>Help</span>
        </ul>

    </div> : <div className='SideContainerAuth'>
        
        
        <div className='Icon'><Link href='/dashboard'><a><Image alt='Healthcare' title='Healthcare' width={40} height={40} src={Icon}></Image></a></Link></div>

        <ul>


            

            <li id={router.pathname == "/dashboard" ? "active" : ""}><Link href="/dashboard"><a><FontAwesomeIcon icon={faHouse} size="lg"/></a></Link></li><span id='DashboardSpan'>Dashboard</span>

            <li id={router.pathname == "/patients" ? "active" : ""}><Link href="/patients"><a><FontAwesomeIcon icon={faUserGroup} size="lg"/></a></Link></li><span id='PatientsSpan'>Patients</span>

            <li id={router.pathname == "/statistics" ? "active" : ""}><Link href="/statistics"><a><FontAwesomeIcon icon={faChartColumn} size="lg"/></a></Link></li><span id='StatisticsSpan'>Statistics</span>

            <li id={router.pathname == "/reports" ? "active" : ""}><Link href="/reports"><a><FontAwesomeIcon icon={faFileLines} size="lg"/></a></Link></li><span id='ReportsSpan'>Reports</span>

            <li onClick={handleLogout} id={router.pathname == "/" ? "active" : ""}><Link href="/"><a><FontAwesomeIcon icon={faArrowLeft} size="lg"/></a></Link></li><span id='LogoutSpan'>Logout</span>

        </ul>
        
        </div>}</>
    )
}

export default Side;