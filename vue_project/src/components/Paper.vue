<template>
  <div class="card my-4 lg:card-side bg-base-100 shadow-xl">
    <!--<figure><img class="max-w-md hover:max-w-lg" src="../assets/IMG_1467_edited copy.jpeg" alt="Movie" /></figure>-->
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
      </h2>
      <p>
        {{ abstract }}
      </p>
      <div class="card-actions justify-end">
        <a
          :href="link">
          <button class="btn btn-primary">Visit
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "abstract",
    "link"
  ]
};
</script>

<style></style>
