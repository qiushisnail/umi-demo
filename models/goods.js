import axios from "axios";
function getGoods() {
  return axios.get('/api/goods')
}
export default {
  namespace: 'goods',// 不指定，就使用文件名 
  state: [], // 初始状态
  effects: {//异步操作
    *getList(action, { call, put }) {
      const ret = yield call(getGoods)
      yield put({ type: 'initGoods', payload: ret.data.result })
    }
  },
  reducers: {
    initGoods(state, action) {
      return action.payload;
    },
    // 更新状态
    addGood(state, action) {
      return [...state, { title: action.payload.title }]
    }
  }
}