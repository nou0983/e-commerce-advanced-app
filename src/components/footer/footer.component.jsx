import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; 2023 by <span className="footer__name">Comfy Sloth</span>. 
          All Rights Reserved. Developed by Minsu Jung. Design and guide credit to John Smilga.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
