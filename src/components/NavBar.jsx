import React, { useEffect, useState } from "react";
import logo from "/public/assets/images/furnisheet-logo.png?url";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

function useToggle(defaultValue) {
  const [toggle, setToggle] = useState(() =>
    typeof defaultValue === "boolean" ? defaultValue : false
  );

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleToggleValue = (val) => {
    setToggle(val);
  };

  return {
    toggle,
    handleToggle,
    handleToggleValue,
  };
}

const NavBar = () => {
  const [sub, setSub] = useState("categories");
  const [signedIn, setSignedIn] = useState(true);
  const [lagos, setLagos] = useState(true);
  const locationMenuToggle = useToggle();
  const profileMenuToggle = useToggle();
  const [hasShadow, setHasShadow] = useState(false);

  // Track screen size: 'small', 'medium', or 'large'
  const [screenSize, setScreenSize] = useState("large");
  const [navMenuOpen, setNavMenuOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false); // Track active submenu index

  // Update screen size state based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let newSize;
      if (width < 768) {
        newSize = "small"; // Mobile
      } else if (width >= 768 && width < 1024) {
        newSize = "medium"; // Tablet
      } else {
        newSize = "large"; // Desktop
      }

      console.log("New screen size:", newSize); // Debugging log

      // Only update state if it has changed
      setScreenSize((prevSize) => {
        if (prevSize !== newSize) {
          return newSize;
        }
        return prevSize;
      });
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle navigation menu (mobile view)
  const toggleNavMenu = () => setNavMenuOpen(!navMenuOpen);

  // Toggle submenu by index
  const toggleSubMenu = (index) => {
    setSubMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const updateMenuShow = () => {
  //     const width = window.innerWidth;
  //     if (width < 800) {
  //       setIsSmallScreen(true);
  //       setIsMediumScreen(false);
  //     } else if (width < 1200) {
  //       setIsSmallScreen(false);
  //       setIsMediumScreen(true);
  //     } else {
  //       setIsSmallScreen(false);
  //       setIsMediumScreen(false);
  //     }
  //   };
  //   updateMenuShow();
  //   window.addEventListener("resize", updateMenuShow);

  //   return () => {
  //     window.removeEventListener("resize", updateMenuShow);
  //   };
  // }, []);
  const closeMenu = (e) => {
    e.target.closest(".drop-down").classList.remove("hidden");
    setLocationMenuOpen(false);
  };

  const dropdown = (e, sub) => {
    const svg = e.currentTarget.querySelector("svg"); // Get the clicked SVG icon
    console.log(svg);

    // Toggle rotation class for the clicked SVG
    svg.classList.toggle("rotate-90");

    const svgs = document.querySelectorAll(".sub-link svg"); // Select all dropdown SVGs

    // Remove rotation from all other SVGs
    svgs.forEach((item) => {
      if (item !== svg && item.classList.contains("rotate-90")) {
        item.classList.remove("rotate-90");
      }
    });

    // Update submenu state
    setSub(sub);
    setSubMenuOpen(true);

    // Check if any dropdown is open
    let oneOpen = Array.from(svgs).some((svg) =>
      svg.classList.contains("rotate-90")
    );

    // Close submenu if no dropdown is open
    if (!oneOpen) setSubMenuOpen(false);

    // Adjust `navMenuOpen` based on `screenSize`
    if (screenSize === "small" && subMenuOpen) {
      setNavMenuOpen(false);
    } else if (screenSize !== "small" && subMenuOpen) {
      setNavMenuOpen(true);
    }

    console.log(navMenuOpen);
  };

  return (
    <div className=" sticky top-0 z-50 bg-white">
      <div
        className={`content flex space-x-5 items-center  justify-between px-10 text-nowrap py-5   relative ${
          hasShadow ? "shadow-sm" : "border-b-mid-grey border-b"
        }`}
      >
        {/* menu-btn */}
        <span
          className="menu-btn lg:hidden cursor-pointer "
          onClick={toggleNavMenu}
        >
          <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 fill-black hover:fill-secondary"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.576923 0C0.423914 0 0.277171 0.0663086 0.168977 0.184339C0.0607828 0.302368 0 0.462451 0 0.629371C0 0.79629 0.0607828 0.956373 0.168977 1.0744C0.277171 1.19243 0.423914 1.25874 0.576923 1.25874H14.4231C14.5761 1.25874 14.7228 1.19243 14.831 1.0744C14.9392 0.956373 15 0.79629 15 0.629371C15 0.462451 14.9392 0.302368 14.831 0.184339C14.7228 0.0663086 14.5761 0 14.4231 0H0.576923ZM0 5.66434C0 5.49742 0.0607828 5.33733 0.168977 5.2193C0.277171 5.10127 0.423914 5.03497 0.576923 5.03497H14.4231C14.5761 5.03497 14.7228 5.10127 14.831 5.2193C14.9392 5.33733 15 5.49742 15 5.66434C15 5.83125 14.9392 5.99134 14.831 6.10937C14.7228 6.2274 14.5761 6.29371 14.4231 6.29371H0.576923C0.423914 6.29371 0.277171 6.2274 0.168977 6.10937C0.0607828 5.99134 0 5.83125 0 5.66434ZM0 10.6993C0 10.5324 0.0607828 10.3723 0.168977 10.2543C0.277171 10.1362 0.423914 10.0699 0.576923 10.0699H14.4231C14.5761 10.0699 14.7228 10.1362 14.831 10.2543C14.9392 10.3723 15 10.5324 15 10.6993C15 10.8662 14.9392 11.0263 14.831 11.1443C14.7228 11.2624 14.5761 11.3287 14.4231 11.3287H0.576923C0.423914 11.3287 0.277171 11.2624 0.168977 11.1443C0.0607828 11.0263 0 10.8662 0 10.6993Z"
            />
          </svg>
        </span>
        {/* navlinks */}
        <div className="nav-links  space-x-5 items-center text-sm  hidden lg:flex w-1/3 justify-between font-semibold">
          <Link to="/all" className="nav-link">
            <span>Furniture</span>
            <span className="line bg-secondary h-4"></span>
          </Link>
          <Link to="/how" className="nav-link">
            How it works
          </Link>
          <Link to="/about" className="nav-link">
            About Furnisheet
          </Link>
        </div>
        {/* logo */}
        <Link to="/" className="logo w-1/3 flex justify-center items-center">
          <img src={logo} alt="" />
        </Link>
        {/*  */}
        {/* others */}
        <div className="others flex justify-evenly space-x-5 items-center w-1/3">
          <div
            className="pick md:flex items-center space-x-2 text-nowrap font-medium hidden stroke-black fill-black hover:fill-secondary hover:stroke-secondary"
            onClick={() => {
              locationMenuToggle.handleToggle();
              profileMenuToggle.handleToggleValue(false);
            }}
          >
            <span className="mr-2">
              <svg
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-inherit"
              >
                <path
                  d="M12.4212 2.95907C11.2514 1.78961 9.68995 1.0949 8.0381 1.00903C6.38626 0.923155 4.76115 1.4522 3.47643 2.49406C2.19171 3.53592 1.33846 5.01674 1.08134 6.65071C0.824231 8.28469 1.18149 9.95598 2.08416 11.342L6.73542 18.4825C6.83892 18.6414 6.98045 18.7719 7.14716 18.8623C7.31388 18.9527 7.50051 19 7.69014 19C7.87977 19 8.0664 18.9527 8.23311 18.8623C8.39983 18.7719 8.54135 18.6414 8.64486 18.4825L13.2963 11.342C14.1338 10.0563 14.504 8.52167 14.3447 6.99544C14.1854 5.46922 13.5063 4.04414 12.4212 2.95907ZM12.2648 10.6701L7.69016 17.6927L3.11546 10.6701C1.71516 8.52044 2.0155 5.64368 3.82957 3.82953C4.33655 3.32254 4.93842 2.92037 5.60082 2.64599C6.26322 2.37161 6.97318 2.23039 7.69016 2.23039C8.40714 2.23039 9.1171 2.37161 9.7795 2.64599C10.4419 2.92037 11.0438 3.32254 11.5507 3.82953C13.3648 5.64368 13.6651 8.52044 12.2648 10.6701Z"
                  strokeWidth="0.5"
                />
              </svg>
            </span>
            Pick Store Location
          </div>
          <span
            className="profile"
            onClick={() => {
              profileMenuToggle.handleToggle();
              locationMenuToggle.handleToggleValue(false);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-black fill-black hover:fill-secondary hover:stroke-secondary"
            >
              <path
                d="M19 9.991C19 5.0275 14.968 1 10 1C5.032 1 1 5.0275 1 9.991C1 12.7248 2.242 15.1885 4.186 16.8422C4.204 16.8602 4.222 16.8603 4.222 16.8783C4.384 17.0042 4.546 17.1302 4.726 17.2563C4.816 17.3102 4.888 17.3811 4.978 17.4531C6.46533 18.4615 8.22105 19.0004 10.018 19C11.815 19.0004 13.5707 18.4615 15.058 17.4531C15.148 17.3991 15.22 17.3283 15.31 17.2731C15.472 17.1483 15.652 17.0222 15.814 16.8962C15.832 16.8783 15.85 16.8782 15.85 16.8602C17.758 15.1874 19 12.7248 19 9.991ZM10 17.8671C8.308 17.8671 6.76 17.3271 5.482 16.4282C5.5 16.2842 5.536 16.1414 5.572 15.9974C5.67926 15.6071 5.83656 15.2324 6.04 14.8825C6.238 14.5405 6.472 14.2345 6.76 13.9645C7.03 13.6945 7.354 13.4436 7.678 13.2456C8.02 13.0476 8.38 12.9036 8.776 12.7956C9.17508 12.6881 9.58668 12.634 10 12.6348C11.227 12.6261 12.4089 13.0967 13.294 13.9465C13.708 14.3605 14.032 14.8465 14.266 15.4034C14.392 15.7274 14.482 16.0694 14.536 16.4282C13.2076 17.3622 11.6239 17.8646 10 17.8671ZM7.246 9.54212C7.0874 9.179 7.00764 8.78635 7.012 8.39012C7.012 7.99525 7.084 7.59925 7.246 7.23925C7.408 6.87925 7.624 6.55638 7.894 6.28638C8.164 6.01638 8.488 5.8015 8.848 5.6395C9.208 5.4775 9.604 5.4055 10 5.4055C10.414 5.4055 10.792 5.4775 11.152 5.6395C11.512 5.8015 11.836 6.0175 12.106 6.28638C12.376 6.55638 12.592 6.88037 12.754 7.23925C12.916 7.59925 12.988 7.99525 12.988 8.39012C12.988 8.80412 12.916 9.18213 12.754 9.541C12.5977 9.89567 12.3781 10.2189 12.106 10.495C11.8298 10.7667 11.5066 10.9859 11.152 11.1419C10.4082 11.4476 9.57382 11.4476 8.83 11.1419C8.47541 10.9859 8.15215 10.7667 7.876 10.495C7.60354 10.223 7.3892 9.89839 7.246 9.541V9.54212ZM15.598 15.5114C15.598 15.4754 15.58 15.4574 15.58 15.4214C15.403 14.8582 15.142 14.325 14.806 13.8396C14.4697 13.3507 14.0563 12.9195 13.582 12.5627C13.2198 12.2903 12.8272 12.0607 12.412 11.8787C12.6009 11.7542 12.7759 11.6097 12.934 11.4479C13.2024 11.1829 13.438 10.8868 13.636 10.5659C14.0347 9.91091 14.2405 9.1568 14.23 8.39012C14.2356 7.82258 14.1253 7.25986 13.906 6.73637C13.6895 6.23197 13.3778 5.774 12.988 5.3875C12.5988 5.00503 12.1407 4.69966 11.638 4.4875C11.1136 4.26857 10.5502 4.15871 9.982 4.16462C9.41373 4.15907 8.85028 4.26931 8.326 4.48863C7.81891 4.70034 7.35975 5.01218 6.976 5.4055C6.59355 5.79429 6.28817 6.25197 6.076 6.75437C5.85668 7.27786 5.74643 7.84058 5.752 8.40812C5.752 8.80412 5.806 9.18213 5.914 9.541C6.022 9.919 6.166 10.261 6.364 10.5839C6.544 10.9079 6.796 11.1959 7.066 11.4659C7.228 11.6279 7.408 11.7708 7.606 11.8967C7.18956 12.0836 6.79681 12.3192 6.436 12.5988C5.968 12.9588 5.554 13.3896 5.212 13.8576C4.87254 14.341 4.61134 14.8748 4.438 15.4394C4.42 15.4754 4.42 15.5114 4.42 15.5294C2.998 14.0905 2.116 12.1488 2.116 9.991C2.116 5.6575 5.662 2.11487 10 2.11487C14.338 2.11487 17.884 5.6575 17.884 9.991C17.8816 12.061 17.0597 14.0458 15.598 15.5114Z"
                stroke-width="0.5"
              />
            </svg>
          </span>
          <span className="search">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" fill-black hover:fill-secondary"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.8929 11.6086L17.7348 16.4505C17.905 16.6208 18.0005 16.8518 18.0004 17.0925C18.0004 17.3333 17.9046 17.5641 17.7343 17.7343C17.564 17.9045 17.3331 18.0001 17.0923 18C16.8516 17.9999 16.6207 17.9042 16.4505 17.7339L11.6086 12.892C10.1612 14.0131 8.34104 14.5406 6.51844 14.3674C4.69585 14.1941 3.00771 13.333 1.79746 11.9593C0.587216 10.5855 -0.0542374 8.80231 0.00359662 6.97241C0.0614306 5.14251 0.814208 3.40337 2.10879 2.10879C3.40337 0.814208 5.14251 0.0614306 6.97241 0.00359662C8.80231 -0.0542374 10.5855 0.587216 11.9593 1.79746C13.333 3.00771 14.1941 4.69585 14.3674 6.51844C14.5406 8.34104 14.0131 10.1612 12.892 11.6086H12.8929ZM7.20051 12.5995C8.63265 12.5995 10.0061 12.0306 11.0188 11.0179C12.0315 10.0052 12.6004 8.63175 12.6004 7.19961C12.6004 5.76748 12.0315 4.39399 11.0188 3.38132C10.0061 2.36865 8.63265 1.79973 7.20051 1.79973C5.76838 1.79973 4.3949 2.36865 3.38222 3.38132C2.36955 4.39399 1.80063 5.76748 1.80063 7.19961C1.80063 8.63175 2.36955 10.0052 3.38222 11.0179C4.3949 12.0306 5.76838 12.5995 7.20051 12.5995Z"
              />
            </svg>
          </span>
          <span className="cart">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" fill-black hover:fill-secondary"
            >
              <path d="M19.822 4.431C19.73 4.29808 19.6072 4.18943 19.464 4.11436C19.3209 4.0393 19.1616 4.00006 19 4H5.333L4.179 1.23C4.02769 0.865226 3.77147 0.553593 3.44282 0.334615C3.11418 0.115638 2.72791 -0.00082104 2.333 4.35724e-06H0V2H2.333L7.077 13.385C7.15299 13.5672 7.28118 13.7228 7.44542 13.8322C7.60967 13.9416 7.80263 14 8 14H16C16.417 14 16.79 13.741 16.937 13.352L19.937 5.352C19.9937 5.20063 20.0129 5.03776 19.9928 4.87735C19.9728 4.71695 19.9142 4.56379 19.822 4.431ZM15.307 12H8.667L6.167 6H17.557L15.307 12Z" />
              <path d="M8.5 18C9.32843 18 10 17.3284 10 16.5C10 15.6716 9.32843 15 8.5 15C7.67157 15 7 15.6716 7 16.5C7 17.3284 7.67157 18 8.5 18Z" />
              <path d="M15.5 18C16.3284 18 17 17.3284 17 16.5C17 15.6716 16.3284 15 15.5 15C14.6716 15 14 15.6716 14 16.5C14 17.3284 14.6716 18 15.5 18Z" />
            </svg>
          </span>
        </div>
      </div>

      {/* collapsibles */}

      {profileMenuToggle.toggle && !locationMenuToggle.toggle && (
        <div className="profile-menu drop-down flex-col flex absolute right-5">
          <span className="greeting text-2xl">Hi Name</span>
          {signedIn && <span>Account</span>}
          <span>login</span>
        </div>
      )}
      {locationMenuToggle.toggle && !profileMenuToggle.toggle && (
        <div className="location-menu drop-down max-w-80  flex-col absolute top-20 right-5 flex">
          <div className="top flex items-center mb-3">
            <span className="text-xl ">Choose Your Delivery Location?</span>{" "}
            <span className="svg cursor-pointer" onClick={(e) => closeMenu(e)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <path d="M2.29924 0.375183C2.04716 0.131721 1.70955 -0.00299468 1.35911 5.05248e-05C1.00867 0.00309573 0.673453 0.143659 0.425648 0.391464C0.177842 0.63927 0.0372792 0.974491 0.034234 1.32493C0.0311888 1.67536 0.165905 2.01298 0.409366 2.26505L8.12789 9.98358L0.40803 17.7021C0.280377 17.8254 0.178556 17.9729 0.108509 18.1359C0.0384622 18.299 0.00159259 18.4744 5.04638e-05 18.6518C-0.00149166 18.8293 0.0323248 19.0053 0.0995273 19.1696C0.16673 19.3338 0.265972 19.483 0.391464 19.6085C0.516955 19.734 0.666183 19.8333 0.830439 19.9005C0.994695 19.9677 1.17069 20.0015 1.34815 20C1.52562 19.9984 1.701 19.9615 1.86406 19.8915C2.02713 19.8214 2.17461 19.7196 2.2979 19.592L10.0178 11.8734L17.7363 19.592C17.9884 19.8354 18.326 19.9701 18.6764 19.9671C19.0268 19.9641 19.3621 19.8235 19.6099 19.5757C19.8577 19.3279 19.9982 18.9927 20.0013 18.6422C20.0043 18.2918 19.8696 17.9542 19.6262 17.7021L11.9076 9.98358L19.6262 2.26505C19.8696 2.01298 20.0043 1.67536 20.0013 1.32493C19.9982 0.974491 19.8577 0.63927 19.6099 0.391464C19.3621 0.143659 19.0268 0.00309573 18.6764 5.05248e-05C18.326 -0.00299468 17.9884 0.131721 17.7363 0.375183L10.0178 8.09371L2.29924 0.373846V0.375183Z" />
              </svg>
            </span>
          </div>
          <div className="item flex items-center gap-3 ">
            <span
              className=" border rounded-full border-mid-grey cursor-pointer"
              onClick={() => setLagos((prevState) => !prevState)}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`tick ${lagos ? "fill-secondary" : ""}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                />
              </svg>
            </span>{" "}
            Lagos
          </div>
          <div className="item flex items-center gap-3">
            <span
              className=" border rounded-full border-mid-grey cursor-pointer"
              onClick={() => setLagos((prevState) => !prevState)}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`tick ${!lagos ? "fill-secondary" : ""}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                />
              </svg>
            </span>{" "}
            Abuja
          </div>
        </div>
      )}

      {/* Menu */}
      {(navMenuOpen || subMenuOpen) && (
        <div className="menu bg-white p-5 shadow-md flex items-start w-full">
          {/* navlinks */}{" "}
          {navMenuOpen && (
            <div className="nav-links flex flex-col space-y-2 text-sm font-medium justify-between w-full">
              <div className=" md:max-w-[35rem] md:w-1/2 w-full bg-mid-grey p-3 rounded-lg flex flex-col  md:mb-5 ">
                <h2 className="mb-3 font-medium ">Furniture</h2>
                <div className="sub-links flex flex-col space-y-3">
                  {/* SUBLINK */}
                  <div
                    className="sub-link flex  justify-between items-center hover:fill-secondary hover:text-secondary cursor-pointer fill-black transition-colors duration-200 ease-in-out"
                    onClick={(e) => {
                      dropdown(e, "categories");
                    }}
                  >
                    <span>Categories</span>{" "}
                    <span className="link-arrow cursor-pointer  fill-inherit">
                      <svg
                        className="fill-inherit"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z" />
                      </svg>
                    </span>
                  </div>

                  {/* SUBLINK */}
                  <div
                    className="sub-link flex  justify-between items-center hover:fill-secondary hover:text-secondary cursor-pointer fill-black"
                    onClick={(e) => {
                      dropdown(e, "packages");
                    }}
                  >
                    <span>Packages</span>{" "}
                    <span className="link-arrow hover:fill-secondary fill-inherit cursor-pointer transition-colors duration-200 ease-in-out">
                      <svg
                        className="fill-inherit"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <Link
                to="/how"
                className=" md:max-w-[35rem] md:w-1/2 w-full menu-link bg-mid-grey p-3 rounded-lg my-2"
              >
                How it works
              </Link>
              <Link
                to="/about"
                className="md:max-w-[35rem] md:w-1/2 w-full menu-link bg-mid-grey p-3 rounded-lg"
              >
                About Furnisheet
              </Link>
            </div>
          )}
          {/* SUBMENU */}
          {subMenuOpen && (
            <SubMenu
              sub={sub}
              subMenuOpen={subMenuOpen}
              setSubMenuOpen={setSubMenuOpen}
              setNavMenuOpen={setNavMenuOpen}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
