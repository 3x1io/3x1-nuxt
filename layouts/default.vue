<template>
  <Nuxt />
</template>

<script>
  export default {
    head() {
      return {
        bodyAttrs: {
          class:'app header-fixed sidebar-fixed sidebar-lg-show'
        }
      }
    },
  }
</script>
