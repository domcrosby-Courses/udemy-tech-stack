// imrc
import React, { Component } from 'react';
// crr
import { connect } from 'react-redux';
import { Text } from 'react-native';

// ccsr
class LibraryList extends Component {
  state = {};

  render() {
    console.log(this.props);
    return <Text>Yo</Text>;
  }
}

// Allows access to the store to view state
const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
