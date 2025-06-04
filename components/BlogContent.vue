<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in allItems"
        :key="index"
        class="border-b border-gray-200 mb-10"
      >
        <div class="flex items-center justify-center my-6">
          <img
            :src="item.img"
            alt=""
            class="w-[250px] h-[150px] object-contain mr-8"
          />
          <div>
            <h1 class="text-black font-medium py-2">{{ item.name }}</h1>
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
