// imrc
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
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
  expanded: PropTypes.bool.isRequired,
  selectLibrary: PropTypes.func.isRequired
};

const defaultProps = {};

// ccsr
class ListItem extends Component {
  componentWillUpdate() {
    // note that this needs work in order to work on android
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
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

// passing a function allows it to change on state change and pass as prop
const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.library.id === state.selectedLibraryId;
  return { expanded };
};

// this passes all actions as props and also allows for automatic dispatching of actions
export default connect(
  mapStateToProps,
  actions
)(ListItem);
