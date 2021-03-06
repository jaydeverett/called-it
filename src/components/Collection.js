import React, { Component } from 'react';

import AddShowForm from './AddShowForm';

class Collection extends Component {
  render() {
    return (
      <div>
        <p>Collection</p>
        <AddShowForm addShow={this.props.addShow}/>
        <button onClick={this.props.loadSamples}>Load Sample Shows</button>
      </div>
    );
  }
}

export default Collection;
