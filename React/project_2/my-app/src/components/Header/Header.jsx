import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import imgLogo from "../../assets/Logo.svg";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import "./header.css";

export default function Header() {
    const { isLogin } = useContext(UserContext);
    return (
        <>
            <header>
                <div className="max-width">
                    <h1>
                        <Link to="/">
                            <img src={imgLogo} alt="My Blog" />
                        </Link>
                    </h1>
                    <ul>{isLogin ? <Login /> : <Logout />}</ul>
                </div>
            </header>
        </>
    );
}
