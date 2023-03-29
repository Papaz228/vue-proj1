<template>
    <h3>Block number: {{ block.number }}</h3>
    <h3>Block hash: {{ block.hash }}</h3>
    <div v-if="block.fromDetail">
        <div v-for="transaction in block.transactions" :key="transaction"> 
            <a :href="`/transactions/${transaction}`">{{ transaction }}</a>
        </div>
    </div>
    <button v-else @click="$router.push(`/blocks/${block.number}`)">Open block</button>
</template>
<script>

export default {
   name: 'block-item',
   props:{
    block:{
        type: Object,
        required: true
    }
   }
}
</script>
<style scoped>
</style>