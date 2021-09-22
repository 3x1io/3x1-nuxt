<template>
  <div :action="$props.action" :data="$props.data">

  </div>
</template>

<script>
    import AppForm from '../helpers/app-components/Form/AppForm';
    export default {
        mixins: [AppForm],
        name: "Form",
        props: ['action', 'data', 'inputs'],
        data(){
          return {
            form: {}
          }
        },
        mounted() {
          this.form = this.$props.inputs
        }
    }
</script>

<style scoped>

</style>
