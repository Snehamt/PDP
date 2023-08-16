import React from "react";
import Button from "../components/Buttons";
import "./Recommended.css";

function Recommended({ handleClick }) {
  return (
    <div className="recommended">
      <h5 className="recommended-title">Recommended :</h5>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Charu" title="Charu" />
        <Button onClickHandler={handleClick} value="KALINI" title="KALINI" />
        <Button onClickHandler={handleClick} value="Vishudh" title="Vishudh" />
        <Button onClickHandler={handleClick} value="AHIKA" title="AHIKA" />
        <Button onClickHandler={handleClick} value="Deewa" title="Deewa" />
        <Button onClickHandler={handleClick} value="FabClub" title="FabClub" />
        <Button onClickHandler={handleClick} value="Kiya" title="Kiya" />
        <Button onClickHandler={handleClick} value="W" title="W" />
        <Button onClickHandler={handleClick} value="Ishin" title="Ishin" />
        <Button onClickHandler={handleClick} value="Sangria" title="Sangria" />
      </div>
    </div>
  );
}

export default Recommended;
