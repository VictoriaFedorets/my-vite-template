import css from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import UserNav from "../UserNav/UserNav.jsx";

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
      <Nav />
      <AuthNav />
      {/* {isLoggedIn ? <UserNav user={user} /> : <AuthNav />} */}
    </header>
  );
};

export default Header;
