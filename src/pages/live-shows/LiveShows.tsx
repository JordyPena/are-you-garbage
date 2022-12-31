import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import { ShowsData } from '../../data/Shows';
import Show from '../../components/show/Show';
import '../live-shows/LiveShows.css';
import { useEffect, useState } from 'react';
const LiveShows = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.addEventListener('resize', handleWindowResize);
    }
  }, []);
  return (
    <>
      <Menu/>
      <div className="shows-wrap-container">
        {ShowsData.map((show) => {
          return (
            <div className='show-container'>
              <Show show={show}/>
            </div>
          )
        })}
      </div>
      <Footer screenWidth={windowSize}/>
    </>
  )
}
export default LiveShows

const getWindowSize = () => {
  const {innerWidth} = window;
  return innerWidth;
}