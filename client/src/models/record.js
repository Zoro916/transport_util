import moment from 'moment';
import { routerRedux as router } from 'dva/router';

import { Toast } from 'antd-mobile';
import * as recordServer from '../services/record';

const initState = {
  addressList: [],
  custom: false,
  date: moment().format('YYYY-MM-DD'),
  time: moment().format('HH:mm'),
  address: '',
  transport_code: '',
  oilPay: 0,

  time_line_data: [],

  datePickerVisible: false,
  addressModalVisible: false,
};

export default {

  namespace: 'record',

  state: initState,

  effects: {
    *getAddressList({ payload }, { call, put }) {
      const { data } = yield call(recordServer.getAddressList);
      yield put({ type: 'save', payload: { addressList: data || [], address: data && data[0].value } });
    },

    *createRecord({ payload }, { call, put, select }) {
      const { date, time, address, transport_code } = yield select(state => state.record);
      const data = yield call(recordServer.createRecord, { date, time, address, transport_code });
      if (data.status === 1) {
        Toast.success(data.msg);
        yield put(router.push('/home'));
      } else {
        Toast.fail(data.msg);
      }
    },

    *createOilPay({ payload }, { call, put, select }) {
      const { date, oilPay } = yield select(state => state.record);
      const data = yield call(recordServer.createOilPay, { date, oil: oilPay });
      if (data.status === 1) {
        Toast.success(data.msg);
        yield put(router.push('/home'));
      } else {
        Toast.fail(data.msg);
      }
    },

    *getDaily({ payload }, { call, put }) {
      const { date } = payload;
      const { data } = yield call(recordServer.getDaily, { date });
      yield put({ type: 'save', payload: { time_line_data: data || [] } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    reset() {
      return initState;
    },
  },

};
