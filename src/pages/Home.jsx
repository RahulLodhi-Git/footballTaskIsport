import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { footballIcon } from "../assets/image";
import Loading from "../components/Loading";
import { getFixturesUrl } from "../HelperFunction/ApiUrl";

export default function Home() {
  const [matchList, setMatchList] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(moment().format("l"));
  const [dateArray, setDateArray] = useState([]);

  const generateDate = (NumberOfDays) => {
    let temp = [];
    for (let index = 0; index < NumberOfDays; index++) {
      temp.push(moment().add(index, "days").format("l"));
    }
    setDateArray(temp);
  };

  useEffect(() => {
    axios
      .get(getFixturesUrl)
      .then(function (response) {
        filterByParameters(date, "date", response.data);
      })
      .catch(function (error) {
        alert('something went wrong')
      })
      .then(() => {
        setLoading(false);
      });
  }, [date]);

  useEffect(() => {
    generateDate(7);
  }, []);

  const filterByParameters = function (filterValue, filterType, arrayList) {
    let filteredList;
    let getLeagueNames = [];
    let finalFilterList = [];
    // check and apply filter
    if (filterType === "date") {
      filteredList = arrayList.filter(
        (item) => item.MatchDate.split(" ")[0] === filterValue
      );
    }

    // Get LeagueName
    filteredList.map((item, i) => {
      getLeagueNames.push(item.LeagueName);
      return false;
    });
    let uniqueLeagueName = [...new Set(getLeagueNames)];

    // Group by league Name
    uniqueLeagueName.forEach((litem, i) => {
      let temp1 = filteredList.filter((item) => item.LeagueName === litem);
      finalFilterList.push(temp1);
    });
    setMatchList(finalFilterList);
  };



  return (
    <>
      <Loading isLoading={loading} />
      <div className="home">
        <div className="container">
          <div className="date-wrap">
            <div className="date-section">
              {dateArray?.length > 0 &&
                dateArray.map((dItem, i) => {
                  return (
                    <div
                      className={`date ${dItem === date ? "--active" : ""}`}
                      onClick={() => {
                        setDate(dItem);
                        setLoading(true);
                      }}
                    >
                      <p>{moment(dItem).format("llll").split(",")[0]}</p>
                      <p>{moment(dItem).format("lll").split(",")[0]}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="title">
            <h6>
              <img src={footballIcon} alt="" /> FootBall{" "}
            </h6>
          </div>
          <div className="fixture-list">
            <div className="inner">
              {matchList?.map((item, i) => {
                if (item?.length > 0) {
                  return (
                    <div key={`f-item${i}`} className="f-item">
                      <div className="f-item-heading">
                        <p>{item?.[0]?.LeagueName}</p>
                      </div>
                      <ul>
                        {item.map((mitem, id) => {
                          return (
                            <li key={mitem.Team2Id}>
                              <Link
                                onClick={() => { localStorage.setItem('matchInfo', JSON.stringify(mitem)) }}
                                to={`/match/${mitem.MatchId}`}
                              >
                                {mitem.Team1Name}{" "}
                                <span> {mitem.MatchTime} </span>
                                {mitem.Team2Name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }

              })}

            </div>
          </div>
          {matchList?.length == 0 &&
            <div className="not-data">
              <h5>No Data Avaiable at  {date}</h5>
            </div>
          }
        </div>
      </div>
    </>
  );
}
