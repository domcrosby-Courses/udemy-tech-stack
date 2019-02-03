// imrc
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardSection from './CardSection';
// you shouldn't really do this
import * as actions from '../actions';

const propTypes = {
  library: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  selectedLibraryId: PropTypes.number,
  selectLibrary: PropTypes.func.isRequired
};

const defaultProps = { selectedLibraryId: 1 };

// ccsr
class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    if (library.id === selectedLibraryId) {
      return <Text>{library.description}</Text>;
    }
    return null;
  }

  render() {
    const { library, selectLibrary } = this.props;
    const { title, id } = library;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          selectLibrary(id);
        }}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// rnss
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

const mapStateToProps = state => ({ selectedLibraryId: state.selectedLibraryId });

// this passes all actions as props and also allows for automatic dispatching of actions
export default connect(
  mapStateToProps,
  actions
)(ListItem);
