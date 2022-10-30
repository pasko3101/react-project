function Profile() {
  return (
    <div className="header__profile">
      <div className="header__birth">
        <span className="header__text">Date of Birth</span>
        <div className="points"></div>
        <span className="header__date">31.01.1980</span>
      </div>
      <div className="bg__color">
        <h3 className="title__text">links</h3>
      </div>
      <div className="list__link">
        <a href="https://t.me/vitalii_pasko" className="link__hover">
          Telegram
        </a>
        <a
          href="https://www.linkedin.com/in/vitalii-pasko/"
          className="link__hover"
        >
          LinkedIn
        </a>
        <a href="https://github.com/pasko3101" className="link__hover">
          GitHub
        </a>
      </div>
      <div className="bg__color">
        <h3 className="title__text">profile</h3>
      </div>
      <p className="profile__text">
        I enjoy what I do, especially when I finally manage to solve a difficult
        problem. When in a moment of complete despair - insight comes! A
        difficult task ceases to be difficult, but turns out to be quite easy.
        At such moments, you understand that hopeless situations simply do not
        exist, and all the difficulties are artificially invented by ourselves.
        I successfully completed the course: Front End Basic at Hillel IT School
        and continue to study at this school on the course - Front End PRO.
      </p>
      <p className="profile__text">
        I want to become a junior front-end developer to work on real projects,
        have a good team and an experienced mentor. I am also striving to gain
        new experience every day for a better performance of the task ahead of
        me.
      </p>
    </div>
  );
}
export default Profile;
