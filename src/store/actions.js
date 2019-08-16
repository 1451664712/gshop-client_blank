import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO
} from './mutation-types'

import {reqAddress, reqFoodCategorys, reqShops} from '../api'
export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 获取食品列表
  async getCategorys ({commit}) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  // 获取商家列表 地址
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 异步获取食品分类
  // 异步获取商家列表
  // 用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USERINFO, {userInfo})
  }
}
