import React, { useEffect, useState } from "react";
import "./statevise.css";

const Ststevise = () => {
  const [Api, setApi] = useState([]);

  const getapi = async () => {
    const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const actualdata = await res.json();
    //  console.log(actualdata.data.regional);
    setApi(actualdata.data.regional);
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <>
      <h1
        style={{ textAlign: "center", color: "red", border: "1px solid black" }}>
        Covid 19 App
      </h1>
      <div className="conteneir" style={{backgroundColor:"antiquewhite"}}>
        <table style={{ justifyContent: "center", margin: "10px,386px" }}>
          <thead>
            <tr style={{columnSpan:""}}>
              <td>loc</td>
              <td>confirmedCases</td>
              <td>deaths</td>
              <td>discharged</td>
           <td>totalConfirmed</td>
             </tr>
          </thead>
          {Api.map((element, index) => {
            return (
              <>
                <tr>
                  <td>{element.loc}</td>
                  <td>{element.confirmedCasesIndian}</td>
                  <td>{element.deaths}</td>
                  <td>{element.discharged}</td>
                  <td>{element.totalConfirmed}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};
export default Ststevise;
