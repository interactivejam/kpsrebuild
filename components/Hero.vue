<template>
  <div class="relative bg-hero bg-cover bg-center bg-no-repeat">
      <div
        class="container mx-auto py-48"
      >
        <div class="max-w-xl sm:text-left">
          <h1 class="text-3xl sm:text-5xl text-white">
            <slot />
          </h1>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  props: {},
  computed: {},
}
</script>