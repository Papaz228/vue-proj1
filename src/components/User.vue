    <template>
        <div> Name: {{  user.name }}</div>
        <div> Username: {{  user.username }}</div>
        <div> Email: {{  user.email }}</div>
        <button @click="$router.push(`/users/${user.id}`)">Open</button>
        <button @click="$emit('delete', user)">Delete user</button>
   </template>
   
   <script>
   
   export default {
     name: 'user-item',
     props:{
        user: {
           type: Object
        }
    }
   }
   </script>
   <style>
   </style>
   
   