import React, { Component } from 'react';
import { connect } from 'dva';
import { List, Switch, Toast } from 'antd-mobile';
import RecordForm from '../../components/RecordForm';
import OilForm from '../../components/OilForm';
import ConfirmButton from '../../components/ConfirmButton';

class NewRecord extends Component {

  state = {
    oilSwitch: false,
  };

  handleOil = () => {
    this.setState({ oilSwitch: !this.state.oilSwitch });
  }

  createRecord = () => {
    const { transport_code, address, date, time, oilPay } = this.props;
    if (!transport_code || !address || !date || !time || (!oilPay && this.state.oilSwitch)) {
      return Toast.info('请填写完整的打卡信息！');
    }
    this.props.dispatch({ type: 'record/createRecord' });
    if (this.state.oilSwitch) {
      this.props.dispatch({ type: 'record/createOilPay' });
    }
  }

  render() {
    return (
      <div>
        <RecordForm />
        <List renderHeader={() => '记录油费'}>
          <List.Item extra={<Switch onChange={this.handleOil} checked={this.state.oilSwitch} />}>
          记录油费
          </List.Item>
        </List>
        {
          this.state.oilSwitch ? <OilForm compose /> : null
        }
        <ConfirmButton onConfirm={this.createRecord} />
      </div>
    );
  }
}
export default connect(state => state.record)(NewRecord);
