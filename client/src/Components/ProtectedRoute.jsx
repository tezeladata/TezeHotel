import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children, requireAdmin = false, requireLogin = false, blockAdmin = false }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const res = await fetch("https://tezehotel-backend.onrender.com/login/getInfo");
                if (res.ok) {
                    const data = await res.json();
                    setLoggedIn(data.isLoggedIn);
                    setAdmin(data.isAdmin);
                } else {
                    const errorData = await res.json();
                    console.error(errorData.message);
                }
            } catch (err) {
                console.error("Error fetching user info:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUserInfo();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (blockAdmin && admin) {
        return <Navigate to="/" />;
    }

    if (requireAdmin && !admin) {
        return <Navigate to="/" />;
    }

    if (requireLogin && !loggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;