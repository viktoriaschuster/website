
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
          <ul class="section-list" aria-label="Papers list">
            <li v-for="paper in papers" :key="paper.title" class="section-item">
              <h2 class="entry-title">{{ paper.title }}</h2>
              <p class="entry-meta">{{ paperMeta(paper) }}</p>
              <p v-if="paper.description || paper.abstract" class="entry-description">
                {{ paper.description || paper.abstract }}
              </p>
              <div class="entry-links" v-if="paper.paper || paper.github">
                <a v-if="paper.paper" :href="paper.paper" class="entry-link">Read</a>
                <a v-if="paper.github" :href="paper.github" class="entry-link">Code</a>
              </div>
            </li>
          </ul>

          <h1 class="text-3xl font-bold pt-5" id="talks">Talks & Posters</h1>
          <div class="divider"></div>
          <ul class="section-list" aria-label="Talks and posters list">
            <li v-for="talk in talks" :key="`${talk.event}-${talk.year}`" class="section-item">
              <h2 class="entry-title">{{ talk.event }}</h2>
              <p class="entry-meta">{{ talkMeta(talk) }}</p>
              <p v-if="talk.description || talk.abstract" class="entry-description">
                {{ talk.description || talk.abstract }}
              </p>
              <div class="entry-links" v-if="talk.link">
                <a :href="talk.link" class="entry-link">Visit</a>
              </div>
            </li>
          </ul>

          <h1 class="text-3xl font-bold pt-5" id="teaching">Teaching</h1>
          <div class="divider"></div>
          <ul class="section-list" aria-label="Teaching list">
            <li v-for="item in teaching" :key="item.title" class="section-item">
              <h2 class="entry-title">{{ item.title }}</h2>
              <p class="entry-meta">Teaching</p>
              <p class="entry-description">{{ item.description }}</p>
              <div class="entry-links" v-if="item.link">
                <a :href="item.link" class="entry-link">Visit</a>
              </div>
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
  },
  methods: {
    paperMeta(paper) {
      if (paper.journal) return paper.journal;
      if (paper.venue) return paper.venue;
      return paper.paper && paper.paper.includes("arxiv.org") ? "arXiv preprint" : "Publication";
    },
    talkMeta(talk) {
      return `${talk.year} \u2022 ${this.capitalize(talk.type)}`;
    },
    capitalize(value) {
      if (!value) return "";
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
.section-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.5rem;
}

.section-item {
  display: grid;
  gap: 0.4rem;
}

.entry-title {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.35;
  font-weight: 700;
}

.entry-meta {
  margin: 0;
  color: #6b7280;
  font-size: 0.95rem;
  font-style: italic;
}

.entry-description {
  margin: 0;
  color: #374151;
  line-height: 1.7;
}

.entry-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.entry-link {
  color: #1f2937;
  font-size: 0.95rem;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.entry-link:hover {
  color: #111827;
}
</style>