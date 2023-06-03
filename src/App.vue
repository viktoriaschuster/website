
<template>
  <div class="w-full p-4">
    <main
      role="main"
      class="w-full flex flex-col h-screen content-center justify-center"
    >
      <div class="w-full sm:w-1/2 lg:w-2/3 bg-gray-50 rounded-xl m-auto">
        <div class="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <HelloWorld />
          <Paper />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Paper from "./components/Paper.vue";

export default {
  components: {
    HelloWorld,
    Paper,
  },
};
</script>

<style>
</style>