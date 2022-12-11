<template>
  <div>
    <button class="mt-3 bg-brown p-1 px-2 rounded shadow-xl font-bold hover:bg-brown-medium text-brown-veryLight">{{btnText}}</button>
  </div>
</template>

<script>
  import { ref, toRefs, watch } from 'vue'

  export default {
    name: 'Button',
    props: ['btnText'],
  };
</script>