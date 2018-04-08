import React, { Component } from 'react';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';
import OilForm from '../../components/OilForm';
import ConfirmButton from '../../components/ConfirmButton';

class OilBill extends Component {

  createOilPay = () => {
    const { date, oilPay } = this.props;
    if (!date || !oilPay) {
      return Toast.info('请填写完整的打卡信息！');
    }
    this.props.dispatch({ type: 'record/createOilPay' });
  }

  render() {
    return (
      <div>
        <OilForm />
        <ConfirmButton onConfirm={this.createOilPay} />
      </div>
    );
  }
}
export default connect(state => state.record)(OilBill);
