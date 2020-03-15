import Layout from "../components/Layout";
import Link from "next/link";
import Trail from "../components/animations/TrailAnimation";


function HomePage() {
  return (
    <Layout>
      <h1>
        <Trail str="Hi there! Thanks for stopping by."/>
      </h1>
      <div className="about-text">
        <img src="/static/portrait-brian-bawuah.jpg"></img>
        <p>
          I am a 23 year young student, who found his passion for developing and
          designing applications in the beautiful and complex world of the
          inter-webs. At the moment, my main focus is on mastering the front-end
          frameworks as React.js and the back-end development in Node.js.
          However, in the long run I would like to learn more about how to
          implement different libraries, AI and machine learning in my work.
        </p>
        <Link href="/work">
          <a className="work-btn">My work</a>
        </Link>
      </div>
      <style jsx>
        {`
          img {
            max-width: 50%;
            justify-self: center;
          }
          .about-text {
            color: #777;
            text-align: center;
            max-width: 800px;
            margin: 0 auto 100px;
            padding: 20px;
            display: grid;
            grid-template-column: 1fr 1fr;
            grid-gap: 1em;
          }

          .work-btn {
            position: relative;
            background: #777;
            padding: 1vmax 2vmax;
            color: #f7fafc;
            // width: max-content;
            justify-self: center;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.2em;
            overflow: hidden;
          }
          

          @media only screen and (max-width: 395px){
            img{
              max-width: 100%;
            }
          }
        `}
      </style>
    </Layout>
  );
}

export default HomePage;
