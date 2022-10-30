function Education() {
  return (
    <>
      <div className="title bg__color">
        <h3 className="title__text">education</h3>
      </div>
      <div className="title__jobtitle display">
        <p className="jobtitle__text display__title list__before jobtitle__text_margin">
          Kyiv National University of Construction and Architecture
        </p>
        <div className="points display__none"></div>
        <p className="jobtitle__date">Sep 1998 — Jul 2003</p>
      </div>
      <div className="degree__location">
        <span className="education__degree">Civil Engineer</span>
        <span className="education__location">Kiev</span>
      </div>
      <div className="title__jobtitle display">
        <p className="jobtitle__text display__title list__before jobtitle__text_margin">
          Kyiv Construction College
        </p>
        <div className="points display__none"></div>
        <p className="jobtitle__date">Sep 1994 — Mar 1998</p>
      </div>
      <div className="degree__location">
        <span className="education__degree">Construction Technical</span>
        <span className="education__location">Kiev</span>
      </div>
    </>
  );
}
export default Education;
