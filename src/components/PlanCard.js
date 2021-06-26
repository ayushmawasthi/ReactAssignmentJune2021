import React ,{Component, useState} from "react";
import "./Style.css";
import ModalView from "./ModalView";
import Modal from 'react-modal';



Modal.setAppElement("#root");



const PlanCard =({data}) =>{
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);

  }
    return (
      <div className="card">
        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <ModalView title={data.title}></ModalView>
      </Modal>

      {
        //console.log("PlanCard => ", data)
      }
            <div className="card-head">
              {data.title}</div>
              <div className="plan_name">
                <h2>${data.priceperlead}</h2>
                <p>Per Qualified Lead</p>
              </div>
              <div className="similar-sub-data">
                <p>Qualified Lead per Month</p>
                <p>{data.qualifiedpermonth}</p>
              </div>
              <div className="similar-sub-data">
                <p>Total Lead Price</p>
                <p>{data.totalprice}</p>
              </div>
              <div className="similar-sub-data">
                <p>Platform Free Per Month</p>
                <p>${data.platformprice}</p>
              </div>
              <div className="total-price-block">
                ${data.totalprice}
              </div>
              <div className="startfreetrailbtn" onClick={toggleModal}>
                Start Your Trial
              </div>
        </div>
    )
    }
  
export default PlanCard;
