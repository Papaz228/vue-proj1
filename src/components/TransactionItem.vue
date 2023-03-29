<template>
    <div>{{ transaction }}</div>
</template>
<script>

export default {
   name: 'transaction-item',
   props:{
    transaction:{
        type: Object,
        required: true
    }
   }
}
</script>
<style scoped>
</style>