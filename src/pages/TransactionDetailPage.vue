<template>
    <div>Transaction Detail Page</div>
    <div>{{ transaction }}</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            transaction:{}
        }
    },
    methods:{
        ...mapActions({
            getTransaction: "getTransaction"
        })
    },
    async mounted() {
        this.transaction = await this.getTransaction(this.$route.params.id)
   },
}
</script>
<style scoped>
</style>