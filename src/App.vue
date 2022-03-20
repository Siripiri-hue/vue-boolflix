<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/movieHeader.vue'
import Main from './components/movieMainContent.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Quintessential&display=swap');

* {
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}

</style>
