<template>
  <p>Person: {{ person }}</p>
  </template>
  
  <script>
  export default {
    props: {
      person:{
        type: Object
      }
    }
  }
  </script>