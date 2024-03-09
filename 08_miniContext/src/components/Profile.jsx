import React ,{ useContext }from 'react'
import UseContext from '../context/UseContext'

function Profile() {
    const {user} = useContext(UseContext)

    if (!user) return <div>Please login</div>

    return <div> Welcome : {user.Username} </div>
}
export default Profile