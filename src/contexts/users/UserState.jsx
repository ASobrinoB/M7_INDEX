
import React, { useReducer } from "react"
import UserContext from "./UserContext"
import UserReducer from "./UserReducer"

import axiosClient from "../../config/axios"

const UserState = (props) => {

    const initialState = {
        user: {
            username: null,
            email: null,
        },
        authStatus: false,
        loading: true
    }

    const [ globalState, dispatch ] = useReducer(UserReducer, initialState)

    const addUser = async (dataForm) => {

        try {
            const res = await axiosClient.post("/user/add-user", dataForm)
            dispatch({
                type: "REGISTRO_EXITOSO",
                payload: res.data
            })

        } catch (error) {
            console.log(error)
        }
    }

    const loginUser = async (dataForm) => {

        try {
            const respuesta = await axiosClient.post("/user/login", dataForm)

            dispatch({
                type: "LOGIN_EXITOSO",
                payload: respuesta.data
            })

        } catch (error) {
            console.log(error)
        }
    }

    const verifyingToken = async () => {

        const token = localStorage.getItem("token")

        if(token){
            axiosClient.defaults.headers.common["authorization"] = `Bearer ${token}`

        } else{
            delete axiosClient.defaults.headers.common["authorization"]
        }

        try {

            const respuesta = await axiosClient.get("/user/verify-token")

            dispatch({
                type: "OBTENER_USUARIO",
                payload: respuesta.data.usuario
            })

        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        dispatch({
            type: "CERRAR_SESION"
        })
    }

    return (
        <UserContext.Provider value={{
            user: globalState.user,
            authStatus: globalState.authStatus,
            loading: globalState.loading,
            addUser,
            loginUser,
            verifyingToken,
            logout
        }}>

            {props.children}

        </UserContext.Provider>
    )


}

export default UserState

