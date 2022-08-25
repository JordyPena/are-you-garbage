import "../show/Show.css";
const Shows = ({ show }: any) => {
  const { venue, city, state, dddd, month, dd, url } = show;
  return (
    <div className="shows-card-container">
      <div className="card-top-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
          className="logo"
          alt="AYG"
        />
        <h4 className="venue">{venue}</h4>
        <div className="venue-location-row">
          <p className="city">{city}/</p>
          <p className="state">{state}</p>
        </div>
        <div className="show-date-row">
          <p className="show-date-text">{dddd}</p>
          <p className="show-date-text">{month}</p>
          <p className="show-date-text">{dd}</p>
        </div>
        <a className="buy-tickets" href={url} target="_blank">
          Buy Tickets
        </a>
      </div>
    </div>
  );
};
export default Shows;
