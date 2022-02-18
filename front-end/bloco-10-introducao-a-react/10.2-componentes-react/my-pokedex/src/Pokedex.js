import React from "react";
/* import './App.css'; */

class Pokedex extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.name
    return (
      <div className="cards">
        <p>{name} </p>
        <p>{type} </p>
        <p>average weight: {averageWeight.value} {averageWeight.measurementUnit} </p>
        <img src={image} alt='Ahh!!' />
      </div>
    )
  }
}

export default Pokedex;