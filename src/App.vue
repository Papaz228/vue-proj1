<template>
  <button @click="fetchUsers">Fetch Users</button>
  <users-list 
  :users="users"
  @delete="deleteUser"
  ></users-list>
  <div v-if="users.length > 0">
  <user-add
  @newUserCreate="createNewPerson"
  ></user-add>
</div>
</template>

<script>

import axios from "axios"

export default {
  name: 'App',
  data() {
    return {
        id: 0,
        users: []
    }
  },
  methods: {
    createNewPerson(newUser) {
      this.id++
      newUser.id = this.id
      this.users.push(newUser)
    },

    deleteUser(user){
      this.users = this.users.filter(u => u.id !== user.id)
    },

    async fetchUsers(){
      const responce = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=5")
      this.users = responce.data
      this.id = this.users.length
    }
  },
}

</script>
<style>
</style>

