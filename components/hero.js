import Router from "next/router";
import Navbar from "./nav";

function Hero() {
  return (
    <div className="main">
      <Navbar />
      <div className="heroHeading">
        <h1>
          Hey! <br />
          I'm <span>Aksh Bansal</span>
          <br />
          web developer
        </h1>
        <p></p>
        <button onClick={() => Router.push("/#Contact")}>Contact Me</button>
      </div>
      <style jsx>{`
        .main {
          background-image: url("./testImage.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
        }
        .heroHeading {
          width: 50%;
          padding-top: 30vh;
          padding-left: 15vh;
          color: white;
          height: 100vh;
          text-align: left;
        }
        .heroHeading h1 {
          font-size: 2.8rem;
          line-height: 1;
          letter-spacing: 2px;
        }
        .heroHeading span {
          color: cyan;
        }
        .heroHeading p {
          margin: 2vh 0vh;
          color: #b3b3b3;
          font-weight: 200;
        }
        .heroHeading button {
          letter-spacing: 1px;
          font-weight: 500;
          background: transparent;
          border: solid 2px cyan;
          color: cyan;
          width: 20vh;
          font-size: 1rem;
          padding: 1vh;
          cursor: pointer;
        }
        .heroHeading button :hover {
          background: cyan;
          color: black;
        }

        @media only screen and (max-width: 600px) {
          .main {
            background: rgb(2, 36, 43);
            background: radial-gradient(
              circle,
              #032b33 0%,
              rgba(0, 0, 0, 1) 88%
            );
          }
          .heroHeading {
            width: 100%;
            padding: 30vh 1vh;
            text-align: center;
          }
          .heroHeading h1 {
            font-size: 2.5rem;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
