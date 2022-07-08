import React, { useEffect } from 'react'
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faPlus, faFileLines, faGaugeHigh, faTemperatureHalf, faHeartPulse, faVial} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from 'next/image';
import Profile from '../../public/profile.jpg'
import Report from '../../public/report.png'
import { useState } from 'react';
import Modal from 'react-modal';

export async function getServerSideProps(ctx){
    const id = ctx.query.patientid;
    const res = await fetch(`http://localhost:3000/api/getPatient/${id}`)
    const data = await res.json()
    return{
        props: {
            patient: data
        }
    }
        
    
}

const Patient = ({patient}) => {

    const [Show, setShow] = useState(false);


    useEffect(()=>{
        setShow(true)
    }, [])

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          filter: "drop-shadow(0 0 0.15rem rgb(212, 212, 212))",
          border: "none",
          padding: "25px",
          overflowY: "scroll",
          height: "500px"
        },
      };

      const [modalIsOpen, setIsOpen] = useState(false)
      function closeModal() {
        setIsOpen(false);
      }


  return (

    <div className='PatientContainer'>


  
       
        

        <div className='LoginInfoAfter'>
            <Link href="/dashboard"><a><FontAwesomeIcon icon={faArrowLeft} size="xs"></FontAwesomeIcon>Back to dashboard</a></Link>
            <div>
                <Image src={Profile} width={35} height={35} alt="Profile" title="Profile"></Image>
                <p>Dr.Ahmed Mohammed</p>
            </div>
        </div>

        <h4>Current Appointment</h4>

        <div className='PatientDetailsContainer'>

            <div className='LeftSide'>

                <div className='Pic-Age-Update'>

                    <Image src={`/${patient.patientId}/${patient.profile}`} width={120} height={100} alt="Patient" title='Patient'></Image>
                    <p>{patient.name}</p>
                    <p>Age: <span>{patient.age}</span></p>
                    <button onClick={()=>setIsOpen(true)}>Update</button>
                    <button>Build a PDF Report</button>
                </div>

                <div className='InformationOf'>

                    <h5>Information:</h5>
                    <p>Gender:<span> {patient.gender}</span></p>
                    <p>Blood Type:<span> {patient.bloodType}</span></p>
                    <p>Allergies:<span> {patient.allergies}</span></p>
                    <p>Diseases:<span> {patient.diseases}</span></p>
                    <p>Height:<span> {patient.height}m</span></p>
                    <p>weight:<span> {patient.weight}kg</span></p>
                    <p>Patient ID:<span> {patient.patientId}</span></p>
                    <p>Last Visit:<span> {patient.lastVisit}</span></p>
                </div>

            </div>


            <div className='RightSide'>

                    <div className='Heart-Temp-Glucose'>

                            <div className='BloodPressure'>

                                <FontAwesomeIcon className='IconOfDiv1' icon={faGaugeHigh} size="3x"></FontAwesomeIcon>
                                <p>Blood Pressure</p>
                                <p><span>{patient.bloodPressure}</span>mmHg</p>

                            </div>

                            <div className='Heart'>

                            <FontAwesomeIcon className='IconOfDiv2' icon={faHeartPulse} size="3x"></FontAwesomeIcon>
                                <p>Heart Rate</p>
                                <p><span>{patient.heartRate}</span>bpm</p>

                            </div>

                            <div className='Temp'>

                            <FontAwesomeIcon className='IconOfDiv3' icon={faTemperatureHalf} size="3x"></FontAwesomeIcon>
                                <p>Body Tempreature</p>
                                <p><span>{patient.bodyTempreature}</span>C</p>

                            </div>

                            <div className='Glucose'>

                            <FontAwesomeIcon className='IconOfDiv4' icon={faVial} size="3x"></FontAwesomeIcon>
                                <p>Glucose</p>
                                <p><span>{patient.glucose}</span>mg/dl</p>

                            </div>


                    </div>

                    <div className='Reports'>

                            <h5>Reports</h5>

                            <div className='ContainerOfReports'>

                                {patient.reports.map((e, key) => {
                                    return(
                                        <div className='InnerReports'>
                                        <div className='ReportsImg'>
                                            <Image src={Report} width={13} height={17} alt="Report" title="Report"></Image>
                                        </div>
                                        <div className='ReportsParag'>
                                            <a href={`/${patient.patientId}/${e.fileName}`} download>{e.fileName}</a>
                                            <p>12th February 2020</p>
                                        </div>
                                    </div>
        
                                  
                                    )
                                })}

                            </div>
                    </div>

                    <div className='Prescriptions'>
                        <h5>Prescriptions</h5>

                        <div className='UploadDiv'>

                                        <label>
                                            <FontAwesomeIcon icon={faPlus} size="xs"></FontAwesomeIcon> Add a prescription
                                            <input className='UploadInput' type='file' accept='audio/*'></input>
                                        </label>

                        </div>


                        {!Show ? <></> : <table>
                            <tr>
                                <th>Prescriptions</th>
                                <th>Date</th>
                                <th>Duration</th>
                            </tr>
                            <tr>
                                <th>
                                    <p><FontAwesomeIcon className='Icona' icon={faFileLines} size="sm"></FontAwesomeIcon>
                                    <a href='#'>Heart Diseases</a></p>
                                </th>
                                <th className='Date'>25th October 2019</th>
                                <th className='Duration'>3 months</th>
                            </tr>
                            <tr>
                                <th>
                                    <p><FontAwesomeIcon className='Icona' icon={faFileLines} size="sm"></FontAwesomeIcon>
                                    <a href='#'>Heart Diseases</a></p>
                                </th>
                                <th className='Date'>25th October 2019</th>
                                <th className='Duration'>3 months</th>
                            </tr>
                            <tr>
                                <th>
                                    <p><FontAwesomeIcon className='Icona' icon={faFileLines} size="sm"></FontAwesomeIcon>
                                    <a href='#'>Heart Diseases</a></p>
                                </th>
                                <th className='Date'>25th October 2019</th>
                                <th className='Duration'>3 months</th>
                            </tr>
                        </table>}



                    </div>

            </div>

        </div>
      

        

        <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        
      >
        <div className='Modal'>

                <h5>Update Patient ID: <span>208897855</span></h5>
                <hr></hr>

                <p>Information</p>

                <div>
                    <span>Name</span>
                    <input placeholder='Name' type="text"></input>
                </div>
                
                <div>
                    <span>Age</span>
                    <input placeholder='Age' type="number"></input>
                </div>

                <div>
                    <span>Blood Type</span>
                    <input placeholder='Blood Type' type="text"></input>
                </div>

                <div>
                    <span>Allergies</span>
                    <input placeholder='Allergies' type="text"></input>
                </div>

                <div>
                    <span>Diseases</span>
                    <input placeholder='Diseases' type="text"></input>
                </div>

                <div>
                    <span>Height</span>
                    <input placeholder='Height' type="number"></input>
                </div>

                <div>
                    <span>weight</span>
                    <input placeholder='Weight' type="number"></input>
                </div>

                <hr></hr>

                <p>Statistics</p>

                <div>
                    <span>Blood Pressure</span>
                    <input placeholder='Blood Pressure' type="text"></input>
                    <span>mmHg</span>
                </div>


                <div>
                    <span>Heart Rate</span>
                    <input placeholder='Heart Rate' type="text"></input>
                    <span>bpm</span>
                </div>



                <div>
                    <span>Body Tempreature</span>
                    <input placeholder='Body Tempreature' type="text"></input>
                    <span>C</span>
                </div>



                <div>
                    <span>Glucose</span>
                    <input placeholder='Glucose' type="text"></input>
                    <span>mg/dl</span>
                </div>

                <hr></hr>

                <p>Reports</p>

                <div>
                    <input type="file"></input>
                    <button className='UpReportBtn'>Upload New Report</button>
                </div>

                <hr></hr>

                <button className='SaveBtn'>Save changes</button>

        </div>
      </Modal>


    </div>
  )
}

export default Patient
