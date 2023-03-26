<template>
    <h2>Add user</h2>
    <form @submit.prevent>
    <input v-model="newUser.name" type="text" placeholder="name" />
    <input v-model="newUser.username" type="text" placeholder="username" />
    <input v-model="newUser.email" type="text"  placeholder="email" />
    <button @click="create">Add</button>
</form>
</template>

<script>

export default {
    name: 'user-add',
    data() {
        return{
            newUser:{
                name:"",
                username:"",
                email:""
            }
        }
    },
    methods: {
        create() {
            this.$emit("newUserCreate", this.newUser)
            this.newUser = {
                name:"",
                username:"",
                email:""
            }
        }
    }
}
</script>
<style>
</style>

