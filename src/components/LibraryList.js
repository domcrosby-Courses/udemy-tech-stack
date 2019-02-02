// imrc
import React, { Component } from 'react';
// imrn
//
import { FlatList } from 'react-native';
// crr
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const propTypes = {};

const defaultProps = {};

// ccsr
class LibraryList extends Component {
  state = {};

  renderItem(library) {
    return <ListItem library={library.item} />;
  }

  render() {
    const { libraries } = this.props;
    return (
      <FlatList
        data={libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

// Allows access to the store to view state and passes as props to class above
const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
