import React, { useContext, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import userContext from '../context/user/user_context'

const UserList = () => {
    const { users, getUsers, getProfile } = useContext(userContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="list-group h-100">
            {
                users.map(user => (
                    <a className="list-group-item list-group-item-action" href="#!" key={user.id} onClick={() => getProfile(user.id)}>
                        <Avatar src={user.avatar} />
                        <p>{`${user.first_name} ${user.last_name}`}</p>
                    </a>
                ))
            }
        </div>
    )
}

export default UserList;