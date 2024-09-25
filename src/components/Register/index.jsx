import React, { useState, useContext } from "react"
import UserContext from "../../contexts/users/UserContext"

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Register() {

    const userCtx = useContext(UserContext)
    const { addUser } = userCtx

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {

        event.preventDefault()

        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault()
        addUser(data)
    }

    return (
        <div>
        <h3>
          Crear un usuario
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
            id="username"
            name="username"
            autoComplete="username"
            label="Usuario"
            onChange={(e) => { handleChange(e) }}
          />
  
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
            Guardar
          </Button>
          </Box>
        </div>
  );
};
