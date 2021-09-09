<!-- Please remove this file from your project -->
<template>
  <div class="flex flex-row">
    <div class="flex flex-4 bg-red-50">
      <img class="h-screen w-full" src="https://images.unsplash.com/photo-1586006348294-4a72699f75cc"/>
    </div>
    <div class="flex flex-6 h-full">
      <div class="nav flex flex-1">
        <ul>
          <li>
            <NuxtLink class="link" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/about">About Me</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/">JOURNEYS</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/">VIDEO</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/">PHOTOS</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/">BLOG</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/">Contact</NuxtLink>
          </li>

        </ul>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

export default {
  components: {  },

  data() {
    return {}
  },
}
</script>
