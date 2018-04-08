import React, { Component } from 'react';
import { List, Radio, InputItem, Switch, DatePicker } from 'antd-mobile';
import moment from 'moment';
import { connect } from 'dva';

import './style.less';

const RadioItem = Radio.RadioItem;

class RecordForm extends Component {
  state = {
    addressSwitch: false,
  }

  componentDidMount() {
    this.props.dispatch({ type: 'record/getAddressList' });
  }

  addressSwitch = () => {
    const addressSwitch = this.state.addressSwitch;
    this.props.dispatch({ type: 'record/save', payload: { address: '' } });
    this.setState({
      addressSwitch: !addressSwitch,
    });
  }

  addressOnChange = (value) => {
    this.props.dispatch({ type: 'record/save', payload: { address: value } });
  }

  transportChange = (value) => {
    this.props.dispatch({ type: 'record/save', payload: { transport_code: value } });
  }

  dateChange = (date) => {
    this.props.dispatch({ type: 'record/save', payload: { date: moment(date).format('YYYY-MM-DD') } });
  }

  timeChange = (time) => {
    this.props.dispatch({ type: 'record/save', payload: { time: moment(time).format('HH:mm') } });
  }

  render() {
    return (
      <div className="record-form">
        {
          this.props.fast
            ? null
            : <List renderHeader={() => '打卡日期、时间'}>
              <DatePicker
                onChange={this.dateChange}
                mode="date"
                value={moment(this.props.date).toDate()}
              >
                <List.Item arrow="horizontal">打卡日期</List.Item>
              </DatePicker>
              <DatePicker
                onChange={this.timeChange}
                mode="time"
                value={moment(`${this.props.date} ${this.props.time}`).toDate()}
              >
                <List.Item arrow="horizontal">打卡时间</List.Item>
              </DatePicker>
            </List>
        }

        <List renderHeader={() => '厂商'}>
          <List.Item
            extra={
              <Switch
                checked={this.state.addressSwitch}
                onClick={this.addressSwitch}
              />
            }
          >自定义厂商
          </List.Item>
          {
            this.state.addressSwitch
              ? null
              : this.props.addressList.map(
                item => (
                  <RadioItem
                    disabled={this.state.custom}
                    key={item.value}
                    checked={this.props.address === item.value}
                    onChange={() => this.addressOnChange(item.value)}
                  >
                    {item.label}
                  </RadioItem>
                ),
              )
          }

          {
            this.state.addressSwitch ? <InputItem
              clear
              placeholder="请输入厂商名称"
              onChange={(value) => { this.addressOnChange(value); }}
            >厂商</InputItem>
            : null
          }
        </List>
        <List renderHeader={() => '运单编号'}>
          <InputItem
            clear
            placeholder="请输入运单编号"
            onChange={(value) => { this.transportChange(value); }}
          >运单编号</InputItem>
        </List>
      </div>
    );
  }
}

export default connect(state => state.record)(RecordForm);
