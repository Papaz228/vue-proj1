<template>
    <users-list 
    :users="$store.state.users"
    @delete="deleteUser"
    ></users-list>
    <user-add
    @newUserCreate="createUser"
    ></user-add>
    <button @click="fetchUsersAsync">Fetch Users</button>
  </template>
  
  <script>
  
  import {mapActions} from "vuex"
  export default {
    name: 'App',

    methods: {
      ...mapActions({
        fetchUsers:'fetchUsers',
        createUser:'createUser',
        deleteUser:'deleteUser'
      }),
      async fetchUsersAsync(){
        this.fetchUsers()
      }
    },
  
  }
  
  </script>
  <style>
  </style>
  
  