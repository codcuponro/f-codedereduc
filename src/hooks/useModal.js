"use client"

import { removeQueryParams } from '@/utils';
import { Modal, Box } from '@mui/material';
import { useState, useEffect } from 'react';

export const useModal = () => {
    const [modalContent, setModalContent] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
        if (typeof window !== 'undefined') {
            removeQueryParams();
            localStorage.removeItem("couponData");
        }
    };

    const ModalComponent = () => (
        <Modal open={modalIsOpen} onClose={closeModal}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: '50px',
                    borderRadius: '20px',
                    maxWidth: '600px',
                    width: '96%'
                }}
            >
                {modalContent}
                <button onClick={closeModal} className='absolute top-6 right-6'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M8.37695 7.62695L14.0957 1.9082C14.3066 1.69727 14.3066 1.36914 14.0957 1.1582C13.8848 0.947266 13.5566 0.947266 13.3457 1.1582L7.62695 6.87695L1.9082 1.1582C1.69727 0.947266 1.36914 0.947266 1.1582 1.1582C0.947266 1.36914 0.947266 1.69727 1.1582 1.9082L6.87695 7.62695L1.1582 13.3457C0.947266 13.5566 0.947266 13.8848 1.1582 14.0957C1.25195 14.1895 1.39258 14.2598 1.5332 14.2598C1.67383 14.2598 1.81445 14.2129 1.9082 14.0957L7.62695 8.37695L13.3457 14.0957C13.4395 14.1895 13.5801 14.2598 13.7207 14.2598C13.8613 14.2598 14.002 14.2129 14.0957 14.0957C14.3066 13.8848 14.3066 13.5566 14.0957 13.3457L8.37695 7.62695Z" fill="#111928" stroke="#111928" />
                    </svg>
                </button>
            </Box>
        </Modal>
    );

    return { openModal, closeModal, ModalComponent };
};
