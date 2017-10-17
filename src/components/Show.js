import React from 'react';

class Show extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <li>
        <h3>{details.name}</h3>
        <img src={details.image} alt={details.name} height="338" width="225" />
        <p>{details.desc}</p>
        <p># of seasons:{details.seasons}</p>
      </li>
    )
  }
}

export default Show;
