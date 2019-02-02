// imrc
import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import CardSection from './CardSection';

const propTypes = {
  library: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

const defaultProps = {};

// ccsr
export default class ListItem extends Component {
  render() {
    const { library } = this.props;
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{library.title}</Text>
      </CardSection>
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
