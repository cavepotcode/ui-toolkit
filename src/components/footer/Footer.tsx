import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { IFooter } from "../types/IFooter";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faGithub);

const socialIconMap: Record<string, IconDefinition> = {
  facebook: faFacebook,
  twitter: faTwitter,
  instagram: faInstagram,
  linkedin: faLinkedin,
  github: faGithub,
};

export const Footer: FC<IFooter> = ({ columns, imgs, redes }) => {
  return (
    <div className="footer">
      <div className="max-container">
        <div className="img-wrapper">
          <div className="column">
            <a
              href="https://www.cavepotlab.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgs.img1} alt={imgs.img1} />
            </a>

            {imgs.img2 && (
              <a
                href="https://cavepot.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={imgs.img2} alt={imgs.img2} />
              </a>
            )}
          </div>
        </div>
        <div className="text-wrapper">
          {columns.map((column, index) => (
            <div
              className={`column ${index === 0 ? "hide-mobile" : ""}`}
              key={index}
            >
              <>
                <label className="title">{column.title}</label>
                {column.texts.map((text, idx) => (
                  <div key={`pages_${text.label}`}>
                    {text.link ? (
                      text.link.includes("http") ? (
                        <a
                          href={text.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="menu-nav__link"
                        >
                          {text.label}
                        </a>
                      ) : (
                        <NavLink to={text.link} className="menu-nav__link">
                          {text.label}
                        </NavLink>
                      )
                    ) : (
                      <label>{text.label}</label>
                    )}
                  </div>
                ))}
                {index === columns.length - 1 && (
                  <div className="media-container">
                    <div className="social-media">
                      {redes.links.map((obj, key) => {
                        const icon = socialIconMap[obj.label?.toLowerCase()];
                        if (!icon) return null;
                        return (
                          <a
                            key={key}
                            href={obj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={icon} />
                          </a>
                        );
                      })}
                    </div>
                    <div className="clutch-wrapper">
                      <div
                        className="clutch-widget"
                        data-nofollow="true"
                        data-url="https://widget.clutch.co"
                        data-widget-type="1"
                        data-darkbg="true"
                        data-height="40"
                        data-clutchcompany-id="592393"
                      ></div>
                    </div>
                  </div>
                )}
              </>
            </div>
          ))}
        </div>
      </div>
      <div className="date-footer">
        <p className="date-footer-text">
          © {new Date().getFullYear()} Cavepot. All rights reserved
        </p>
      </div>
    </div>
  );
};
