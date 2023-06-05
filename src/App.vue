
<template>
  <div class="w-full p-4">
    <main role="main" class="w-full flex flex-col content-center justify-center">
      <div class="w-full sm:w-1/2 lg:w-2/3 bg-gray-50 rounded-xl m-auto">
        <div class="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <Hero />
          <div class="tabs justify-center">
            <a class="tab" href="#cv">CV Highlights</a>
            <a class="tab" href="#projects">Projects</a>
            <a class="tab tab-active" href="#papers">Papers & Talks</a>
            <a class="tab" href="#teaching">Teaching</a>
          </div>

          <h1 class="text-3xl font-bold" id="cv">CV Highlights</h1>
          <div class="divider"></div>
          <CvCard />

          <h1 class="text-3xl font-bold" id="projects">Projects</h1>
          <div class="divider"></div>
          <Paper v-for="paper in papers" :title="paper.title" :abstract="paper.abstract" :link="paper.link" />

          <h1 class="text-3xl font-bold" id="papers">Papers and Talks</h1>
          <div class="divider"></div>
          <PaperImage v-for="paper in papers" :title="paper.title" :abstract="paper.abstract" :link="paper.link"
            :image="paper.image" />


          <h1 class="text-3xl font-bold" id="teaching">Teaching</h1>
          <div class="divider"></div>
          <Paper v-for="item in teaching" :title="item.title" :abstract="item.abstract" :link="item.link" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Paper from "./components/Paper.vue";
import CvCard from "./components/CvCard.vue";
import PaperImage from "./components/PaperImage.vue";
import * as papers from "./assets/papers/papers.json"
import * as talks from "./assets/papers/talks.json"
import * as teaching from "./assets/papers/teaching.json"

export default {
  components: {
    Hero,
    Paper,
    CvCard,
    PaperImage,
  },
  data() {
    return {
      papers: papers.items,
      talks: talks.items,
      teaching: teaching.items
    }
  }
};
</script>

<style></style>