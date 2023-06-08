
<template>
  <div class="w-full p-4">
    <main role="main" class="w-full flex flex-col content-center justify-center">
      <div class="w-full sm:w-1/2 lg:w-2/3 bg-gray-50 rounded-xl m-auto">
        <div class="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <Hero />
          <div class="tabs justify-center">
            <a class="tab" href="#projects">New projects</a>
            <a class="tab" href="#papers">Papers</a>
            <a class="tab" href="#talks">Posters & Talks</a>
            <a class="tab" href="#teaching">Teaching</a>
            <a class="tab" href="#cv">CV</a>
          </div>

          <h1 class="text-3xl font-bold pt-5" id="projects">New projects</h1>
          <div class="divider"></div>
          <Paper v-for="project in projects" :title="project.title" :abstract="project.abstract" :link="project.link"/>

          <h1 class="text-3xl font-bold pt-5" id="papers">Papers</h1>
          <div class="divider"></div>
          <PaperImage v-for="paper in papers" :title="paper.title" :abstract="paper.abstract" :link="paper.link" :image="paper.image" />

          <h1 class="text-3xl font-bold pt-5" id="talks">Posters and Talks</h1>
          <div class="divider"></div>
          <Talk v-for="talk in talks" :title="talk.title" :date="talk.date" :abstract="talk.abstract" :link="talk.link"
            :image="talk.image" />

          <h1 class="text-3xl font-bold pt-5" id="teaching">Teaching</h1>
          <div class="divider"></div>
          <Paper v-for="item in teaching" :title="item.title" :abstract="item.abstract" :link="item.link" />

          <h1 class="text-3xl font-bold pt-5" id="cv">CV</h1>
          <div class="divider"></div>
          <!--<CvCard />-->
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
import Talk from "./components/Talk.vue";
import * as projects from "./assets/papers/projects.json"
import * as papers from "./assets/papers/papers.json"
import * as talks from "./assets/papers/talks.json"
import * as teaching from "./assets/papers/teaching.json"

export default {
  components: {
    Hero,
    Paper,
    PaperImage,
    CvCard,
    Talk,
  },
  data() {
    return {
      papers: papers.items,
      talks: talks.items,
      teaching: teaching.items,
      projects: projects.items
    }
  }
};
</script>

<style></style>