import React from 'react'
import DashboardPic from '../public/dashboard.png'
import Image from 'next/image'
import Profile from '../public/profile.jpg'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {useRouter} from 'next/router';
import { useEffect } from 'react';
import cookie from 'react-cookies'


const Dashboard = () => {

  const router = useRouter();
  const Move = () => {
    router.push('/patients')
  }

  useEffect( () =>{
    if(cookie.load('Token') === undefined){
        router.push('/login')
    }
}, [])


  const percentage = 26;

  return (

    <div className='DashboardContainer'>

      <h4>Dashboard</h4>

        <div className='ContainerOfWelcome'>

          <div className='WelcomeDiv'>

              <Image src={DashboardPic} width={270} height={205}></Image>
              <div>
                <h5>Welcome Dr.Ahmed Mohammed</h5>
                <p>Trying to reach a specific patient ?</p>
                <button onClick={Move}>Move To Patients</button>
              </div>
          </div>

          <div className='ProfileDiv'>
              <span className='ProfileSpan'>Profile</span>
              <div>
                <Image src={Profile} width={100} height={100}></Image>
                <h6>Dr.Ahmed Mohammed</h6>
                <p>Medical Team</p>
              </div>
          </div>

          <div className='PatientsStatistics'>

            <span className='StatisticsSpan'>Statistics</span>

            <div className='Circle'>
              <CircularProgressbar  value={percentage} text={`${percentage}%`} styles={buildStyles({
                textColor: '#0A586C',
                trailColor: '#0a596c5b',
              })} />
            </div>

            <div className='Men-Women'>

                <div className='Women'>
                  <div className='FirstColorCircle'></div>
                  <p>Women <span>40%</span></p>
                </div>

                <div className='Men'>
                  <div className='SecondColorCircle'></div>
                  <p>Men <span>60%</span></p>
                </div>

            </div>

          </div>

        </div>

        <div className='SecondContainerDash'>

          <div className='News'>

            <h6>News:</h6>

            <div className='InnerNews'>

                <div className='New'>
                  <div>
                      <p>10% off for dermatologist consultation</p>
                      <p>Save money for first visit</p>
                  </div>
                  <FontAwesomeIcon className='IconArrow' icon={faAngleRight} size="sm"></FontAwesomeIcon>
                </div>

                <hr></hr>


                <div className='New'>
                  <div>
                      <p>Free visit to the cardiologist on May 2-6</p>
                      <p>Take care of your health, do medical examination</p>
                  </div>
                  <FontAwesomeIcon className='IconArrow' icon={faAngleRight} size="sm"></FontAwesomeIcon>
                </div>

                <hr></hr>

                <div className='New'>
                  <div>
                      <p>50% discount on allergy tests</p>
                      <p>Summer is coming, take care of allergy</p>
                  </div>
                  <FontAwesomeIcon className='IconArrow' icon={faAngleRight} size="sm"></FontAwesomeIcon>
                </div>


            </div>

          </div>

          <div className='Notifications'>
              <h6>Notifications</h6>

              <div className='InnerNotifications'>

                <div className='Notification'>

                  <div>
                    <div className='GreenDot'></div>
                    <p className='FirstNotificationP'>You confirmed visit to dermatologist</p>
                  </div>
                  <p className='SecondNotificationP'>2 days ago</p>
                </div>

                 <div className='Notification'>

                  <div>
                    <div className='GreenDot'></div>
                    <p className='FirstNotificationP'>Your results are available to download</p>
                  </div>
                  <p className='SecondNotificationP'>3 days ago</p>
                </div>

                 <div className='Notification'>

                  <div>
                    <div className='RedDot'></div>
                    <p className='FirstNotificationP'>Doctor John smith cancelled your visit</p>
                  </div>
                  <p className='SecondNotificationP'>3 days ago</p>
                </div>

                <div className='Notification'>

                  <div>
                    <div className='RedDot'></div>
                    <p className='FirstNotificationP'>Doctor Ann Doe changed date of your visit</p>
                  </div>
                  <p className='SecondNotificationP'>3 days ago</p>
                </div>

                <div className='Notification'>

                  <div>
                    <div className='GreenDot'></div>
                    <p className='FirstNotificationP'>You changed date of Appointment</p>
                  </div>
                  <p className='SecondNotificationP'>4 days ago</p>
                </div>

              </div>

          </div>

          

        </div>
      
    </div>
  )
}

export default Dashboard
