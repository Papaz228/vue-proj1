<template>
    <div>Block Detail Page</div>
    <block-item :block="block"></block-item>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            block:{}
        }
    },
    methods:{
        ...mapActions({
            getBlock: "getBlock"
        })
    },
    async mounted() {
        this.block = await this.getBlock(this.$route.params.id)
        this.block.fromDetail = true
   },
}
</script>
<style scoped>
</style>