import React, { Component } from 'react';

import sampleShows from '../sample-shows';

import Header from './Header';
import Collection from './Collection';
import Prediction from './Prediction';
import Show from './Show';

class App extends Component {
  constructor() {
    super();

    this.addShow = this.addShow.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      shows: {}
      // collection: {}
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
          <Prediction />
      </div>
    );
  }
}

export default App;
