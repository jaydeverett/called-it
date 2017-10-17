import React from 'react';
import PropTypes from 'prop-types';

class AddShowForm extends React.Component {
  createShow(e) {
    e.preventDefault();
    console.log("Adding show!");
    const show = {
      name: this.name.value,
      image: this.image.value,
      seasons: this.seasons.value,
      desc: this.desc.value,
    }
    this.props.addShow(show);
    this.showForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.showForm = input} className="show-edit" onSubmit={(e) => this.createShow(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Show Name" />
        <input ref={(input) => this.image = input} type="text" placeholder="Show Image" />
        <textarea ref={(input) => this.desc = input} type="text" placeholder="Show Desc" />
        <input ref={(input) => this.seasons = input} type="text" placeholder="Number of Seasons" />
        <button type="submit">+ Add Show</button>
      </form>
    )
  }
}

// AddShowForm.propTypes = {
//   addFish: PropTypes.func.isRequired
// }

export default AddShowForm;
