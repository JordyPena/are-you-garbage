import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
import { ShowsData } from "../../data/Shows";
import { show } from "../../types/Types";
import "../home/Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const getWindowSize = () => {
    const { innerWidth } = window;
    return innerWidth;
  };
  const [shows, setShows] = useState<Array<show>>([]);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  let navigate = useNavigate();

  useEffect(() => {
    if (windowSize < 600) {
      const result = ShowsData.filter((show: show) => {
        return show.id <= 3;
      });
      setShows(result);
    } else {
      const result = ShowsData.filter((show: show) => {
        return show.id <= 6;
      });
      setShows(result);
    }

    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  const moreShows = () => {
    navigate("/liveshows");
  };
  return (
    <>
      <Menu />
      <section className="iframe-Container">
        <h1 className="title">AYG Comedy Special</h1>
        <iframe
          title="Are You Garbage Special"
          src="https://www.youtube.com/embed/jStGYCXXHXA"
          height={windowSize > 600 ? "800px" : "350"}
          width={windowSize > 600 ? "70%" : "350"}
        ></iframe>
        {windowSize > 1000 && (
          <div id="wave" className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        )}
      </section>
      <section id="blur" className="live-shows-container">
        <h2 className="title-two">See Are You Garbage Live!</h2>
        <h4 className="disclosure-text">
          Dates are subject to change & venue website may not have listed dates
          posted
        </h4>
        <div className="liveshows-card-container">
          <div className="shows">
            {shows.map((show) => {
              return (
                <div className="card-top-section" key={show.id}>
                  <h4 className="venue">{show.venue}</h4>
                  <div className="venue-location-row">
                    <div className="venue-location-column">
                      <p className="city">{show.city}/</p>
                      <p className="state">{show.state}</p>
                    </div>
                  </div>
                  <div className="show-date-row">
                    <p className="show-date-text">{show.dddd}</p>
                    <p className="show-date-text">{show.month}</p>
                    <p className="show-date-text">{show.dd}</p>
                  </div>
                  <a
                    className="buy-tickets"
                    href={show.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buy Tickets
                  </a>
                </div>
              );
            })}
          </div>
          <div className="card-bottom">
            <button
              className="card-bottom-btn-styles"
              onClick={() => moreShows()}
            >
              More Shows
            </button>
          </div>
        </div>
      </section>
      <section className="listen-section-container">
        <div className="platform-link-container">
          <h3 className="title-three">Are You Garbage</h3>
          <h4 className="subtitle">Show available on</h4>
          <div className="tablet-row">
            <a
              target="_blank"
              href="https://www.patreon.com/AreYouGarbage"
              rel="noreferrer"
            >
              <figure>
                <span>
                  <img
                    className="platform-link-styles"
                    src={`${process.env.PUBLIC_URL}/images/patreon.png`}
                    alt="Patreon"
                  />
                </span>
              </figure>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/c/AreYouGarbageComedyPodcast"
              rel="noreferrer"
            >
              <figure>
                <span>
                  <img
                    className="platform-link-styles"
                    src="https://fluxconsole.com/files/image/189425?width=375"
                    alt="Spotify"
                  />
                </span>
              </figure>
            </a>
            <a
              target="_blank"
              href="https://open.spotify.com/show/35Ntc5kndMt5uUCD3RtLhL"
              rel="noreferrer"
            >
              <figure>
                <span>
                  <img
                    className="platform-link-styles"
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                    alt="Spotify"
                  />
                </span>
              </figure>
            </a>
            <a
              target="_blank"
              href="https://podcasts.apple.com/us/podcast/are-you-garbage-comedy-podcast/id1499140700"
              rel="noreferrer"
            >
              <figure>
                <span>
                  <img
                    className="platform-link-styles"
                    src="https://fluxconsole.com/files/image/189424?width=375"
                    alt="Listen on Apple Podcasts"
                  />
                </span>
              </figure>
            </a>
          </div>
        </div>
      </section>
      <Footer screenWidth={windowSize} />
    </>
  );
};
export default Home;
