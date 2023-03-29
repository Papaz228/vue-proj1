<template>
    <div>
        <button @click="$router.push('/')">Main</button>
        <input v-model="blockNumberOrHash" placeholder="Enter block number or hash" />
        <button @click="$router.push(`/blocks/${blockNumberOrHash}`)">Find block</button>
        <input v-model="transactionHash" placeholder="Enter transaction hash" />
        <button @click="$router.push(`/transactions/${transactionHash}`)">Find transaction</button>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: "navbar-item",
    data(){
      return {
        blockNumberOrHash: "",
        transactionHash: ""
      }
    }
  }
  
  </script>
  <style>
  </style>
  
  