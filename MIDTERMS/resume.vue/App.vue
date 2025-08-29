<script setup>
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
  </header>

  <div id="Profile">
    <h1>{{ msg }}</h1>

    <profile></profile>
  </div>

  <div id="Education">
    <h1>{{ msg }}</h1>

    <education></education>
  </div>

  <div id="Skills">
    <h1>{{ msg }}</h1>

    <skills></skills>
  </div>


 <main>
    <!-- <TheWelcome /> -->
  </main>
</template> 

<style scoped>
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
