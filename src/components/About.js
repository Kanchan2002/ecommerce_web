import React, { useState } from 'react'
import './About.css'
function About() {
    const [inputDetails,setInputDetails] = useState({
        firstName: '',
        lastName: '',
        Email: '',
        Message: '',
    })
    let name,value;
    const updateDetail = (e)=>{
        name= e.target.name;
        value= e.target.value;
        setInputDetails({...inputDetails,[name]:value})
    }
    const onsubmitHandler = async (e)=>{
      e.preventDefault();
       const {firstName,lastName,Email,Message} = inputDetails;
       const res = await fetch('https://reactfirebasewebsite-99c59-default-rtdb.firebaseio.com/userDataRecord.json',{
         method: "POST",
         headers: {
            "Content-Type":"application/json",
         },
         body: JSON.stringify({
            firstName,
            lastName,
            Email,
            Message,
         }),
       })
       if (res.ok) {
        setInputDetails({
          firstName: '',
          lastName: '',
          Email: '',
          Message: '',
        });
        alert("Your form submitted.");
      } else {
        alert("Failed to submit the form.");
      }
    }
  return (
    <div className='form-container'>
        <h2>CONTACT-US</h2>
        <hr />
        <div className='form-div'>
            <form onSubmit={onsubmitHandler}>
                <div>
                    <label htmlFor="">FirstName:</label>
                    <input type="text" name="firstName" value={inputDetails.firstName} onChange={updateDetail}/>
                </div>
                <div>
                    <label htmlFor="">LastName:</label>
                    <input type="text" name="lastName" value={inputDetails.lastName} onChange={updateDetail}/>
                </div>
                <div>
                    <label htmlFor="">Email-Id:</label>
                    <input type="email" name="Email" value={inputDetails.Email} onChange={updateDetail}/>
                </div>
                <div>
                    <label htmlFor="">Message:</label>
                    <textarea name="Message" cols="30" rows="10" value={inputDetails.Message} onChange={updateDetail}></textarea>
                </div>
            
            
                <button type="submit">Submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default About