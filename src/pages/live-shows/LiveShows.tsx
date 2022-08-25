import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import { ShowsData } from '../../data/Shows';
import Show from '../../components/show/Show';
import '../live-shows/LiveShows.css';
const LiveShows = () => {
 
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
      <Footer/>
    </>
  )
}
export default LiveShows