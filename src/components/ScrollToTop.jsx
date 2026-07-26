import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Instantly scroll back to top-left of the window
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component doesn't render any UI
}