import React, { useState, useEffect } from 'react';

export default function useCustomHook ()  {

    const [isMobile, setIsMobile] = useState(null);

    const calculateIsMobile = () => {
        if (window.innerWidth < 768 ) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    window.addEventListener('resize', calculateIsMobile)

    useEffect(() => {
        calculateIsMobile();
    }, [])

    return isMobile;
}


