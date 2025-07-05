import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ menuItems = [] }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (index) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">POC APP</div>

        <div
          className={`navbar-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="icon-wrapper">
            <FaBars className="icon icon-bars" />
            <FaTimes className="icon icon-times" />
          </span>
        </div>
        <ul className="navbar-menu desktop-only">
          {menuItems.map((item, i) => (
            <li key={i} className="menu-item">
              {item.label}
              {item.subMenu && (
                <ul className="submenu desktop-submenu">
                  {item.subMenu.map((sub, j) => (
                    <li key={j}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </header>

      <div className={`mobile-menu-wrapper ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-menu">
          {menuItems.map((item, i) => (
            <li key={i} className="menu-item">
              <div
                className="mobile-menu-label"
                onClick={() => item.subMenu && toggleSubMenu(i)}
              >
                {item.label}
                {item.subMenu && (
                  <span className="arrow-icon">
                    {openSubMenus[i] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </div>
              {item.subMenu && (
                <ul
                  className={`mobile-submenu ${openSubMenus[i] ? "show" : ""}`}
                >
                  {item.subMenu.map((sub, j) => (
                    <li key={j}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
