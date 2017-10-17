import React from 'react';

class Prediction extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <li className="display-prediction">
        <p>{details.prediction}</p>
      </li>
    )
  }
}

export default Prediction;
