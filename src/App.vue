
<template>
  <div class="w-full p-4">
    <main
      role="main"
      class="w-full flex flex-col content-center justify-center"
    >
      <div class="w-full sm:w-1/2 lg:w-2/3 bg-gray-50 rounded-xl m-auto">
        <div class="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <Hero />
          <Paper v-for="paper in papers" :title="paper.title" :abstract="paper.abstract" :link="paper.link"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Paper from "./components/Paper.vue";
import * as test_paper from "./assets/papers/test_paper.json"

export default {
  components: {
    Hero,
    Paper,
  },
  data() {
    return {
      papers: test_paper.papers
    }
  }
};
</script>

<style>
</style>