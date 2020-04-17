import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";
import { Particles } from "react-particles-js";

export default function Layout(props) {
  return (
    <Fragment>
      
        <Header />
        <main className="content-wrapper">{props.children}</main>
        <Footer />
     

      <style jsx global>{`
      *, *::before, *::after{
        boz-sizing: border-box;
      }

      .content-wrapper{
        height: 100%;
        text-align: center;
        margin-bottom: 2rem;
      }

      body{
        margin: 0;
        font-size: 1.2em;
        line-height: 1.7;
        font-weight: 400;
        background: #fff;
        color: #454545;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe Ui', 'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', 'sans-serig;
        text-rendering: optimizeLegibility;
      }
      

      a{
        color: #1b789e;
        text-decoration: none;
      }

      a:hover {
        color: #166281;
      }

      h1, h2, h3{
        margin: 2.3em 0 2.7em;
      }

      h1{
        font-size: 3em;
      }

      h2{
        font-size: 2em;
      }

      p{
        margin 0 0 1em;
      }

      img{
        max-width: 100%;
      }
      `}</style>
    </Fragment>
  );
}
