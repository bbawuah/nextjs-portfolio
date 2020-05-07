import "../styles/styles.scss";
import Layout from "../components/Layout";
import Link from "next/link";
import Trail from "../components/animations/TrailAnimation";

function HomePage() {
  return (
    <Layout>
      <div className="background">
        <div className="home-container">
          <img src="/static/portrait-brian-bawuah.jpg"></img>
          <div className="about-text">
            <h1 className="portfolio-title">
              <Trail str="Hi there! Thanks for stopping by." />
            </h1>
            <p>
              I am a 23 year young student, who found his passion for developing
              and designing applications in the beautiful and complex world of
              the inter-webs. At the moment, my main focus is on mastering the
              front-end frameworks as React.js and the back-end development in
              Node.js. However, in the long run I would like to learn more about
              how to implement different libraries, AI and machine learning in
              my work.
            </p>
            <Link href="/work">
              <a className="work-btn">My work</a>
            </Link>
          </div>
        </div>
      </div>


      <style jsx>
        {`
          .home-container {
            display: flex;
            padding: 1.875rem;
            justify-content: center;
          }

          .work-btn {
            position: relative;
            background: #4A5568;
            padding: 1vmax 2vmax;
            color: #EDF2F7;
            align-self: flex-end;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.2em;
            width: max-content;
          }
        `}
      </style>
    </Layout>
  );
}

export default HomePage;
