import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
// import { selectUser } from "../../redux/user/selectors.js";
// import UserLogoModal from "../UserLogoModal/UserLogoModal.jsx";
// import SettingsModal from "../SettingsModal/SettingsModal.jsx";
// import LogOutModal from "../LogOutModal/LogOutModal.jsx";
// import sprite from "../../icons/sprite.svg";
import css from "./UserNav.module.css";

export default function UserNav() {
  // const user = useSelector(selectUser);

  const [isUserLogoModalOpen, setIsUserLogoModalOpen] = useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const btnContainer = useRef(null);
  const [dropDownMenu, setDropDownMenu] = useState({});

  const updateBtnPosition = () => {
    if (btnContainer.current) {
      const rect = btnContainer.current.getBoundingClientRect();
      setDropDownMenu({
        top: rect.top + rect.height + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };
  const handleUserLogoClick = () => {
    setIsUserLogoModalOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("resize", updateBtnPosition);
    updateBtnPosition();
    return () => {
      window.removeEventListener("resize", updateBtnPosition);
    };
  }, []);

  const handleCloseUserLogoModal = () => setIsUserLogoModalOpen(false);

  const handleOpenSettingsModal = () => setIsSettingModalOpen(true);
  const handleOpenLogoutModal = () => setIsLogoutModalOpen(true);

  const handleCloseSettingsModal = () => setIsSettingModalOpen(false);
  const handleCloseLogoutModal = () => setIsLogoutModalOpen(false);

  const getUserInitial = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "?";
  };

  return (
    <div className={css.wrapper}>
      <div className={`${css.point} ${css.relativeWrapper}`}>
        <p className={css.user}>{user?.name || user?.email || "User"}</p>
        <div className={css.logobox}>
          <button
            onClick={handleUserLogoClick}
            className={css.userLogoButton}
            ref={btnContainer}
          >
            {user?.photo ? (
              <img src={user.photo} alt="User photo" className={css.avatar} />
            ) : (
              <span className={css.userInitial}>{getUserInitial()}</span>
            )}
          </button>

          <svg onClick={handleUserLogoClick} className={css.icon}>
            <use href={`${sprite}#icon-chevron-down`} />
          </svg>

          {/* {isUserLogoModalOpen && (
            <UserLogoModal
              isOpen={isUserLogoModalOpen}
              onClose={handleCloseUserLogoModal}
              onOpenSettings={handleOpenSettingsModal}
              onOpenLogout={handleOpenLogoutModal}
              dropDownMenu={dropDownMenu}
            />
          )} */}
        </div>
      </div>

      {/* <SettingsModal
        isOpen={isSettingModalOpen}
        onClose={handleCloseSettingsModal}
      /> */}

      {/* <LogOutModal
        isOpen={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
      /> */}
    </div>
  );
}
