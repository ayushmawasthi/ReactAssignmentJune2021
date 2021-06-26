
import './App.css';
import React, { useState, useEffect } from 'react';
import PriceRangeHeader from './components/PriceRangeHeader';
import { Offline, Online } from 'react-detect-offline'
import NoInternet from './components/NoInternet';
import Data from "./data/data.json";
import PlanCard from './components/PlanCard';

/*
<PriceRangeHeader range= {Data.map((detail,index)=>{
       return <p>{detail.rangeName}</p>
     })}></PriceRangeHeader>

     <Cards data={Data.map((data,i)=>{
       return <p>{data.data[1]}</p>
     })}></Cards>
*/
const App = () => {

  var data_len;
  var fetchlocal=localStorage.getItem("rangeName");
  if(fetchlocal!=null)
  {
    for(var i =0;i<Data.length;i++)
    {
      var datatocheck= Data[i]["rangeName"];
      if(datatocheck == fetchlocal)
      {
        data_len=i;
        break;
      }
    }
  }
  else
  {
   data_len = parseInt(Data.length / 2);
  }
  const [clickedRange, setClickedRange] = useState(Data[data_len]["rangeName"]);
  const [clickedArray, setClickedArray] = useState([]);
  const rangeClicked = (rangeName) => {
    //console.log(rangeName);
    localStorage.setItem("rangeName",rangeName);
    setClickedRange(rangeName);
    console.log("clickedRange", rangeName, clickedRange);
    //console.log(Data[0]["rangeName"]);
  }

 
  return (
    <div className="App">
      <Online>
        <div className="header">
          {Data.map((detail, index) => {
            return (
              clickedRange == detail.rangeName?
                <div className="active__tab" onClick={() => { rangeClicked(detail.rangeName) }}>
                  
                  <PriceRangeHeader range={detail.rangeName} />
                </div> :
                
                <div className="inactive__tab" onClick={() => { rangeClicked(detail.rangeName) }}>
                  
                  <PriceRangeHeader range={detail.rangeName} />
                </div>
                )

          })}
        </div>

        <div>
          {

          
            useEffect(() => {
              Data.map((details, index) => {

                if (details["rangeName"] == clickedRange) {
                  setClickedArray([...details.data])
                }
              })
            }, [clickedRange])

          }
          {
            // console.log(clickedArray)
          }


        </div>
      </Online>
      <Offline>
        <NoInternet />
      </Offline>
      {

       // clickedArray.length > 0 ?
         // console.log("---->", clickedArray[0])
         // :
          //console.log("array is empty..")


      }
      <div className="plancards">
        {
         

          clickedArray.map((data) => {
            return (< PlanCard data={data} />)
          })

        }


      </div>
    </div>
  )
}


export default App;
