import "../show/Show.css";
const Shows = ({ show }: any) => {
  const { venue, city, state, dddd, month, dd, url } = show;
  return (
    <div className="shows-card-container">
      <div className="shows-card-top-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
          className="shows-logo"
          alt="AYG"
        />
        <h4 className="shows-venue-header">{venue}</h4>
        <div className="shows-venue-location-row">
          <p className="shows-city">{city}/</p>
          <p className="shows-state">{state}</p>
        </div>
        <div className="shows-date-row">
          <p className="shows-date-text">{dddd}</p>
          <p className="shows-date-text">{month}</p>
          <p className="shows-date-text">{dd}</p>
        </div>
        <a className="shows-buy-tickets" href={url} target="_blank" rel="noreferrer">
          Buy Tickets
        </a>
      </div>
    </div>
  );
};
export default Shows;
