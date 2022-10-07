import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {

    const history = useNavigate();

  return (
    <>
        <div className="container">
        <div className="error d-flex flex-column justify-content-lg-center align-items-center">
        <img src="./404.jpg" alt="error" className='errorimg' style={{width: "300px", margin:"50px"}} />
        <h4>404 Error ! Page Not Found 😭</h4>
        <button className='btn btn-primary' onClick={()=>history("/")}>Redirect Login Page</button>

        </div>

        </div>
    </>
  )
}

export default Error