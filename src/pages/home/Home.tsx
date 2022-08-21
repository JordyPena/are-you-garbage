import Menu from "../../components/menu/Menu";
import "../home/Home.css";
const Home = () => {
  return (
    <>
      <Menu />
      <section className="iframe-Container">
        <h1 className="title">Latest Special</h1>
        <h2 className="subtitle">AYG Comedy Special</h2>
        <iframe
          title="Are You Garbage Special"
          src="https://www.youtube.com/embed/jStGYCXXHXA"
          height="350"
          width="350"
        ></iframe>
      </section>
      <section className="listen-section-container">
        <h3 className="title">Are You Garbage</h3>
        <h2 className="subtitle">Show available on</h2>
        <div className="platform-link-container">
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
      </section>
    </>
  );
};
export default Home;
