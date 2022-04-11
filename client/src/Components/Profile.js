import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import ArtItem from './ArtItem';

const Profile = () => {
    const { user } = useAuth0();
    const arts = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            <br />
            <img src={user.picture} alt="" style={{ borderRadius: "100%" }} />
            <p>{user.nickname}</p>
            <p>{user.email}</p>
            <h3>Your Arts</h3>
            <div className="row my-4">
                {
                    arts.map((art, i) => {
                        return (

                            <div className="col-md-3 my-5" key={i}>
                                <ArtItem art={art} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile