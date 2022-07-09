import {
  FaDiscord,
  FaGithub,
  FaMedium,
  FaMediumM,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { Icon } from "ui";
import { clsnm } from "utils/clsnm";
import styles from "./Footer.module.scss";

const Footer = () => {
  const footerLinks = [
    {
      name: "Contact",
      url: "#",
    },
    {
      name: "Whitepaper",
      url: "#",
    },
    {
      name: "Develop",
      url: "#",
    },
    {
      name: "Terms",
      url: "#",
    },
  ];

  const footerSocial = [
    {
      name: "Twitter",
      url: "#",
      icon: <FaTwitter />,
    },
    {
      name: "Telegram",
      url: "#",
      icon: <FaTelegram />,
    },
    {
      name: "Discord",
      url: "#",
      icon: <FaDiscord />,
    },
    {
      name: "Medium",
      url: "#",
      icon: <FaMediumM />,
    },
    {
      name: "Github",
      url: "#",
      icon: <FaGithub />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          {footerLinks.map((item) => {
            return (
              <div key={item.name} className={styles.linkWrapper}>
                <a className={clsnm(styles.link, "link")} href={item.url}>
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
        <div className={styles.links}>
          {footerSocial.map((item) => {
            return (
              <div
                key={item.name}
                className={clsnm(styles.linkWrapper, styles.social)}
              >
                <a className={clsnm(styles.icon, "link")} href={item.url}>
                  <Icon>{item.icon}</Icon>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
