import me from "../picture/me.webp";
function Img() {
  return (
    <div className="header__img">
      <img src={me} className="header__foto" alt="foto" />
    </div>
  );
}
export default Img;
