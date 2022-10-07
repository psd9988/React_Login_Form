import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Details() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loginData, setLoginData] = useState([]);

    const history = useNavigate();

    let todayDate = new Date().toISOString().slice(0, 10);

    const Birthday = () => {

        const getUser = localStorage.getItem("user_login");

        if (getUser) {
            const user = JSON.parse(getUser);
            setLoginData(user);

            const userBirth = loginData.map((el) => {
                return el.date == todayDate
            })

console.log(userBirth)
            if (userBirth) {
                setTimeout(() => {
                    console.log('ok')
                    handleShow()
                }, 3000)
            }
        }
    }

    const userLogout = () => {
        localStorage.removeItem("user_login");
        history('/');
    }


    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {loginData.length == 0 ? "error" :
                <>
                    <h1>Details Page </h1>
                    <h1>{loginData[0].name} </h1>
                    <Button onClick={userLogout}>Logout</Button>

                    {loginData[0].date == todayDate?
                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{loginData[0].name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Wishing you the happiest birthday ever!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>:""}

          
                </>
            }
        </>
    )
}

export default Details