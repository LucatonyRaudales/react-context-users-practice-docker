import React, { useContext } from "react";
import userContext from '../context/user/user_context'
import {Card, Avatar} from '@material-ui/core'

const Profile = () => {
    const { selectedUser } = useContext(userContext)

    return (
        <div>
            {
                selectedUser
                    ?
                    (<Card>
                        <Avatar src={selectedUser.avatar} />
                        <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                        <h3>Email: {selectedUser.email}</h3>
                    </Card>)
                    :
                    (<h1> No user selected</h1>)
            }
        </div>
    );
}

export default Profile;