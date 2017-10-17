import React from 'react';
// import PropTypes from 'prop-types';

class AddPredictionForm extends React.Component {
  createPrediction(e) {
    e.preventDefault();
    console.log("Adding show!");
    // const show = {this.state.show}
    const prediction = {
      name: this.name.value,
      image: this.image.value,
      seasons: this.seasons.value,
      desc: this.desc.value,
      prediction: this.prediction.value
    }
    this.props.addPrediction(prediction);
    this.showForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.predictionForm = input} className="prediction-edit" onSubmit={(e) => this.createPrediction(e)}>
        <textarea ref={(input) => this.prediction = input} type="text" placeholder="Enter a Prediction" />
        <button type="submit">+ Add Prediction</button>
      </form>
    )
  }
}

// AddPredictionForm.propTypes = {
//   addPrediction: PropTypes.func.isRequired
// }

export default AddPredictionForm;
