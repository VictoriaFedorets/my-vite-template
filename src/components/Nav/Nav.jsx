import clsx from "clsx";
import css from "./Nav.module.css";
import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

export default function Nav() {
  //   const dispatch = useDispatch();
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  const getNavLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <nav className={css.headerNav}>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/teachers" className={getNavLinkClass}>
        Teachers
      </NavLink>
      {/* {isLoggedIn && (
        <NavLink to="/favorites" className={getNavLinkClass}>
          Favorites
        </NavLink>
      )} */}
    </nav>
  );
}
