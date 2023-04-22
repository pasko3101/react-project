function Certificates() {
  return (
    <>
      <div className="title bg__color">
        <h3 className="title__text">valid certificates</h3>
      </div>
      <div className="title__jobtitle">
        <a
          href="https://certificate.ithillel.ua/view/82626458"
          target="_blank"
          className="jobtitle__text list__before jobtitle__text_margin link__hover"
        >
          Front End PRO (certificate: 82626458)
        </a>
        <div className="points"></div>
        <p className="jobtitle__date">Jan 2023</p>
      </div>
      <div className="degree__location">
        <span className="education__degree">Hillel IT School</span>
        <span className="education__location education__location_top">
          online
        </span>
      </div>
      <div className="title__jobtitle">
        <a
          href="https://certificate.ithillel.ua/view/56822789"
          target="_blank"
          className="jobtitle__text list__before jobtitle__text_margin link__hover"
        >
          Front End Basic (certificate: 56822789)
        </a>
        <div className="points"></div>
        <p className="jobtitle__date">Jun 2022</p>
      </div>
      <div className="degree__location">
        <span className="education__degree">Hillel IT School</span>
        <span className="education__location education__location_top">
          online
        </span>
      </div>

      <div className="title__jobtitle display">
        <p className="jobtitle__text display__title list__before jobtitle__text_margin">
          Technical Supervision Engineer (II category) for the construction of
          buildings and structures
        </p>
        <div className="points display__none"></div>
        <div className="jobtitle__box">
          <p className="jobtitle__date">Des 2020</p>
          <span className="education__location">Kiev</span>
        </div>
      </div>
      <div className="degree__location">
        <span className="education__degree">
          All-Ukrainian public organization "Guild of engineers for technical
          supervision of construction of architectural objects"
        </span>
      </div>
      <div className="title__jobtitle display">
        <p className="jobtitle__text display__title list__before jobtitle__text_margin">
          Technical Supervision Engineer (I category) for highway construction
        </p>
        <div className="points display__none"></div>
        <div className="jobtitle__box">
          <p className="jobtitle__date">Okt 2019</p>
          <span className="education__location">Kiev</span>
        </div>
      </div>
      <div className="degree__location">
        <span className="education__degree">
          All-Ukrainian public organization "Guild of engineers for technical
          supervision of construction of architectural objects"
        </span>
      </div>
    </>
  );
}
export default Certificates;
