import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// CYDB - SAI:
// import { FileBase64 } from 'react-file-base64';
// CYDB - ĐÚNG:
import FileBase64 from 'react-file-base64';

import { Send } from '@mui/icons-material';
import { Button, Grid, Modal, TextareaAutosize, TextField } from '@mui/material';
import { hideModal } from '../../redux/action';
import { selectShowModal } from '../../redux/selector';
import { useStyles } from './style';

export default function CreatePostModel() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const showModal = useSelector(selectShowModal);

    const [data, setData] = useState({
        author: '',
        title: '',
        content: '',
        attachment: ''
    });

    // 
    const handleClose = () => {
        dispatch(hideModal());
    }
    const onSubmit = () => {
        console.log('submit - data: ', data);        
        dispatch(hideModal());
    }


    // RENDER:
    const bodyModal = (<div className={classes.paper} id='simple-modal-title'>
        <h2 className={classes.header}>Create New Post</h2>
        <form noValidate autoComplete='off' className={classes.form}>

            <TextField
                className={classes.title}
                required
                label='Author'
                value={data.author}
                onChange={(e) => setData({ ...data, author: e.target.value })}
            />
            <TextField
                className={classes.title}
                required
                label='Title'
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <TextareaAutosize
                className={classes.textarea}
                rowsMin={10}
                rowsMax={15}
                placeholder='Content...'
                value={data.content}
                onChange={(e) => setData({ ...data, content: e.target.value })}
            />

            {/* CYDB : FileBase64 : để upload ảnh ! */}
            <FileBase64
                accept='image/*'
                multiple={false}
                type='file'
                // CYDB - FILEBASE64 : value + onDone
                value={data.attachment}
                onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
            />

            {/* SUBMIT */}
            <div className={classes.footer}>
                <Button
                    variant='contained'
                    color='primary'
                    component='span'
                    fullWidth
                    onClick={onSubmit}
                >
                    Create
                </Button>
            </div>

        </form>
    </div>)

    // RENDER
    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                {bodyModal}
            </Modal>
        </div>
    )
}
