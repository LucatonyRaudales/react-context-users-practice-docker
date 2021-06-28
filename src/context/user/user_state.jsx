import React, { useReducer } from "react"
import UserReducer from './user_reducer';
import UserContext from "./user_context";
import axios from "axios";

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({
            type: 'GETUSERS',
            payload: res.data.data
        })
    }

    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/' + id)
        dispatch({
            type: "GET PROFILE",
            payload: res.data.data
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;