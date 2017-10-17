import React, { Component } from 'react';

import sampleShows from '../sample-shows';

import Header from './Header';
import Collection from './Collection';
import PredictionZone from './PredictionZone';
import Show from './Show';
import Prediction from './Prediction';

class App extends Component {
  constructor() {
    super();

    this.addShow = this.addShow.bind(this);
    this.addPrediction = this.addPrediction.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      shows: {}
    };
  }

  addShow(show) {
    //update our state
    const shows = {...this.state.shows};
    //add in our new fish
    const timestamp = Date.now();
    shows[`show-${timestamp}`] = show;
    //set state
    this.setState({ shows: shows });
  }

  addPrediction(key) {
    //update our state
    const shows = {...this.state.shows}
    //add in our new fish
    const timestamp = Date.now();
    shows[`show-${timestamp}`] = show;
    //set state
    this.setState({ shows: shows });
  }

  loadSamples() {
    this.setState({
      shows: sampleShows
    });
  }

  render() {
    return (
      <div className="called-it">
        <div className="shows">
          <Header tagline="Your Shows"/>
          <ul className="list-of-shows">
            {Object
              .keys(this.state.shows)
              .map(key => <Show key={key} details={this.state.shows[key]} />)
            }
          </ul>
        </div>
          <Collection addShow={this.addShow} loadSamples={this.loadSamples}/>
        <div>
          <PredictionZone addPrediction={this.addPrediction} />
        </div>
      </div>
    );
  }
}

export default App;
