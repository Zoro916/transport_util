import React, { Component } from 'react';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';
import RecordForm from '../../components/RecordForm';
import ConfirmButton from '../../components/ConfirmButton';

class FastRecord extends Component {

  fastCreateRecord = () => {
    const { transport_code, address } = this.props;
    if (!transport_code || !address) {
      return Toast.info('请填写完整的打卡信息！');
    }
    this.props.dispatch({ type: 'record/createRecord' });
  }

  render() {
    return (
      <div>
        <RecordForm fast />
        <ConfirmButton onConfirm={this.fastCreateRecord} />
      </div>
    );
  }

}

export default connect(state => state.record)(FastRecord);
