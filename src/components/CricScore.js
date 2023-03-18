import React, { useEffect, useState } from "react";
import './CricScore.css'

function CricScore() {
  const [checkStatus, setCheckStatus] = useState("test");
  const [country1, setCountry1] = useState("India");
  const [country2, setCountry2] = useState("Pakistan");

  const [data, setData] = useState([
    ["Pakistan", 23],
    ["Pakistan", 127],
    ["India", 3],
    ["India", 71],
    ["Australia", 31],
    ["India", 22],
    ["Pakistan", 81],
  ]);
  const test_data = [
    ["Pakistan", 23],
    ["Pakistan", 127],
    ["India", 3],
    ["India", 71],
    ["Australia", 31],
    ["India", 22],
    ["Pakistan", 81],
  ];
  useEffect(() => {
    if (checkStatus === "server") {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://assessments.reliscore.com/api/cric-scores/"
          );
          const jsonData = await response.json();
          setData(jsonData);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }
    
    setData(test_data);
    // console.log(data);n
    
  }, [ country1, country2]);

  function calculateAverage(country) {
    const matches = data.filter((match) => match[0] === country);
    const scores = matches.map((match) => match[1]);
    const averageScore =
      scores.reduce((total, score) => total + score, 0) / scores.length;
    return averageScore;
  }

  function handleCountry1Change(event) {
    setCountry1(event.target.value);
  }

  function handleCountry2Change(event) {
    setCountry2(event.target.value);
  }
  return (
    <div className="App">
      <form onChange={(e) => setCheckStatus(e.target.value)}
       style={{
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {/* Source of data: */}<span style={{ fontWeight: "bold" }}>Source of data:</span>
        <input
          id="src-test"
          type="radio"
          name="data-source"
          value="test"
          
        />
        <label htmlFor="src-local"><span style={{ fontWeight: "bold" }}>Test Data</span></label>
        <input id="src-server" type="radio" name="data-source" value="server" />
        <label htmlFor="src-server"><span style={{ fontWeight: "bold" }}>Server Data:</span></label>
      </form>

      <div className="row">
        <div className="country">
          <form>
            The Country1:{" "}
            <input
              className="country-input"
              type="text"
              value={country1}
              onChange={handleCountry1Change}
            />
          </form>
        </div>
        <div className="average">
          The Average: {calculateAverage(country1) || "Null"}
        </div>
        <div
          className="horiz-bar"
          style={{
            backgroundColor: "rgb(101, 190, 101)",
            height: "17px",
            width: `${calculateAverage(country1) || 0}px`,
          }}
        >
          &nbsp;
        </div>
      </div>

      <div className="row">
        <div className="country">
          <form>
            The Country2:{" "}
            <input
              className="country-input"
              type="text"
              value={country2}
              onChange={handleCountry2Change}
            />
          </form>
        </div>
        <div className="average">
          The Average: {calculateAverage(country2) || "Null"}
        </div>
        <div
          className="horiz-bar"
          style={{
            backgroundColor: "rgb(101, 190, 101)",
            height: "17px",
            width: `${calculateAverage(country2) || 0}px`,
          }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
}

export default CricScore;