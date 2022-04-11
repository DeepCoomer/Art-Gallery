import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Components/1.jpg'

const ArtItem = () => {
    return (
        <div className="container">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, null... <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{new Date().toLocaleDateString()}
                    </span></h5>
                    <br />
                    {/* <p className="card-text"><small className="text-muted">Updated On {new Date().toLocaleString()}</small></p> */}
                    <Link role='button' to={"/art/1"} className="btn btn-sm btn-dark ">View</Link>
                    <span className="mx-5">
                        <i className="far fa-solid fa-thumbs-up " style={{ cursor: "pointer" }} ></i>
                        <p>1 likes</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ArtItem