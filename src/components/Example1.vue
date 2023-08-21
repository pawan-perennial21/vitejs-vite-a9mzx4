<template>
  <h1>Example1</h1>
  {{ $store.state.count }}
  {{ $store.getters.personFullName }}
  {{ $store.state.postData }}
</template>

<script>
export default {};
</script>
