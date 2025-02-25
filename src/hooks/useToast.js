"use client"
import { ToastContext } from '@/context/ToastProvider';
import { useContext } from 'react';

const useToast = () => {
    return useContext(ToastContext);
};

export default useToast;
