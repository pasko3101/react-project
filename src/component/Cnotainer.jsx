import Title from "./Title";
import Qrcode from "./Qrcode";
import Profile from "./Profile";
function Container() {
  return (
    <div className="header__container">
      <Title></Title>
      <Qrcode></Qrcode>
      <Profile></Profile>
    </div>
  );
}
export default Container;
