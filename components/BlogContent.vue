<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in allItems"
        :key="index"
        class="border-b border-gray-200 mb-10"
      >
        <div class="flex flex-col lg:flex-row my-6 gap-4">
          <div
            class="w-full lg:w-[250px] aspect-[5/3] shrink-0 overflow-hidden"
          >
            <img :src="item.img" alt="" class="w-full h-full object-cover" />
          </div>

          <div class="flex flex-col justify-start pl-4">
            <h1
              class="text-black font-medium py-2 hover:text-orange-500 transition duration-300"
            >
              <NuxtLink :to="`/blog/${item.slug}`">{{ item.name }}</NuxtLink>
            </h1>
            <h1 class="text-gray-500 py-2">
              {{ item.desc }}
            </h1>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  category: String,
  allItems: Array,
});
</script>
