<template>
  <h1>Example2</h1>
  <button @click="incrementNumber">INCREMENT</button>
  <button @click="getPostApiCall">GETPOSTDATA</button>
</template>

<script>
export default {
  methods: {
    incrementNumber() {
      this.$store.commit('increment');
    },
    getPostApiCall() {
      this.$store.dispatch('getPostData');
    },
  },
};
</script>
