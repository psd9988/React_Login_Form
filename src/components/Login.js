import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Sign_img from './Sign_img';

function Login() {
    const history = useNavigate();
    const [inputVal, setInputVal] = useState({
        email: "",
        password: ""
    })
    const [data, setData] = useState([]);
    const getData = (e) => {
        const { value, name } = e.target;
        setInputVal(() => {
            return {
                ...inputVal,
                [name]: value //using [] 4 name -> setting the value inside name variable/state as key
            }
        })
    }
    const addData = (e) => {
        e.preventDefault()
        const getUserArr = localStorage.getItem('useryoutube');
        const { email, password } = inputVal;
        if (email == "") {
            alert("email field is required")
        } else if (!email.includes('@') || !email.includes('.')) {
            alert("Invalid email entered")
        } else if (password == "") {
            alert("password field is required")
        } else if (password.length < 5) {
            alert("password should be atleast of 5 characters or more")
        } else {

            if (getUserArr) {
                const userData = JSON.parse(getUserArr);
                const userLogin = userData.filter((el) => {
                    return el.email == email && el.password == password
                    //this filter will add data to userLogin from userData if the condition is true else it will return an empty array 
                })
                if (userLogin.length == 0) {
                    alert('invalid username or password')
                } else {
                    console.log('user logged in successfully')
                    localStorage.setItem("user_login", JSON.stringify(userLogin))
                    history("/details")
                }
            }
        }
    }
    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter Your email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>

                            <Button className='col-lg-6' variant="primary" type="submit" onClick={addData} style={{ background: "rgb(73,66,255)" }}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>
    )
}

export default Login