import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ path, texto }) {
    // const localizacao = useLocation();
    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={path}
            end
        >
            {texto}
        </NavLink>
    )
}