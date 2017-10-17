import React, { Component } from 'react';

import AddPredictionForm from './AddPredictionForm';
import Show from './Show';

class PredictionZone extends Component {
  // constructor() {
  //   super();
  //   // this.renderOrder = this.renderOrder.bind(this);
  // }

  render() {
    return (
      <div>
        <p>Prediction Zone</p>
        {/* <Show {...this.props}/> */}
        <p>Add a Prediction</p>
        <AddPredictionForm addPrediction={this.props.addPrediction}/>
      </div>
    );
  }
}

export default PredictionZone;
