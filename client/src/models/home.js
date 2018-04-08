
export default {

  namespace: 'home',

  state: {
    title: '首页',
    backFuc: null,
  },

  effects: {

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
