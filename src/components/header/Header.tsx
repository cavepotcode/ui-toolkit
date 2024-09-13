import { CSSProperties, useEffect, useState } from "react";
import { FC } from "react";
import { IHeader, Size } from "../types/IHeader";
import { HeaderItem } from "./HeaderItem";

import "./Header.scss";

export const Header: FC<IHeader> = ({
  logo,
  links,
  backgroundColor,
  textColor,
  contactBtnColor,
  contactBtnColorText
}) => {
  const style: CSSProperties & { [key: string]: string } = {
    "--header-background-color": backgroundColor || 'white',
    "--header-text-color": textColor || 'black',
    "--contact-btn-color": contactBtnColor || 'white',
    "--contact-btn-color-text": contactBtnColorText || 'black'
  };
  // The size of the window
  const [size, setSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [showMenu, setShowMenu] = useState(false);
  const [colapse, setColapse] = useState(false);
  const onShowMenu = () => setShowMenu((prev) => !prev);
  const onColapse = (value: boolean) => setColapse(value);

  useEffect(() => {
    const handleNavigation = (e: Event) => {
      const target = e.currentTarget as Window;
      if (target.scrollY > 60) {
        onColapse(true);
      } else {
        onColapse(false);
      }
    };
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation)
    }
  }, [colapse]);

  useEffect(() => {
    // This function updates the state thus re-render components
    const resizeHanlder = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSize({
        width: width,
        height: height,
      });
    };
    const navItems = document.querySelectorAll(".menu-nav__item");
    if (showMenu) {
      navItems.forEach((item) => item.classList.add("open"));
    } else {
      navItems.forEach((item) => item.classList.remove("open"));
    }
    window.addEventListener("resize", resizeHanlder);
    return () => {
      window.removeEventListener("resize", resizeHanlder);
    };
  }, [showMenu]);

  return (
    <div
      id="header"
      className={`header ${colapse ? "colapse" : ""} ${showMenu ? "open" : ""}`}
      style={style}
    >
      {logo}

      <div className="menu-btn" onClick={onShowMenu}>
        <span
          className={showMenu ? "menu-btn__burger open" : "menu-btn__burger"}
        ></span>
      </div>
      <nav className={showMenu ? "nav open" : "nav"}>
        <ul className={showMenu ? "menu-nav open" : "menu-nav"}>
          {links.map((obj, index: number) => (
            <HeaderItem
              item={obj}
              key={index}
              onShowMenu={onShowMenu}
              size={size}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
