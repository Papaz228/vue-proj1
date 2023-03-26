    <template>
        <h1> All users:</h1>
        <div>
            <user-item 
                v-for="user in users"
                :key="user"
                :user="user"
                @delete="$emit('delete', user)"
            ></user-item>
        </div>
   </template>
   
   <script>

   
   export default {
     name: 'users-list',
     props:{
        users:{
            type: Array,
        }
     }
   }
   </script>
   <style>
   </style>
   
   