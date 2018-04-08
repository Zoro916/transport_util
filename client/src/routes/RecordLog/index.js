import React, { Component } from 'react';
import { connect } from 'dva';
import { WhiteSpace } from 'antd-mobile';
import LogTool from '../../components/RecordLog/LogTool';
import Log from '../../components/RecordLog/Log';


class RecordLog extends Component {


  render() {
    return (
      <div>
        <LogTool />
        <WhiteSpace />
        <Log />
      </div>
    );
  }
}
export default connect(state => state.log)(RecordLog);
