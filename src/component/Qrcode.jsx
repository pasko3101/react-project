import qrcode from "../picture/qrcode.png";
function Qrcode() {
  return (
    <div className="header__qrcode_img">
      <img src={qrcode} alt="qrcode" className="header__qrcode" />
    </div>
  );
}
export default Qrcode;
