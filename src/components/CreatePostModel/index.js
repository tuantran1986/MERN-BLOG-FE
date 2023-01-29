import { Modal } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectShowModal } from '../../redux/selector'

export default function CreatePostModel() {

    const showModal = useSelector(selectShowModal);

    const body = <p>this is body modal</p>

    // RENDER
    return (
        <div>
            <Modal open={showModal}>
                {body}
            </Modal>
        </div>
    )
}
