import React from 'react'
import logo from '../Components/1.jpg'

const ArtDetail = () => {
  return (
    <div>
        <section className="heading">
            <img src={logo} alt="" />
        </section>
        <br /> <br />
        <section className="commentsection">
            <textarea name="" className='comment' id="" cols="30" rows="10" placeholder='Share your Thoughts here' style={{width: '90%', maxWidth: '100%', padding: '20px 25px'}}></textarea>
        </section>
        <br />
        <button className="btn btn-primary">Submit</button>
    </div>
  )
}

export default ArtDetail