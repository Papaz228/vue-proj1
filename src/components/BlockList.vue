<template>
    <ul v-for="block in blocks" :key="block">
        <li>
           <block-item :block="block"></block-item>
        </li>
    </ul>
</template>
<script>
import BlockItem from './BlockItem.vue'
export default {
  components: { BlockItem },
   name: 'block-list',
   props:{
    blocks:{
        type: Array,
        required: true
    }
   }
}
</script>
<style scoped>
</style>