/* eslint-disable no-unused-vars */
import { createTheme, Switch, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import photoURL from "../../assets/home/girl.jpg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// Theme Configuration
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // Red color
    },
    secondary: {
      main: "#00ff00", // Green color
    },
  },
});

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Instructors", route: "/instructors" },
  { name: "Classes", route: "/classes" },
];

const Navber = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navBg, setNavBg] = useState("bg-[#15151580]");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = true; // Assuming a logged-in user for demo purposes

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  useEffect(() => {
    const darkClass = "dark";
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add(darkClass);
    } else {
      root.classList.remove(darkClass);
    }
  }, [isDarkMode]);

  useEffect(() => {
    setIsHome(location.pathname === "/");
    setIsLogin(location.pathname === "/login");
    setIsFixed(location.pathname === "/register" || location.pathname === "/login");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      if (isHome) {
        setNavBg(
          "bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 dark:text-white text-black"
        );
      } else {
        setNavBg("bg-white dark:bg-black dark:text-white text-black");
      }
    } else {
      setNavBg(
        `${
          isHome || location.pathname === "/"
            ? "bg-transparent"
            : "bg-white dark:bg-black"
        } dark:text-white text-black`
      );
    }
  }, [scrollPosition, isHome, location.pathname]);

  return (
    <nav className={` mx-auto sm:px-6 lg:px-6 ${navBg}`}>
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div >
          <NavLink to="/">
          
          <h1 className="text-2xl inline-flex gap-3 items-center font-bold">
            YogaMaster
            <img src="/yoga-logo.png" alt="Yoga Logo" className="w-8 h-8" />
          </h1>
          <p className="font-bold text-[13px] tracking-[8px]">Quick Explore</p>
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex ml-10 items-center space-x-4 pr-4">
            {navLinks.map((link) => (
              <li key={link.route}>
                <NavLink
                  to={link.route}
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? "text-secondary" : ""
                    } ${
                      isDarkMode
                        ? "text-white"
                        : "text-black" // Ensure black text in light mode
                    } hover:text-secondary duration-300`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* User Section */}
            {user && (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    // style={{whiteSpace: "nowrap"}}
                    className={({ isActive }) =>
                      `font-bold ${
                        isActive ? "text-secondary" : ""
                      } ${
                        isDarkMode
                          ? "text-white"
                          : "text-black" // Ensure text color is visible
                      } hover:text-secondary duration-300`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <img src={photoURL} alt="" className="h-10 rounded-full w-10" />
                </li>
                <li>
                  <NavLink
                    onClick={handleLogout}
                    className="font-bold px-3 py-2 bg-secondary text-white rounded-xl"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}

            {/* Light/Dark Mode Toggle */}
            <ThemeProvider theme={theme}>
              <div className="flex flex-col justify-center items-center">
                <Switch onChange={() => setIsDarkMode(!isDarkMode)} />
                <h1 className="text-[8px]">Light/Dark</h1>
              </div>
            </ThemeProvider>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <FaBars className="h-6 w-6 hover:text-primary" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.route}>
                <NavLink
                  to={link.route}
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? "text-secondary" : ""
                    } ${
                      isDarkMode
                        ? "text-white"
                        : "text-black" // Ensure proper visibility in light mode
                    } hover:text-secondary duration-300`
                  }
                  onClick={toggleMobileMenu} // Close menu on link click
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {user && (
              <>
                <li>
                  <NavLink to="/dashboard" onClick={toggleMobileMenu}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <img src={photoURL} alt="" className="h-10 rounded-full w-10" />
                </li>
                <li>
                  <NavLink
                    onClick={handleLogout}
                    className="font-bold px-3 py-2 bg-secondary text-white rounded-xl"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navber;
