import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/users/UserContext";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';

export default function Header() {
    const ctx = useContext(UserContext);
    const { logout, user } = ctx;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        handleClose();
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    RefrescosOnLine.CL
                </Typography>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton
                        aria-label="menu"
                        aria-controls="responsive-menu"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="responsive-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} to="/" onClick={handleClose}>
                            Inicio
                        </MenuItem>
                        {user?.username ? (
                            <>
                                <MenuItem component={Link} to="/perfil" onClick={handleClose}>
                                    Perfil
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    Cerrar sesión
                                </MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem component={Link} to="/registro" onClick={handleClose}>
                                    Registro
                                </MenuItem>
                                <MenuItem component={Link} to="/iniciar-sesion" onClick={handleClose}>
                                    Iniciar sesión
                                </MenuItem>
                            </>
                        )}
                    </Menu>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <MenuItem component={Link} to="/">
                        Inicio
                    </MenuItem>
                    {user?.username ? (
                        <>
                            <MenuItem component={Link} to="/perfil">
                                Perfil
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                Cerrar sesión
                            </MenuItem>
                        </>
                    ) : (
                        <>
                            <MenuItem component={Link} to="/registro">
                                Registro
                            </MenuItem>
                            <MenuItem component={Link} to="/iniciar-sesion">
                                Iniciar sesión
                            </MenuItem>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
