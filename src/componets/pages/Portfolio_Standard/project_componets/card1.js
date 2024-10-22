import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Card1({ img, title, type }) {
    const navigate=useNavigate();
  const henadleN = (items) => {
    console.log(items);
    localStorage.setItem("Project", JSON.stringify(items));

      navigate("/portfolio_Single");
  };
  return (
    <>
      <div className="card_main1">
        <div className="img_main">
          <img src={img} className="w-100 img1 mb-2" alt={title} />
          <div
            className="outer_box"
           
          >
            <div className="box d-flex align-items-center justify-content-center">
              <div className="icon_main d-flex align-items-center justify-content-center">
                <FaAngleRight className="icon p-0 m-0" onClick={() => henadleN({ title, img, type })}/>
              </div>
            </div>
          </div>
        </div>
        <h4 className="color font_family_roboto ms-1 mb-1 font_weigth">
          {title}
        </h4>
        <h6 className="heading ms-1">{type}</h6>
      </div>
    </>
  );
}

export default Card1;
