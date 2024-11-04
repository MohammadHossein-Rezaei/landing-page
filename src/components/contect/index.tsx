import "./styles.css";
type Props = {};

export default function Contect({}: Props) {
  return (
    <div className="contect">
      <b>sunnyside</b>
      <ul className="contect-list">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="social-media">
        <img src="/public/images/icon-facebook.svg" alt="facebook" />
        <img src="/public/images/icon-instagram.svg" alt="instagram" />
        <img src="/public/images/icon-twitter.svg" alt="twitter" />
        <img src="/public/images/icon-pinterest.svg" alt="pinterest" />
      </div>
    </div>
  );
}
