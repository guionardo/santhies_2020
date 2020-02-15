<template>
  <figure>
    <img :src="imagesrc" alt=""/>
    <figcaption>Legenda: {{ caption }} - {{ src }}</figcaption>
  </figure>
</template>
<script>
export default {
  props: ['src', 'caption'],
  computed: {
    imagesrc () {
      return './images/' + this.src
    }
  }
}
</script>