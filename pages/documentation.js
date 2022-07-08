import React from 'react'


const Documentation = () => {
  return (

    <div className='DocumentationContainer'>

       <div className='FirstSection'>
            <h3>What is the healthcare system?</h3>
            <p>This is an online healthcare system based on tracking the patient's condition as soon as he or she is registered in the system.</p>
            <div className='Arrow'></div>
       </div>

       <div className='SecondSection'>
            <h3>What are the benefits of the system?</h3>
            <ul>
              <li>Track the patient's condition from the moment he is registered in the hospital.</li>
              <li>Recording all patient information such as visits, medical condition, physical information, and medical reports for the patient, and uploading patient prescriptions online.</li>
              <li>A unified health care system that can be browsed online by everyone.</li>
              <li>Adding new patients through specialists in the hospital.</li>
            </ul>
            <div className='Arrow2'></div>
       </div>

       <div className='ThirdSection'>
        <h3>Ambulatory point</h3>
        <p>The Hospital Management Information System Software allows easy access to patient data to generate various records, including classification based on demographic, gender, age, and so on. It is especially beneficial at the ambulatory point, hence enhancing continuity of care. Internet-based access improves the ability to access such data remotely.</p>
        <div className='Arrow3'></div>
       </div>


       <div className='FourthSection'>
        <h3>Quality</h3>
        <p>It provides all data in a single platform, hence enabling Business Intelligence Module to provide valuable insights into hospital operations and the quality of patient care.</p>
        <div className='Arrow4'></div>
       </div>

    </div>
  )
}

export default Documentation
