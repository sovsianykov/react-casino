import React, {useEffect, useState} from 'react';
import { useStyles } from "./styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {FormControl, FormGroup, FormLabel} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}




export default function Header({balance,setBalance}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const [ nickname , setNickname ] = useState('guest');



    const handleClose = () => {
        setOpen(false);
    };
   const handleLogin =(e)=>{
       setNickname(e.target.value)
       setBalance(99)
   }
    const handleLogout =()=>{
        setNickname('guest')
        setBalance('')
    }
    useEffect(() =>{
        const data = localStorage.getItem('my-store3')
        if (data) {  setNickname(JSON.parse(data))}

    },[])
    useEffect(() =>{
        localStorage.setItem('my-store3',JSON.stringify(nickname))
    })


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <FormGroup>
                <FormControl>
                    <FormLabel name='login'>login</FormLabel>
                    <input type="text" name='login' onChange={ e=>{handleLogin(e)}} />
                </FormControl>
            </FormGroup>
        </div>
    );


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        PLAY THE GAME
                    </Typography>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        {body}

                    </Modal>
                    {nickname}  ${balance}
                       <Button color="inherit" onClick={handleOpen} >Login</Button>
                       <Button color="inherit" onClick={handleLogout} >Logout</Button>


                </Toolbar>
            </AppBar>
        </div>
    );
}
