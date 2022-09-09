<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <span @mouseover="hover = true" @mouseleave="hover = false"> Hover me to show the message!
    </span>
    <span v-if="hover">This is a secret message.</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hover: false,
      };
    }
  }
</script>