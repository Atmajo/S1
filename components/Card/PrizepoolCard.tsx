import React from "react";
import "../../app/styles/additional-styles/prizepool.scss";
import { prizepool_type } from "@/interface";

const PrizepoolCard = ({position, description, price, img, color}: prizepool_type) => {
  return (
    <div className="body md:w-[350px] mt-10">
      <div className="nft flex justify-center items-center">
        <div className="main">
          <img
            className="tokenImage"
            src={img}
            alt="NFT"
          />
          <h2 className={`text-3xl font-semibold ${color}`}>{position}</h2>
          <p className="description">{description}</p>
          <div className="tokenInfo">
            <div className="price">
              <p>{price}</p>
            </div>
            <div className="duration"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizepoolCard;
