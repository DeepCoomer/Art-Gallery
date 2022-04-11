import React, { useEffect, useState } from 'react'
import ArtItem from './ArtItem';
// import Spinner from './Spinner';

const Arts = () => {

    // const [loading, setLoading] = useState(false)
    // const [arts, setarts] = useState([1, 2, 3, 4, 5, 6])

    const arts = [1, 2, 3, 4, 5, 6];

    return (
        <div className="row my-4">
            <h2 className="text-center my-5">Arts</h2>
            {/* {loading && <Spinner />} */}
            <div className="container text-center">
                {arts.length === 0 && 'No Arts to display!'}
            </div>
            {arts.map((art, i) => {
                return (
                    <div className="col-md-3 my-5" key={i}>
                        <ArtItem art={art} />
                    </div>
                )
            })}
        </div>
    )
}

export default Arts