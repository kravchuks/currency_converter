import { NavLink } from "react-router-dom"
import style from "./Header.module.css"

const Header = () => {
    return <header>
        <NavLink to={''}>Currency</NavLink>
        <div className={style.partition}></div>
        <NavLink to={'/exchange'}>Exchange</NavLink>
    </header>
};

export default Header;