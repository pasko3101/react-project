import telegram from "../picture/telegram.svg";
import linkedin from "../picture/linkedin.svg";
import github from "../picture/github.svg";
function Social() {
  return (
    <div className="social">
      <div className="social__icon">
        <a target="_blank" href="https://t.me/vitalii_pasko">
          <img src={telegram} className="link__hover" alt="telegram" />
        </a>
      </div>

      <div className="social__icon">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vitalii-pasko/"
        >
        <img src={linkedin} className="link__hover" alt="linkedin" />
        </a>
      </div>
      <div className="social__icon">
        <a
          target="_blank"
          href="https://github.com/pasko3101"
        >
        <img src={github} className="link__hover" alt="github" />
        </a>
      </div>
    </div>
  );
}
export default Social;
