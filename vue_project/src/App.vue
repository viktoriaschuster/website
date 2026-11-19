<template>
  <nav class="topbar" aria-label="Sections">
    <div class="topbar-inner">
      <a class="brand" href="#top" aria-label="Viktoria Schuster, back to top">
        <svg class="brand-icon" viewBox="0 0 224 224" aria-hidden="true">
          <defs>
            <radialGradient id="vs-g1" cx="112" cy="112" fx="93.99" fy="80.02" r="151.2" gradientUnits="userSpaceOnUse">
              <stop offset=".27" stop-color="#fff" stop-opacity="0" />
              <stop offset=".55" stop-color="#caccd0" stop-opacity=".19" />
              <stop offset=".81" stop-color="#3f4756" stop-opacity=".7" />
            </radialGradient>
          </defs>
          <circle cx="112" cy="112" r="112" fill="#436c6e" />
          <circle cx="112" cy="112" r="112" fill="url(#vs-g1)" />
          <text x="36" y="154.5" fill="#fff" font-family="Futura, 'Century Gothic', 'Avenir Next', sans-serif" font-weight="500" font-size="110" letter-spacing="3">VS</text>
        </svg>
        <span class="brand-name">Viktoria Schuster</span>
      </a>
      <div class="nav-links">
        <a v-if="projects.length" href="#projects">Projects</a>
        <a href="#publications">Publications</a>
        <a href="#talks">Talks</a>
        <a href="#teaching">Teaching</a>
      </div>
    </div>
  </nav>

  <main class="page">
    <Hero :interests="interests" />

    <section v-if="projects.length" id="projects" class="section">
      <h2>Current projects</h2>
      <ul class="projects">
        <li v-for="project in projects" :key="project.title">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a v-if="project.preprint" class="link-pill" :href="project.preprint">Preprint</a>
        </li>
      </ul>
    </section>

    <section id="publications" class="section">
      <h2>Publications</h2>
      <ol class="pubs">
        <li v-for="paper in papers" :key="paper.title" :id="paperId(paper)" class="pub">
          <button
            v-if="imageFor(paper)"
            class="thumb"
            type="button"
            :aria-label="`Enlarge figure from ${shortTitle(paper.title)}`"
            @click="openFigure(paper)"
          >
            <img :src="imageFor(paper)" alt="" loading="lazy" />
          </button>
          <div v-else class="thumb thumb-empty" aria-hidden="true"></div>

          <div class="pub-body">
            <div class="badges">
              <span class="venue-tag">{{ paper.venueShort }} {{ paper.year }}</span>
              <span v-if="paper.highlight" class="badge" :class="paper.highlight">{{ highlightLabel(paper) }}</span>
            </div>
            <a class="pub-title" :href="paper.links.paper">{{ paper.title }}</a>
            <p class="authors">
              <template v-for="(author, i) in paper.authors" :key="author">
                <span :class="{ me: isMe(author) }">{{ author }}</span><span v-if="i < paper.authors.length - 1">, </span>
              </template>
            </p>
            <p class="venue">{{ paper.venue }}, {{ paper.year }}</p>
            <p class="summary">{{ paper.summary }}</p>
            <div class="links">
              <a v-for="link in linkList(paper)" :key="link.label" class="link-pill" :href="link.href">{{ link.label }}</a>
            </div>
          </div>
        </li>
      </ol>
    </section>

    <section id="talks" class="section">
      <h2>Talks &amp; posters</h2>
      <ul class="cv-list">
        <li v-for="talk in talks" :key="`${talk.event}-${talk.year}`">
          <span class="cv-main">
            <a v-if="talk.link" :href="talk.link">{{ talk.event }}</a>
            <span v-else>{{ talk.event }}</span>
            <span class="kind" :class="talk.type">{{ talk.type }}</span>
          </span>
          <span class="cv-year">{{ talk.year }}</span>
        </li>
      </ul>
    </section>

    <section id="teaching" class="section">
      <h2>Teaching &amp; service</h2>
      <ul class="cv-list detailed">
        <li v-for="item in teaching" :key="item.title">
          <span class="cv-main">
            <span class="cv-title">
              <a v-if="item.link" :href="item.link">{{ item.title }}</a>
              <span v-else>{{ item.title }}</span>
              <span class="kind" :class="item.kind">{{ item.kind }}</span>
            </span>
            <span class="cv-sub">{{ item.role }}<template v-if="item.description">. {{ item.description }}</template></span>
          </span>
          <span class="cv-year">{{ item.years }}</span>
        </li>
      </ul>
    </section>

    <footer class="footer">
      <span>© {{ year }} Viktoria Schuster</span>
      <span>Last updated {{ updated }}</span>
    </footer>
  </main>

  <dialog ref="viewer" class="viewer" @click.self="closeFigure" @close="figure = null">
    <figure v-if="figure">
      <img :src="imageFor(figure)" :alt="`Figure from ${figure.title}`" />
      <figcaption>{{ figure.title }}</figcaption>
    </figure>
    <button type="button" class="close" aria-label="Close figure" @click="closeFigure">×</button>
  </dialog>
</template>

<script>
import Hero from "./components/Hero.vue";
import projects from "./assets/papers/projects.json";
import papers from "./assets/papers/papers.json";
import talks from "./assets/papers/talks.json";
import teaching from "./assets/papers/teaching.json";

const images = import.meta.glob("./assets/images/*", { eager: true, import: "default" });

export default {
  components: { Hero },
  data() {
    return {
      papers: papers.items,
      talks: talks.items,
      teaching: teaching.items,
      projects: projects.items || [],
      figure: null,
      year: new Date().getFullYear(),
      updated: "November 2026",
      interests: [
        {
          name: "Machine learning",
          tone: "ml",
          topics: ["Representation learning", "Mechanistic interpretability", "Multi-modal modeling"]
        },
        {
          name: "Computational biology",
          tone: "bio",
          topics: ["Single-cell biology", "Imaging"]
        }
      ]
    };
  },
  methods: {
    imageFor(paper) {
      return paper.image ? images[`./assets/images/${paper.image}`] : null;
    },
    paperId(paper) {
      return "pub-" + paper.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40).replace(/-$/, "");
    },
    shortTitle(title) {
      const cut = title.indexOf(":");
      return cut > 0 && cut < 40 ? title.slice(0, cut) : title;
    },
    highlightLabel(paper) {
      return paper.highlight === "cited" ? "Most cited" : "New";
    },
    isMe(author) {
      return author.replace("*", "") === "Viktoria Schuster";
    },
    linkList(paper) {
      const labels = { paper: "Paper", pdf: "PDF", code: "Code", openreview: "OpenReview" };
      return Object.entries(paper.links || {})
        .filter(([, href]) => href)
        .map(([key, href]) => ({ label: labels[key] || key, href }));
    },
    openFigure(paper) {
      this.figure = paper;
      this.$refs.viewer.showModal();
    },
    closeFigure() {
      this.$refs.viewer.close();
    }
  }
};
</script>
