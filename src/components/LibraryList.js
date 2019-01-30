// imrc
import React, { Component } from 'react';
// imrn
//
import { FlatList, Text } from 'react-native';
// crr
import { connect } from 'react-redux';
import { ListItem } from '../Components';

// ccsr
class LibraryList extends Component {
  state = {};

  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
      />
    );
  }
}

// Allows access to the store to view state and passes as props to class above
const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
