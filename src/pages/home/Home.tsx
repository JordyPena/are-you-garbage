import Menu from "../../components/menu/Menu";
import "../home/Home.css";
const Home = () => {
  return (
    <>
      <Menu />
      <section className="iframe-Container">
        <h1 className="title">AYG Comedy Special</h1>
        <iframe
          title="Are You Garbage Special"
          src="https://www.youtube.com/embed/jStGYCXXHXA"
          height="350"
          width="350"
        ></iframe>
        <div className="wave">
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
      </section>
      <section className="listen-section-container">
        <h3 className="title-two">Are You Garbage</h3>
        <h2 className="subtitle">Show available on</h2>
        <div className="platform-link-container">
          <div className="link-background">
            <a target="_blank" href="https://www.patreon.com/AreYouGarbage">
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
      <section className="fire"></section>
    </>
  );
};
export default Home;
