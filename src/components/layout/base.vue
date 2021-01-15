<template>
  <div class="baseLayout">
    <Header />
    <div class="contents">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  name: "Home",
  components: {
    Header, Footer
  }
};
</script>

<style lang="scss" scoped>
.baseLayout{
  height:100%;
  display:flex;
  flex-direction: column;

  .contents{
    flex:1;
    position: relative;
    padding:40px;
    background:#F5F6F8
  }
}

</style>