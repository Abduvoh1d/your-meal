import { useEffect, useState } from "react";
import { authStore } from "../store/authStore";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(!!authStore.token);
    }, [authStore.token]);

    return { isAuthenticated };
};
