import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile" style={{margin: '1rem'}}>
        <img src="https://placehold.it/75" alt="placeholder" />
        <div className="info" style={{display: 'inline-block', marginLeft: 12}}>
          <div className="name" style={{fontSize: '125%', fontWeight: 'bold'}}>Name here...</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    );
  }
}

export default Card;
