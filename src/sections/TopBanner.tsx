import { Link } from 'react-router-dom'
import WomanLeft from '../assets/images/woman-on-chair.png'
import WomanRight from '../assets/images/person-sitting.png'

const TopBannerSection = ({title, text}:any) => {
  return (
    <section className="sale-50" >
        <div className="container">
            <img src={WomanLeft} alt="picture" />
            <div className="sale-text">
              <h1>{title}</h1>
              <p>{text}</p>
              <Link to="/products">
                <button className="btn-red"> 
                  <div className="btn-box-left"></div>
                  SHOP NOW
                  <div className="btn-box-right"></div>
                </button>
              </Link>
            </div>
            <img src={WomanRight} alt="picture" />
        </div>
    </section>
  )
}

export default TopBannerSection