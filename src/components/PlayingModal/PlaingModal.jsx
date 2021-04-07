import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function PlayingModal({open, setOpen, currentSpin, getSpin}) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);




    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            { currentSpin ?  <Typography variant= 'h2' color='secondary' align='center'>{currentSpin.slot1}{currentSpin.slot2}{currentSpin.slot3}</Typography>: ''
            }
             <Button variant='contained' style={{width: '33.3%'}} color= 'primary' onClick={getSpin}>Spin</Button>
             <Button variant='contained' style={{width: '33.3%'}} color= 'secondary'>777</Button>
             <Button variant='contained' style={{width: '33.3%'}} color= 'default' onClick={handleClose}>Close</Button>
            <PlayingModal />
        </div>
    );

    return (
        <div>

            <Modal style={{display: 'flex', justifyContent : 'center' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
