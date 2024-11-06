function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-neutral footer-center text-white flex justify-center">
      <img src="src\assets\mylogo.png" alt="My Logo" width={35} />
      <p>Copyright &copy; {footerYear} All Rights Reserved </p>
    </footer>
  );
}

export default Footer;
