import React, { Component } from 'react';

import './style.less';

export default class RecordTimeItem extends Component {

  render() {
    const { time, address, transport_code, date, up } = this.props;
    return (
      <div className="time-line-item">
        {
          up ? <span className="line" /> : null
        }
        <span className="circle" />
        <p>
          <span>{date}</span>
          <span>{time}</span>
          完成一趟运输，往
          <span>{address}</span>
          方向。运单编号
          <span>{transport_code}</span>
          。
        </p>
      </div>
    );
  }
}

