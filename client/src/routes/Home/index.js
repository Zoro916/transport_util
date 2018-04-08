import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuGrid from '../../components/MenuGrid';
import RecordTimeLine from '../../components/RecordTimeLine';

export default class Home extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <MenuGrid />
        <RecordTimeLine />
      </div>
    );
  }
}
