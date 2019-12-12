<template>
 <div>
   lalal
 </div>
</template>

<script>

  export default {
    name: 'piechart',
    props: {
      title: {
        type: String,
        default: ''
      },
      destroyOnClose: Boolean
    },

    data() {
      return {
        closed: false,
        key: 0
      };
    },

    watch: {
     
    },

    computed: {
     
    },

    methods: {
    
    },

    mounted() {
    //  this.$el
    },

    destroyed() {
      // if appendToBody is true, remove DOM node after destroy
      // if (this.appendToBody && this.$el && this.$el.parentNode) {
      //   this.$el.parentNode.removeChild(this.$el);
      // }
    }
  };
</script>
