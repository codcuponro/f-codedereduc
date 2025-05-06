"use client"
import React, { createContext, useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useModal } from '@/hooks/useModal';
import CouponModel from '@/components/model/coupon-model';
import useGetAllSearchParams from "@/hooks/useGetAllSearchParams"
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

export const ToastContext = createContext();
const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });
    const { openModal, ModalComponent } = useModal();
    const allSearchParams = useGetAllSearchParams();

    const showToast = (message, severity = 'success') => {
        setToast({ open: true, message, severity });
    };

    const closeToast = () => {
        setToast({ ...toast, open: false });
    };

    useEffect(() => {
        if (allSearchParams.model) {
            const localCouponData = JSON.parse(localStorage.getItem("couponData") || "{}");
            openModal(<CouponModel data={localCouponData} />);
        }
    }, [allSearchParams])

    return (
        <>
            <GoogleAnalytics measurementId="G-92GNDWV7E3" />
            <ToastContext.Provider value={showToast}>
                {children}
                <Snackbar open={toast.open} autoHideDuration={3000} onClose={closeToast}>
                    <Alert onClose={closeToast} severity={toast.severity} variant="filled">
                        {toast.message}
                    </Alert>
                </Snackbar>
            </ToastContext.Provider>            
            <ModalComponent />
        </>
    );
};

export default ToastProvider;
