<template>
    <div>
        User id is {{ $route.params.id }}
        <user-item
        :user="$store.state.users[$route.params.id]">
    </user-item>
    </div>
</template>

<script>

export default{

}
</script>

<style scoped>

</style>
