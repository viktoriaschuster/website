
<template>
  <div class="w-full p-4">
    <main role="main" class="w-full flex flex-col content-center justify-center">
      <div class="w-full sm:w-1/2 lg:w-2/3 bg-gray-50 rounded-xl m-auto">
        <div class="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <Hero />
          <div class="tabs justify-center">
            <a class="tab" href="#projects">Current projects</a>
            <a class="tab" href="#papers">Papers</a>
            <a class="tab" href="#talks">Talks & Posters</a>
            <a class="tab" href="#teaching">Teaching</a>
          </div>

          <h1 class="text-3xl font-bold pt-5" id="projects">Current projects</h1>
          <div class="divider"></div>
          <ul class="space-y-5">
            <li v-for="project in projects" :key="project.title" class="border-b border-gray-200 pb-4">
              <h2 class="text-xl font-semibold">{{ project.title }}</h2>
              <p class="mt-1 text-gray-700">{{ project.description }}</p>
              <a
                v-if="project.preprint"
                :href="project.preprint"
                class="link link-primary mt-2 inline-block"
              >
                Preprint
              </a>
            </li>
          </ul>

          <h1 class="text-3xl font-bold pt-5" id="papers">Papers</h1>
          <div class="divider"></div>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Paper</th>
                  <th>GitHub</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="paper in papers" :key="paper.title">
                  <td>{{ paper.title }}</td>
                  <td>
                    <a v-if="paper.paper" :href="paper.paper" class="link link-primary">Link</a>
                    <span v-else>-</span>
                  </td>
                  <td>
                    <a v-if="paper.github" :href="paper.github" class="link link-primary">Repo</a>
                    <span v-else>-</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 class="text-3xl font-bold pt-5" id="talks">Talks & Posters</h1>
          <div class="divider"></div>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Year</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="talk in talks" :key="`${talk.event}-${talk.year}`">
                  <td>{{ talk.event }}</td>
                  <td>{{ talk.year }}</td>
                  <td class="capitalize">{{ talk.type }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 class="text-3xl font-bold pt-5" id="teaching">Teaching</h1>
          <div class="divider"></div>
          <ul class="space-y-5">
            <li v-for="item in teaching" :key="item.title" class="border-b border-gray-200 pb-4">
              <h2 class="text-xl font-semibold">{{ item.title }}</h2>
              <p class="mt-1 text-gray-700">{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import * as projects from "./assets/papers/projects.json"
import * as papers from "./assets/papers/papers.json"
import * as talks from "./assets/papers/talks.json"
import * as teaching from "./assets/papers/teaching.json"

export default {
  components: {
    Hero,
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