import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Trail from "../../components/animations/TrailAnimation";

const content = {
  'chat-app':
    "This Chat app is an application I made to get started using Socket.IO. The main focus was to develop a real time webapplication where users were able to chat to one another using the Socket library. Through this project I learned how to use the Socket.IO library and using other libraries for hiding bad words.",
  'flight-app':
    "This idea originated from my mother's inspiration. She was always worried when my father flew and wanted to know everything about the flight. With this application I have tried to respond to her desires. The app uses data from Aviation Edge API, Air France API, Darksky API and the Mapbox API. The application can follow KLM's flights, it provides information about the current location, the flight completion rate, aircraft speed, current location weather, nearest storm and much more!",
  'weather-app':
    "This weather application is a project that I made during the Node.JS course of Andrew Mead. The most valuable knowledge I gained during this teaching was about, web API’s, how to fetch data, and some other digital development terms. The application gets its data from the Mapbox API and the Geocode location API. In the near future, I am planning to add more features and eventually turn it into a mobile application.",
  'bible-app':
    "This web application was developed as a fun side project. With this web application you can read chapters and/or verses from the American Standard Version of the Bible. The data used for this app is derived from the Bible.API. I have decided to further explore the possibilities of adding additional features on this application and redeveloping the application into a mobile version."
};

export default function Project({ name }) {
  const router = useRouter();

  const gitUrls = {
    'bible-app': 'https://github.com/bbawuah/bible-app',
    'chat-app': 'https://github.com/bbawuah/chat-app',
    'flight-app': 'https://github.com/bbawuah/flight-app',
    'weather-app': 'https://github.com/bbawuah/Node-3-weather-website',
  }

  const projectUrls = {
    'bible-app': 'https://bawuah-bible-app.herokuapp.com/',
    'chat-app': 'https://bawuah-chatapp.herokuapp.com/',
    'flight-app': 'https://bawuah-flightspy.herokuapp.com/',
    'weather-app': 'https://bawuah-weather-application.herokuapp.com/',
  }

  return (
    <Layout>
      <h1>
        <Trail str={name} />
      </h1>
      {Object.entries(content).map(key => {
        if (key[0] === name) {
          return <p key={key[0]}>{key[1]}</p>;
        }
      })}
      
      <a href={gitUrls[name]} target="_blank">View Code</a>
      <a href={projectUrls[name]} target="_blank">View Project</a>
      <style jsx>{`
        p {
          color: #777;
          text-align: cente;
          max-width: 800px;
          margin: 0 auto 100px;
          padding: 20px;
        }

        a {
          text-decoration: none;
          width: max-content;
          justify-self: center;
          background: #777;
          padding: 1vmax 2vmax;
          color: #f7fafc;
          font-size: 1.2em;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        a:first-of-type {
          margin-right: 0.5em;
        }

        a:last-of-type {
          margin-left: 0.5em;
        }
      `}</style>
    </Layout>
  );
}

Project.getInitialProps = async ctx => {
  return { name: ctx.query.id };
};