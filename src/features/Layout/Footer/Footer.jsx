import './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <div>Fortnite shop</div>
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
};
