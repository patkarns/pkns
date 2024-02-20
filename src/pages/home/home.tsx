import resume from "../Resume_Pat_K.pdf";
import picture from "../picture.jpg";
import "./home.scss";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="col">
          <img className="profileImage" src={picture} />
        </div>
        <div className="col">
          <div className="links">
            Hello! &nbsp;
            <a href={resume} download="Resume_Pat_Karns.pdf">
              Resume
            </a>
            &nbsp;|&nbsp;
            <a href="mailto:karns.napat@gmail.com">karns.napat@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
