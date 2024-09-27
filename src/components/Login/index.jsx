import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/users/UserContext";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login(props) {

    const userCtx = useContext(UserContext)

    const { 
        loginUser,
        authStatus,
        verifyingToken
    } = userCtx

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        verifyingToken()
        if(authStatus){
            props.history.push("/perfil")
        }
    }, [authStatus])
  
  if(authStatus) return null   

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault()
        loginUser(data)
    }

    return (
        <div>
        <h3>
          Login del usuario
        </h3>
        <Box
          component="form"
          onSubmit={(e) => { sendData(e) }}
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            label="Correo"
            onChange={(e) => { handleChange(e) }}
          />
  
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            type="password"
            onChange={(e) => { handleChange(e) }}
          />
  
          <Button type="submit">
            Ingresar
          </Button>
          </Box>
        </div>
  );
}