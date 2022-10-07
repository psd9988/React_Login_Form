import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import {NavLink} from 'react-router-dom'

function Home() {

    const [inputVal, setInputVal] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const [data, setData] = useState([]);

  const getData = (e) => {
     const {value, name} = e.target;

     setInputVal(()=>{
        return {
            ...inputVal,
            [name]: value //using [] 4 name -> setting the value inside name variable/state as key
        }
     })
  }

  const addData = (e) => {
    e.preventDefault()

    const {name, email, date, password} = inputVal;

    if(name==""){
        alert("name field is required")
    } else if(email==""){
        alert("email field is required")
    }else if(!email.includes('@') || !email.includes('.')){
        alert("Invalid email entered")
    }else if(date ==""){
        alert("date field is required")
    }else if(password ==""){
        alert("password field is required")
    }else if(password.length < 5){
        alert("password should be atleast of 5 characters or more")
    }else{
        console.log('data added successfully')

        localStorage.setItem("useryoutube", JSON.stringify([...data, inputVal]))
    }

  }


    return (
        <>
            <div className="container mt-3">

                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getData} placeholder="Enter Your Name" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter Your email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="date" name='date' onChange={getData} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>

                            <Button className='col-lg-6' variant="primary" type="submit" onClick={addData} style={{background:"rgb(73,66,255)"}}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account 
                        <span> <NavLink to="/login"> SignIn </NavLink> </span> </p>
                    
                    </div>
                    <Sign_img/>

                </section>
            </div>
        </>
    )
}

export default Home