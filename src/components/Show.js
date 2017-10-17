import React from 'react';

class Show extends React.Component {
  render() {
    const { details, index } = this.props.details;
    return (
      <li className="display-show">
        <h3 className="show-name">{details.name}</h3>
        <img src={details.image} alt={details.name} height="338" width="225" />
        <p>{details.desc}</p>
        <p># of seasons: {details.seasons}</p>
        <button onClick={() => }>Predictions</button>
      </li>
    )
  }
}

export default Show;
