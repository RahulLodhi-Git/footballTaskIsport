import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function MatchInfo() {
    return (
        <div className='match-Info-wrap'>
            <div className="container">
                <div className="back-btn">
                    <Link to='/'>
                        <span> <FontAwesomeIcon icon={faArrowLeft} /></span>
                        </Link>
                </div>
                <div className="title">
                    <h1>Make It A Bet Builder ?</h1>
                </div>
                <div className="match-title">
                    <div className="match-date">
                        <p><b>Mar 25, 2022</b></p>
                        <p>13:20</p>
                    </div>
                    <div className="match-name">
                        <p><b>Rajasthan United Vs Kendre FC</b></p>
                        <p><span><img src="https://duafrik.imperialitforweb.com/upload_images/category_images/516982948.jpg" alt="" /></span> IND I - League</p>
                    </div>
                </div>
                <div className="selection-form">
                    <form action="">
                        <div className="field">
                            <label htmlFor="Selection">Selection</label>
                            <select name="" id="">
                                <option value="">Half Time Result - Draw</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="Selection">Legs</label>
                            <select name="" id="">
                                <option value="">5</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="table-heading">
                    <h4>Bet Builder Odds: <span>236</span></h4>
                </div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th class="col-1">Key Stats</th>
                                <th class="col-2">Market</th>
                                <th class="col-3">Outcome</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th class="col-1">Brentfort have drawn the first half in 5 of their last 6 months home</th>
                                <th class="col-2">Half Time Result</th>
                                <th class="col-3">Draw</th>
                            </tr>
                            <tr>
                            <th class="col-1">Brentfort have drawn the first half in 5 of their last 6 months home</th>
                                <th class="col-2">Half Time Result</th>
                                <th class="col-3">Draw</th>
                            </tr>
                            <tr>
                            <th class="col-1">Brentfort have drawn the first half in 5 of their last 6 months home</th>
                                <th class="col-2">Half Time Result</th>
                                <th class="col-3">Draw</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default MatchInfo