"use client"
import React, { createContext, useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useModal } from '@/hooks/useModal';
import CouponModel from '@/components/model/coupon-model';
import useGetAllSearchParams from "@/hooks/useGetAllSearchParams"

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
        if (allSearchParams?.model === "true") {
            const localCouponData = JSON.parse(localStorage.getItem("couponData") || "{}");
            openModal(<CouponModel data={localCouponData} />);
        }
    }, [])


    useEffect(() => {
        // Load Google Translate script
        const googleTranslateScript = document.createElement("script");
        googleTranslateScript.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(googleTranslateScript);

        // Initialize Google Translate
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: "en", includedLanguages: "ro", autoDisplay: false },
                "google_translate_element"
            );
        };

        // Function to select Romanian automatically
        const setDefaultLanguage = () => {
            const selectEl = document.querySelector(".goog-te-combo");
            if (selectEl) {
                selectEl.value = "ro"; // Set Romanian
                selectEl.dispatchEvent(new Event("change")); // Trigger change event
            }
        };

        setTimeout(setDefaultLanguage, 3000); // Delay to allow the dropdown to load
    }, []);



    return (
        <>
            <ToastContext.Provider value={showToast}>
                {children}
                <Snackbar open={toast.open} autoHideDuration={3000} onClose={closeToast}>
                    <Alert onClose={closeToast} severity={toast.severity} variant="filled">
                        {toast.message}
                    </Alert>
                </Snackbar>
            </ToastContext.Provider>
            <ModalComponent />
            <div id="google_translate_element"></div>
        </>
    );
};

export default ToastProvider;
