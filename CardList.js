import React from "react";
import Card from "./Card";

const CardList = ({profiles}) => (
  <div>
    {profiles.map(profile => <Card {...profile}/>)}
  </div>
);

export default CardList;