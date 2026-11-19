<template>
  <header class="hero" id="top">
    <div class="hero-text">
      <h1>Viktoria Schuster</h1>
      <p class="role">Postdoctoral Fellow at MIT</p>
      <p class="bio">
        Hi, my name is Viki, and I build machine learning methods that learn interpretable
        representations of multi-modal data in the fields of biology and health.
      </p>
      <p class="bio">
        I completed my PhD in the Krogh group at the University of Copenhagen in January 2024,
        where I stayed on as a Postdoc until the end of 2024. Since then I have been a Postdoc at
        the Eric and Wendy Schmidt Center at the Broad Institute of MIT and Harvard under Caroline
        Uhler, and am now also an MIT Postdoctoral Fellow sponsored by a grant from the Novo Nordisk
        Foundation. Glad you found my website; below you can find some highlights of my research
        and teaching activities.
      </p>
      <div class="interests">
        <p class="label">Research interests</p>
        <p v-for="group in interests" :key="group.name" class="keywords" :class="group.tone">
          <span class="group">{{ group.name }}</span>
          <span class="kws"><span v-for="topic in group.topics" :key="topic" class="kw">{{ topic }}</span></span>
        </p>
      </div>
      <ul class="pills" aria-label="Contact and profiles">
        <li>
          <a href="mailto:vschu211@mit.edu">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm.5-.25 8.5 6.5 8.5-6.5"/></svg>
            vschu211@mit.edu
          </a>
        </li>
        <li>
          <a href="https://scholar.google.com/citations?user=zV6sROUAAAAJ">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3 1.5 10.2 5 12.6V17h.1A7 7 0 0 1 12 12a7 7 0 0 1 6.9 5H19v-4.4l3.5-2.4L12 3Zm0 10.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z"/></svg>
            Google Scholar
          </a>
        </li>
        <li>
          <a href="https://github.com/viktoriaschuster">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
            GitHub
          </a>
        </li>
        <li>
          <a href="https://twitter.com/viki_schu">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.18h1.7L7.4 4.73H5.57l11.1 14.45Z"/></svg>
            @viki_schu
          </a>
        </li>
      </ul>
    </div>
    <figure class="portrait">
      <img :src="photo" alt="Portrait of Viktoria Schuster" width="220" height="220" />
    </figure>
  </header>
</template>

<script>
import photo from "../assets/viki.jpeg";

export default {
  props: { interests: { type: Array, default: () => [] } },
  data() {
    return { photo };
  }
};
</script>
