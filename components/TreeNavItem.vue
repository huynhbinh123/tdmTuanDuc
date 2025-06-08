<template>
  <div>
    <div class="cursor-pointer flex items-center gap-1" @click="toggle">
      <NuxtLink :to="`/blog/category/${item.slug}`" @click.stop>
        <span class="text-orange-500 hover:text-gray-500">{{ item.name }}</span>
      </NuxtLink>
      <span v-if="item.child" class="text-gray-500 text-sm select-none">
        {{ isOpen ? "▲" : "▼" }}
      </span>
    </div>

    <transition name="slide">
      <ul v-show="isOpen" class="ms-4 mt-1 space-y-1">
        <li v-for="(nav, index) in item.child" :key="index">
          <TreeNavItem
            :item="nav"
            :expandedSlug="expandedSlug"
            @toggle="$emit('toggle', $event)"
          />
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Item {
  name: string;
  slug: string;
  child?: Item[];
}

const props = defineProps<{
  item: Item;
  expandedSlug: string | null;
}>();

const emit = defineEmits(["toggle"]);

const isOpen = ref(false);

watch(
  () => props.expandedSlug,
  (newVal) => {
    // Mở submenu nếu slug trùng, đóng nếu không
    isOpen.value = newVal === props.item.slug;
  },
  { immediate: true }
);

function toggle() {
  // Nếu đã mở thì đóng, ngược lại mở
  const newSlug = isOpen.value ? null : props.item.slug;
  emit("toggle", newSlug);
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  max-height: 1000px; /* lớn hơn chiều cao thực tế */
}
</style>
