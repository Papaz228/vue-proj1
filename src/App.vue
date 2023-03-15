<template>
 <MyForm @newPerson="createNewPerson" />
 <MyText :person="person" />
</template>

<script>
import MyForm from "@/components/MyForm.vue"
import MyText from "@/components/MyText.vue"

export default {
  name: 'App',
  components: { MyForm, MyText },
  data() {
    return {
        person: []
    }
  },
  methods: {
    createNewPerson(eventData) {
      this.person = eventData
    }
  }
}
</script>
<style>
</style>

