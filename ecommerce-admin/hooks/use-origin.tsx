import { useEffect, useState } from "react"


export const useOrigin = () => {
    const [mounted, setMounted] = useState(false);
    //we are checking if the window is available. If it is, we are checking if the window location exists
    const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : '';

    //hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return '';
    };

    return origin;
}