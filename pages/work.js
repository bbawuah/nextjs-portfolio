import Layout from "../components/Layout";
import Project from "../components/Project";
import Link from "next/link";
import Trail from "../components/animations/TrailAnimation";
import { Fragment } from "react";

function Work() {
  const PostLink = ({ title, slug }) => (
    <Fragment>
      <Link href="/p/[id]" as={`/p/${slug}`}>
        <a>
          <li>{title}</li>
        </a>
      </Link>

      <style jsx>
        {`
          a {
            text-decoration: none;
            justify-self: center;
            color: #f7fafc;
            font-size: 1.2em;
            font-weight: 600;
            border: none;
            cursor: pointer;
          }

          li {
            background: #4A5568;
            padding: 1vmax 2vmax;
            border-radius: 3px;
            margin: 1rem 0;
          }
        `}
      </style>
    </Fragment>
  );

  return (
    <Layout>
      <h1>
        <Trail str="Check out my work." />
      </h1>
      <div className="projects">
        <div className="project-list">
          <ul>
            <Project>
              <PostLink title="H.O.P.E. Foundation" slug="hope-foundation" />
            </Project>

            <Project>
              <PostLink title="Flight App" slug="flight-app" />
            </Project>

            <Project>
              <PostLink title="Bible App" slug="bible-app" />
            </Project>

            <Project>
              <PostLink title="Chat App" slug="chat-app" />
            </Project>

            <Project>
              <PostLink title="Weather App" slug="weather-app" />
            </Project>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .projects {
          max-width: 1000px;
          margin: 0 auto;
        }

        h1{
          color: #718096;
        }

        ul {
          list-style-type: none;
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          flex-direction: column;
          padding-inline-start: 0px;
        }

        @media only screen and (max-width: 890px) {
          ul {
            flex-direction: column;
          }
        }
        .project-list {
          padding: 0 30px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}

export default Work;
