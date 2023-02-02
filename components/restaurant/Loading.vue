<template>
  <div class="text-center" v-if="status">
    <b-spinner label="Spinning"></b-spinner>
    <b-spinner type="grow" label="Spinning"></b-spinner>
    <b-spinner variant="primary" label="Spinning"></b-spinner>
    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    <b-spinner variant="success" label="Spinning"></b-spinner>
    <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
  </div>
</template>

<script>
export default {
  props: ["status"],
};
</script>
