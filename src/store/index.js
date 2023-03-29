import {createStore} from "vuex"
const Web3 = require('web3')
const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/JBULJH-wvlRUC7PvLfTZ9vxYducqpMX0')

export default createStore({
  state:{
    blocks: []
  },

  getters:{
  },

  mutations:{
    addBlock(state, newBlock){
      state.blocks.unshift(newBlock)
    }
  },

  actions:{
    async getLastBlock({commit}) {
      web3.eth.subscribe("newBlockHeaders")
      .on('data', block => {
        let newBlock = {
          hash: block.hash,
          number: block.number,
          tx: block.transactions
        }
        commit("addBlock", newBlock)
      })
    },
    // eslint-disable-next-line no-unused-vars
    async getBlock({commit}, blockNumOrHash){
      return await web3.eth.getBlock(blockNumOrHash)
    },
    // eslint-disable-next-line no-unused-vars
    async getTransaction({commit}, transactionHash){
      return await web3.eth.getTransaction(transactionHash)
    }
  },

  modules:{

  }
})