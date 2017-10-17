import React from 'react';
import PropTypes from 'prop-types';

class ProfileCreator extends React.Component {

  gotToProfile(e) {
    //make links visit profile
    e.preventDefault();
    //grab the text from the box and transition from / to /profile/:profileId
    this.props.history.push(`profile/${this.profileInput.value}`)  }


  render() {
    return (
      <form className='profile-selector' onSubmit={this.gotToProfile.bind(this)}>
        <h2>Please Enter a Name</h2>
        <input type="text" required placeholder="Profile Name"
          ref={(input) => { this.profileInput = input }} />
        <button type="submit"> Visit Profile </button>
      </form>
    )
  }
}

ProfileCreator.propTypes = {
  router: PropTypes.object
}

export default ProfileCreator;
