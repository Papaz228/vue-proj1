import {createStore} from "vuex"
const Web3 = require('web3')
import {ABI} from "@/contracts/Example.abi.js"
import {bytecode} from "@/contracts/Example.bin.js"



export default createStore({
  state:{
    web3Wallet: {},
    wallet: {
      address: "",
      chainId: "",
      chain: ""
    },
    contractAddress: "",
    myContract: {},
    txHash: ""
  },

  getters:{
  },

  mutations:{
  },

  actions:{
    async connectWallet({state}){
      if (typeof window.ethereum !== 'undefined') {
        if (window.ethereum.isMetaMask === true) {
          if (window.ethereum.isConnected() === true) {
            console.log("Metamask connected!")
           }
           else {
            console.log("Metamask is not connected!")
            await window.ethereum.enable()
            console.log("Metamask connected!")
           }

           window.ethereum.request({method: "eth_requestAccounts"}).then(accounts => {
            state.wallet.address = accounts[0]
          })

            state.web3Wallet = new Web3(window.ethereum)

            state.wallet.chainId = await state.web3Wallet.eth.net.getId()
            state.wallet.chain = await state.web3Wallet.eth.net.getNetworkType()

          window.ethereum.on('accountsChanged', (accounts) =>{
            state.wallet.address = accounts[0]
          })

          window.ethereum.on('chainChanged', async () =>{
            state.web3Wallet = new Web3(window.ethereum)
            state.wallet.chainId = await state.web3Wallet.eth.net.getId()
            state.wallet.chain = await state.web3Wallet.eth.net.getNetworkType()
          })
         }         
       }
        else{
        alert("Ethereum client is not installed!")
        }
    },
    async getTransaction({state}, transactionHash){
      state.web3Wallet = new Web3(window.ethereum)
      return await state.web3Wallet.eth.getTransaction(transactionHash)
    },
    async sendTransaction({state}, to, value){
      value = state.web3Wallet.utils.numberToHex(value)
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [{
        from: state.wallet.address,
        to: to,
        value: value
        }]
        }).then(hash => {
          state.txHash = hash
          })
    },
    async deployContract({state}){
      const receipt = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: state.wallet.address,
          data: bytecode
        }]
      })
      
      // Wait for the transaction to be confirmed
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const txReceipt = await window.ethereum.request({
          method: 'eth_getTransactionReceipt',
          params: [receipt]
        });
      
        if (txReceipt !== null) {
          state.contractAddress = txReceipt.contractAddress;
          console.log("Contract deployed at address: ", state.contractAddress);
          break;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      state.myContract = new state.web3Wallet.eth.Contract(ABI, state.contractAddress)
    },
    async setX({state}, number){
        let txData = state.myContract.methods.setX(number).encodeABI()

        await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: state.wallet.address,
            to: state.contractAddress,
            data: txData
          }]
          }).then(hash => {
            state.txHash = hash
            })
    },
    async setStr({state}, str){
      let txData = state.myContract.methods.setStr(str).encodeABI()

      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: state.wallet.address,
          to: state.contractAddress,
          data: txData
        }]
        }).then(hash => {
          state.txHash = hash
          })
  },
  async addElem({state}, elem){
    let txData = state.myContract.methods.addElem(elem).encodeABI()

    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [{
        from: state.wallet.address,
        to: state.contractAddress,
        data: txData
      }]
      }).then(hash => {
        state.txHash = hash
        })
},

  async getX({state}){
    console.log(state.contractAddress)
    return await state.myContract.methods.x().call({from: state.wallet.address}).then(hash => {
      state.txHash = hash
      })
  },
  async getStr({state}){
    return await state.myContract.methods.str().call({from: state.wallet.address}).then(hash => {
      state.txHash = hash
      })
  },
  async getData({state}, index){
    return await state.myContract.methods.data(index).call({from: state.wallet.address}).then(hash => {
      state.txHash = hash
      })
  },

  },

  modules:{

  }
})