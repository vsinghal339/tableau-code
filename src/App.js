import './App.css';
import React, { useEffect, useState } from "react";
import { getStateDataAPI, generateStoreSalesData } from './services.js';
import { Chart } from "react-google-charts";

function App() {
  const [data, setData] = useState({});
  const [storeSalesData, setStoreSalesData] = useState({});

  const [state, setState] = useState('BE');

  const getStoreData = async () => {
    const storeData = await getStateDataAPI();
    const storeSalesData = await generateStoreSalesData();
    setData(storeData);
    setStoreSalesData(storeSalesData);
  };

  const handleStateChange = (e) => {
    getStoreData();
    setState(e.target.value);
  }

  useEffect(() => {
    getStoreData();
  }, []);

  const storeDataClick = async (quater) => {
    const storeSalesData = await generateStoreSalesData('', quater);
    setStoreSalesData(storeSalesData);
  }

  return (
    <div className="App" style={{ width: '956px', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Store Overview</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span>State</span>
          <select name="states" style={{ width: '100px' }} onChange={handleStateChange}>
            <option value="HH">HH</option>
            <option value="BE" selected>BE</option>
            <option value="BW">BW</option>
          </select>
        </div>
      </div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        {data && data.Store && Object.keys(data.Store).map((value, index) => {
          const domData = [(
            <tr style={{ backgroundColor: (index > 1 && index % 2 === 0) ? '#f2f2f2' : '', borderBottom: (index === 0) ? '1px solid #E1E1E1' : '' }}>
              <td style={{ backgroundColor: 'white' }}>{index === 0 ? 'State' : ''}</td>
              <td style={{ borderRight: '1px solid #E1E1E1' }}>{index === 0 ? 'Store' : value}</td>
              {Object.keys(data.Store[value]['Year']).map((yearValue) => {
                return Object.keys(data.Store[value]['Year'][yearValue]).map((quaterValue, quaterIndex, quaterArray) =>
                  <td style={{ borderRight: (quaterArray.length - 1 === quaterIndex) ? '1px solid #E1E1E1' : '', cursor: 'pointer' }} className={'tooltip'} onClick={() => storeDataClick(quaterIndex + 1)}>
                    {index === 0 ? `${yearValue + ' ' + quaterValue}` : data.Store[value]['Year'][yearValue][quaterValue]}
                    <div className={"tooltiptext"}>
                      <div>
                        State: {state}
                      </div>
                      <div>
                        Store: {value}
                      </div>
                      <div>
                        Quarter of Data: {yearValue + ' ' + quaterValue}
                      </div>
                      <div>
                        Year of Date: {yearValue}
                      </div>
                      <div>
                        Avg Sales: {data.Store[value]['Year'][yearValue][quaterValue]}
                      </div>
                    </div>
                  </td>
                )
              })}
            </tr>
          )];
          return domData;
        })}
      </table>
      {storeSalesData.length && <Chart
        width={956}
        height={500}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[['Sales', 'Promo 0'], ...storeSalesData]}
        options={{
          title: 'Store Transactions  - All',
          chartArea: { width: '60%' },
          hAxis: {
            title: 'Day of Date',
            minValue: 0,
          },
          vAxis: {
            title: 'Sales',
          }
        }}
        legendToggle
      />}

    </div>
  );
}

export default App;
