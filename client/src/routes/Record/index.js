import React, { Component } from 'react';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';
import RecordForm from '../../components/RecordForm';
import ConfirmButton from '../../components/ConfirmButton';

class Record extends Component {

  createRecord = () => {
    const { transport_code, address, date, time } = this.props;
    if (!transport_code || !address || !date || !time) {
      return Toast.info('请填写完整的打卡信息！');
    }
    this.props.dispatch({ type: 'record/createRecord' });
  }

  render() {
    return (
      <div>
        <RecordForm />
        <ConfirmButton onConfirm={this.createRecord} />
      </div>
    );
  }
}
export default connect(state => state.record)(Record);
