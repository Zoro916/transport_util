import moment from 'moment';
import * as recordServer from '../services/record';

const initState = {
  start: moment().subtract(1, 'month').format('YYYY-MM-DD'),
  end: moment().format('YYYY-MM-DD'),
  address: '',
  transport_code: '',
  log_list: [],
  addressList: [],
};
export default {

  namespace: 'log',

  state: initState,

  effects: {
    *getLogList({ payload }, { call, put, select }) {
      const { start, end, address, transport_code } = yield select(state => state.log);
      const { data } = yield call(recordServer.getLogList, { start, end, address, transport_code });
      yield put({ type: 'save', payload: { log_list: data } });
    },
    *getAddressOptions({ payload }, { call, put }) {
      const { data } = yield call(recordServer.getAddressOptions);
      yield put({ type: 'save', payload: { addressList: data } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    reset() {
      return initState;
    },
    resetForm(state) {
      return {
        ...state,
        start: moment().subtract(1, 'month').format('YYYY-MM-DD'),
        end: moment().format('YYYY-MM-DD'),
        address: '',
        transport_code: '',
      };
    },
  },

};
