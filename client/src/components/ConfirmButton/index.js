import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Button, WhiteSpace } from 'antd-mobile';

class ConfirmButton extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  onCancel = () => {
    this.context.router.push('/home');
    this.props.dispatch({ type: 'record/reset' });
  }

  onConfirm = () => {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <WhiteSpace />
        <Button type="primary" size="small" onClick={this.onConfirm}>确认</Button>
        <WhiteSpace />
        <Button type="ghost" size="small" onClick={this.onCancel}>取消</Button>
      </div>
    );
  }
}

export default connect(state => state.record)(ConfirmButton);
