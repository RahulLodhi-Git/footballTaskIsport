import React from 'react'
import { Link } from 'react-router-dom'
import { footballIcon } from '../assets/image'

export default function Home() {
  return (
    <div className='home'>
      <div className="container">
        <div className="date-section">
          <div className="date">
            <p>Wed</p>
            <p>24 Mar</p>
          </div>
          <div className="date">
            <p>Wed</p>
            <p>24 Mar</p>
          </div>
           <div className="date">
            <p>Wed</p>
            <p>24 Mar</p>
          </div>
          <div className="date">
            <p>Wed</p>
            <p>24 Mar</p>
          </div>
          <div className="date">
            <p>Wed</p>
            <p>24 Mar</p>
          </div>
          <div className="date">
            <p>Wed</p>
            <p>24 Mar</p>
          </div>
        </div>
        <div className="title">
          <h6><img src={footballIcon} alt="" /> FootBall </h6>
        </div>
        <div className="fixture-list">
          <div className="inner">
            <div className="f-item">
              <div className="f-item-heading">
                <p><span><img src="" alt="" /></span> EGY 2nd Division</p>
              </div>
              <ul>
                <li><Link to="/match-info">Fayoum FC <span> 13:00 </span >EIm  Minya</Link></li>
                <li><Link to="/match-info">Fayoum FC <span> 13:00 </span >EIm  Minya</Link></li>
              </ul>
            </div>
            <div className="f-item">
              <div className="f-item-heading">
                <p><span><img src="https://duafrik.imperialitforweb.com/upload_images/category_images/516982948.jpg" alt="" /></span> EGY 2nd Division</p>
              </div>
              <ul>
                <li>Fayoum FC <span> 13:00 </span >EIm  Minya</li>
                <li>Fayoum FC <span> 13:00 </span >EIm  Minya</li>
                <li>Fayoum FC <span> 13:00 </span >EIm  Minya</li>
                <li>Fayoum FC <span> 13:00 </span >EIm  Minya</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
