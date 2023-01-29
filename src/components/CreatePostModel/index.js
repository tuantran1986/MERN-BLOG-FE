import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../redux/action';
import { selectShowModal } from '../../redux/selector'

export default function CreatePostModel() {

    const dispatch = useDispatch();

    const showModal = useSelector(selectShowModal);
    const handleClose = () => {
        dispatch(hideModal());
    }


    const bodyModal = (<div className=''>

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
