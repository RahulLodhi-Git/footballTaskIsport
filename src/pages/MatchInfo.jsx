import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { getMarketsUrl, getSelectionUrl } from '../HelperFunction/ApiUrl'

function MatchInfo() {
    const [marketList, setMarketList] = useState(undefined)
    const [selectionList, setSelectionList] = useState(undefined)
    const [betData, setBetData] = useState(undefined)
    const [currentMatch, setCurrentMatch] = useState(JSON.parse(localStorage.getItem('matchInfo')))
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const param = useParams()

    const getSelectionList = (endPoint) => {
        axios
            .get(endPoint)
            .then(function (response) {
                setSelectionList(response.data)
            })
            .catch(function (error) {
                console.log(error);
                return { loading: false, response: error };
            })
            .then(() => {
                setLoading(false);
            });

    }

    const getMarketList = (endPoint) => {
        axios
            .get(endPoint)
            .then(function (response) {
                setMarketList(response.data)
            })
            .catch(function (error) {
                console.log(error);
                return { loading: false, response: error };
            })
            .then(() => {
                setLoading(false);
            });
    }

    const getBet = (matchid, marketid, legs) => {
        setLoading(true)
        let endPoint = `http://cms.bettorlogic.com/api/BetBuilder/GetBetBuilderBets?sports=1&matchId=${matchid}&marketId=${marketid}&legs=${legs}&language=en`
        axios
            .get(endPoint)
            .then(function (response) {
                setBetData(response.data)
            })
            .catch(function (error) {
                console.log(error);
                return { loading: false, response: error };
            })
            .then(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        if (currentMatch === undefined) {
            navigate('/')
        }
        getSelectionList(getSelectionUrl)
        getMarketList(getMarketsUrl)
    }, [])

    useEffect(() => {
        if (marketList && selectionList) {
            getBet(param?.matchId, marketList?.[0]?.MarketId, selectionList?.[0]?.selectionId)
        }
    }, [marketList, selectionList])



    return (
        <>
            <Loading isLoading={loading} />
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

                            <p><b>{moment(currentMatch?.MatchDate).format("ll")}</b></p>
                            <p>{currentMatch?.MatchTime}</p>
                        </div>
                        <div className="match-name">
                            <p><b>{currentMatch?.MatchName}</b></p>
                            <p><span>
                                <img src="https://duafrik.imperialitforweb.com/upload_images/category_images/516982948.jpg" alt="" />
                            </span>{currentMatch?.LeagueName}</p>
                        </div>
                    </div>
                    <div className="selection-form">
                        <form action="">
                            <div className="field">
                                <label htmlFor="Selection">Selection</label>
                                <select name="marketList" id=""
                                    onChange={(e) => (getBet(param?.matchId, e.target.value, betData?.Legs))}>
                                    {marketList?.map((sitem, i) => {
                                        return (
                                            <option
                                                selected={sitem?.MarketId === betData?.SelectionMarketId}
                                                value={sitem?.MarketId}>{sitem?.MarketName}</option>
                                        )
                                    })}

                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="Selection">Legs</label>
                                <select
                                    name="leg"
                                    onChange={(e) => (getBet(param?.matchId, betData?.SelectionMarketId, e.target.value))}
                                >
                                    {selectionList?.map((sitem, i) => {
                                        return (
                                            <option
                                                selected={sitem?.MarketId === betData?.Legs}
                                                value={sitem?.selectionId}>{sitem?.selectionValue}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </form>
                    </div>

                    {betData &&
                        <>

                            <div className="table-heading">
                                <h4>Bet Builder Odds: <span>{betData?.TotalOdds}</span></h4>
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
                                        {betData?.BetBuilderSelections.length > 0
                                            ?
                                            betData?.BetBuilderSelections.map((item, i) => {
                                                return (<tr>
                                                    <th class="col-1">{item.RTB}</th>
                                                    <th class="col-2">{item.Market}</th>
                                                    <th class="col-3">{item.Selection}</th>
                                                </tr>)
                                            })
                                            :
                                            <tr>
                                                <th class="col-1">No Data Avaiable</th>
                                                <th class="col-2">No Data</th>
                                                <th class="col-3">No Data</th>
                                            </tr>
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default MatchInfo