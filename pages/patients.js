import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link';
import {useRouter} from 'next/router'
import Image from 'next/image';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';



const getPatients = async (q) => {
  
  const {data} = await axios.get(`/api/search?q=${q.queryKey[0]}`)
  return data

}




const Patients = () => {

  const router = useRouter();
  const [Message, setMessage] = useState(null);
  const [Data, setData] = useState({
    Name: null,
    Age: null,
    Gender: null,
    BloodType: null,
    Allergies: null,
    Diseases: null,
    Height: null,
    Weight: null,
    BloodPressure: null,
    HeartRate: null,
    BodyTempreature: null,
    Glucose: null,
    Profile: null,
    Report: null,
  })
  const [resMessage, setResMessage] = useState('');
  const [query, setQuery] = useState('');    
  const {data} = useQuery(query, getPatients)
  



  

 

  useEffect(()=>{

    async function Check(){
      const res = await fetch('/api/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json();
      if(data.message){
        setMessage(data.message)
      }
    }

    Check()

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


   function Create(){
      console.log(Data.Reports)
      const newData = new FormData()
      newData.append('Name', Data.Name)
      newData.append('Age', Data.Age)
      newData.append('Gender', Data.Gender)
      newData.append('BloodType', Data.BloodType)
      newData.append('Allergies', Data.Allergies)
      newData.append('Diseases', Data.Diseases)
      newData.append('Height', Data.Height)
      newData.append('Weight', Data.Weight)
      newData.append('BloodPressure', Data.BloodPressure)
      newData.append('HeartRate', Data.HeartRate)
      newData.append('BodyTempreature', Data.BodyTempreature)
      newData.append('Glucose', Data.Glucose)
      newData.append('Reports', Data.Report)
      newData.append('Profile', Data.Profile)
      axios.post('/api/create', newData)
      .then(res => {
        if(res.data.message){
          setResMessage(res.data.message)
        }else{
          setIsOpen(false)
          router.push('/patients')
        }
      })
  }
  
  return (

        <>
        
            {!Message ?     <div className='PatientsContainer'>

<div className='SearchDiv'>
  <FontAwesomeIcon className='SearchIcon' icon={faMagnifyingGlass} size="lg"></FontAwesomeIcon>
  <input type="text" placeholder="Search" onChange={e => setQuery(e.target.value)}></input>
</div>

<div className='h4Button'>
  <h4>Patients</h4>
  <button onClick={()=>setIsOpen(true)}>Upload a new patient</button>
</div>

<div className='InnerPatientsContainer'>




    {data?.map((e, key) => {
      return(
                    <Link key={key} href={`/patient/${e.patientId}`}>
            <div className='Patient'>
              
                <a>
                  <div className='PatientDiv'>
    
                    <Image src={`/${e.patientId}/${e.profile}`} width={90} height={90}></Image>
    
                    <div className='Name-ID'>
                      <p>{e.name}</p>
                      <p>{e.patientId}</p>
                    </div>
    
                    <div className='AgeDiv'>
                      <p>Age</p>
                      <p>{e.age} years old</p>
                    </div>
    
                    <div className='BirthDate'>
                      <p>Date of birth</p>
                      <p>07 January 1981</p>
                    </div>
    
                    <div className='Diagnosis'>
                      <p>Diagnosis</p>
                      <p>{e.diseases}</p>
                    </div>
    
                  </div>
                </a>
              
              </div>
              </Link>
      )
    })}


</div>


<Modal
isOpen={modalIsOpen}

onRequestClose={closeModal}
style={customStyles}

>
<div className='Modal'>

       

        <p>Information</p>

        <div>
            <span>Name</span>
            <input onChange={(e)=>{setData({...Data, Name: e.target.value})}} placeholder='Name' type="text"></input>
        </div>
        
        <div>
            <span>Age</span>
            <input onChange={(e)=>{setData({...Data, Age: e.target.value})}} placeholder='Age' type="number"></input>
        </div>

        <div>
            <span>Gender</span>
            <input onChange={(e)=>{setData({...Data, Gender: e.target.value})}} placeholder='Gender' type="Gender"></input>
        </div>

        <div>
            <span>Blood Type</span>
            <input onChange={(e)=>{setData({...Data, BloodType: e.target.value})}} placeholder='Blood Type' type="text"></input>
        </div>

        <div>
            <span>Allergies</span>
            <input onChange={(e)=>{setData({...Data, Allergies: e.target.value})}} placeholder='Allergies' type="text"></input>
        </div>

        <div>
            <span>Diseases</span>
            <input onChange={(e)=>{setData({...Data, Diseases: e.target.value})}} placeholder='Diseases' type="text"></input>
        </div>

        <div>
            <span>Height</span>
            <input onChange={(e)=>{setData({...Data, Height: e.target.value})}} placeholder='Height' type="number"></input>
        </div>

        <div>
            <span>weight</span>
            <input onChange={(e)=>{setData({...Data, Weight: e.target.value})}} placeholder='Weight' type="number"></input>
        </div>

        <hr></hr>

        <p>Statistics</p>

        <div>
            <span>Blood Pressure</span>
            <input onChange={(e)=>{setData({...Data, BloodPressure: e.target.value})}} placeholder='Blood Pressure' type="text"></input>
            <span>mmHg</span>
        </div>


        <div>
            <span>Heart Rate</span>
            <input onChange={(e)=>{setData({...Data, HeartRate: e.target.value})}} placeholder='Heart Rate' type="text"></input>
            <span>bpm</span>
        </div>



        <div>
            <span>Body Tempreature</span>
            <input onChange={(e)=>{setData({...Data, BodyTempreature: e.target.value})}} placeholder='Body Tempreature' type="text"></input>
            <span>C</span>
        </div>



        <div>
            <span>Glucose</span>
            <input onChange={(e)=>{setData({...Data, Glucose: e.target.value})}} placeholder='Glucose' type="text"></input>
            <span>mg/dl</span>
        </div>


        <hr></hr>

        <p>Picture</p>

        <div>
            <input onChange={(e)=>{setData({...Data, Profile: e.target.files[0]})}} type="file" accept="image/png, image/jpeg"></input>

        </div>

        <hr></hr>

        <p>Report</p>

        <div>
            <input onChange={(e)=>{setData({...Data, Report: e.target.files[0]})}} type="file" accept="application/pdf" ></input>

        </div>

        <hr></hr>

        <button onClick={Create} className='SaveBtn'>Save</button>

        {resMessage === '' ? <></> : <p className='MessageAlert'>{resMessage}</p>}

</div>
</Modal>

</div> : <h1 className='MessagePatients'>{resMessage}</h1>}

        
        </>


  )
}

export default Patients
