<template>
    <div>Main page</div>
    <block-list :blocks="$store.state.blocks"></block-list>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    methods:{
        ...mapActions({
            getLastBlock: "getLastBlock"
        })
    },
    mounted(){
        this.getLastBlock()
    }
}
</script>
<style scoped>
</style>