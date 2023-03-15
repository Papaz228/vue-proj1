    <template>
        <input v-model="newPerson.name" type="text"/>
        <input v-model="newPerson.surname" type="text"/>
        <input v-model="newPerson.age" type="number"/>
        <input v-model="newPerson.email" type="email"/>
        <input v-model="newPerson.password" type="password">
        <button @click="inputPersonData">Create New Person</button>
   </template>
   
   <script>

   export default {
     data() {
        return {
            newPerson:{
                name: "",
                surname: "",
                age: "",
                email: "",
                password: ""
            }
        }
     },
     methods:{
        inputPersonData(){
            let newPersonObject = {
                ...this.newPerson
            }
            this.$emit("newPerson", newPersonObject)
            this.newPerson = {
                name: "",
                surname: "",
                age: "",
                email: "",
                password: ""
            }
        }
    }
    }
   </script>
   
   