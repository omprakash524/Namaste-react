
const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <p>
          Copyright &copy; {currYear}, Made with 💗 by <strong>Om Prakash</strong>
        </p>
      </footer>
    );
  };

export default Footer;