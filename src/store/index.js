import {createStore} from "vuex"
import axios from "axios"

export default createStore({
  state:{
    users:[],
    id: 0
  },
  getters:{

  },
  mutations:{
    setUsers(state, newUsers) {
        state.users = newUsers
        state.id = newUsers.length
    },
    deleteUser(state, id){
        state.users = state.users.filter(u => u.id !== id)
    },
    createUser(state, newUser) {
        state.id++
        newUser.id = state.id
        state.users.push(newUser)
      },
  },
  actions:{
    async fetchUsers({commit}){
        const responce = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=5")
        commit('setUsers', responce.data)
    },
    
    createUser({commit}, newUser) {
        commit('createUser', newUser)
    },
  
    deleteUser({commit}, user){
        commit('deleteUser', user.id)
    },
  },
  modules:{

  }
})