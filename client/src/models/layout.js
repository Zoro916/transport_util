
export default {

  namespace: 'layout',

  state: {
    title: '/home',
    backFuc: null,
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/home') {
          dispatch({ type: 'record/reset' });
        }
        dispatch({ type: 'save', payload: { title: pathname } });
      });
    },
  },

};
