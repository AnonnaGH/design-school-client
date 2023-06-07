import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {


    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <Helmet>
                <title>Graphic Design School| Login</title>
            </Helmet>


        </div>

    );
};

export default Login;