function Title() {
  return (
    <div className="header__title">
      <div className="header__title_name">
        <h1 className="header__name">Vitalii Pasko</h1>
        <p className="header__jobtitle">Junior Front-End Developer (HTML&CSS, React.js)</p>
        <p className="header__location">Poltava, Ukraine</p>
      </div>
      <div className="header__title_contact">
        <a href="tel:+380951268497" target="_blank" className="link__hover">
          +38 (095) 126 84 97
        </a>
        <a href="mail:pasko3101@gmail.com" target="_blank" className="link__hover">
          pasko3101@gmail.com
        </a>
      </div>
    </div>
  );
}
export default Title;
