import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {
  constructor ( props ) {
    super(props);
    this.state = {
      hex: "#91A6DB"
    }
    this.changeColour = this.changeColour.bind(this);
  }

  changeColour() {
    const colour = '#'+(Math.random()*0xFFFFFF<<0).toString(16).toUpperCase();
    this.setState({
      hex: colour
    });
  }

  render() {
    var colourHex = this.state.hex;
    var cardStyle = { backgroundColor: colourHex};
    var labelStyle = { color: colourHex };
    return (
      <div className="Card">
        <div className="Card-box" style={cardStyle}>
          <p className="Card-hex-label" style={labelStyle}> {colourHex} </p>
        </div>
        <button className="Card-button" onClick={ this.changeColour }> Change </button>
      </div>
    )
  }
}

export default Card;
