import css from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import UserNav from "../UserNav/UserNav.jsx";
import TestIcon from "@/assets/icons/test.svg?react";

// import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectUser } from "../../redux/user/selectors.js";

const Header = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const user = useSelector(selectUser);

  return (
    <header className={css.headerContainer}>
      <Logo
      //   isAuthenticated={isLoggedIn}
      />
      <TestIcon style={{ width: 24, height: 24, fill: "#3b82f6" }} />
      <Nav />
      <AuthNav />
      {/* {isLoggedIn ? <UserNav user={user} /> : <AuthNav />} */}
    </header>
  );
};

export default Header;
