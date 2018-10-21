import types from '../types/user'
import { myAxios } from '@/utils/interaction'

// console.log("+++", types);
// const namespaced = true;
const state = {
  success: false

}

const getters = {

}

const actions = {

  [types.actions.login]: (context, data) => {
    // context: commit,dispatch,getters,state
    return new Promise((resolve, reject) => {
      myAxios({
        method: 'POST',
        url: 'login/check',
        data: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      }).then(function (res) {
        // if (res.data.state === 200) {
        resolve(res)
        // } else {
        //   // that.$Notice.error({
        //   //   title: '账号或密码出现错误，请检查'
        //   // })
        //   this.$Notice.error({
        //     title: 'Notification title',
        //     desc: 'Here is the notification description. Here is the notification description. '
        //   })
        // }
      }).catch(function (err) {
        reject(err)
      })
    })
  }
}

const mutations = {
  [types.mutations.setInfo]: (state, datas) => {
    state.success = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
