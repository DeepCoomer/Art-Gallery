import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const { isAuthenticated } = useAuth0();
    const handleAuthentication = () => {
        if (!isAuthenticated) {
            toast.error("Please Login"); 
        }
    }
    return (
        <div>
            <section className="home">
                <div className="heading">
                    <p>Welcome to Art Gallery</p>
                </div>

                <p style={{ fontSize: 19 }}>lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p style={{ fontSize: 5 }}></p>
                <div className='container-fluid'>
                    <Link to={isAuthenticated ? "/arts" : "/"} role={'button'} className="btn btn-primary" onClick={handleAuthentication}>View Arts</Link>


                    <Link className="mx-3 btn btn-primary" role={'button'} to={isAuthenticated ? "/profile" : "/"} onClick={handleAuthentication}>View Profile</Link>
                </div>


            </section>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false} />
        </div>
    )
}

export default Home