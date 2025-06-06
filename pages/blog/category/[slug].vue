<template>
  <UContainer>
    <!-- lg -->
    <div class="lg:block hidden">
      <div
        class="flex items-center justify-between py-4 border-b border-gray-200"
      >
        <NuxtLink to="/">
          <UIcon name="material-symbols:house" class="text-black" size="30" />
        </NuxtLink>

        <div
          v-for="(item, index) in categoryMenu"
          :key="index"
          class="flex items-center gap-2 border-l border-gray-200 pl-5 relative"
          @mouseenter="hoverIndex = index"
          @mouseleave="hoverIndex = null"
        >
          <ul class="flex items-center gap-2 list-none cursor-pointer">
            <li
              :class="[
                'uppercase font-bold text-sm relative',
                hoverIndex === index ? 'text-orange-500' : 'text-black',
              ]"
            >
              <NuxtLink :to="`/${item.slug}`">{{ item.name }}</NuxtLink>
              <span
                v-if="hoverIndex === index"
                class="absolute left-1/2 -bottom-3 transform -translate-x-1/2 z-20"
              >
                <span
                  class="block w-0 h-0 border-l-10 border-r-10 border-b-10 border-l-transparent border-r-transparent border-b-gray-300"
                ></span>
              </span>
              <span class="absolute block w-[180px] -right-8 h-[30px]"></span>
            </li>
            <UIcon
              name="material-symbols:keyboard-arrow-down"
              size="20"
              :class="hoverIndex === index ? 'text-orange-500' : 'text-black'"
            />
          </ul>

          <div
            v-if="hoverIndex === index && item.child && item.child.length"
            class="absolute top-full left-0 w-48 bg-white border border-gray-200 shadow-md rounded z-10 mt-2"
          >
            <ul class="flex flex-col">
              <li
                v-for="(child, cIndex) in item.child"
                :key="cIndex"
                class="rounded border-b border-gray-200"
              >
                <NuxtLink
                  :to="`/${child.slug}`"
                  class="text-black hover:text-orange-500 block p-2"
                >
                  {{ child.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-16 mt-6">
        <div class="col-span-2">
          <div
            v-for="(name, index) in Categories"
            :key="index"
            class="mb-4 cursor-pointer"
          >
            <h3
              style="border-top-color: orange; border-top-width: 3px"
              class="text-black text-2xl font-medium uppercase py-4"
            >
              {{ name.name }}
            </h3>
            <ul>
              <li
                v-for="(child, index) in name.child"
                :key="index"
                class="text-orange-500 hover:text-gray-700"
              >
                <button
                  class="flex items-center w-full"
                  @click="toggleExpand(index)"
                >
                  <NuxtLink
                    :to="
                      name.name === 'bài viết mới'
                        ? `/blog/${child.slug}`
                        : `/blog/category/${child.slug}`
                    "
                    class="flex items-center text-left"
                  >
                    <UIcon
                      v-if="name.name === 'Chuyên mục'"
                      size="30"
                      name="material-symbols:keyboard-arrow-down"
                    />
                    {{ child.name }}
                  </NuxtLink>
                </button>

                <!-- Sub menu with transition -->
                <Transition name="slide-down" mode="out-in">
                  <ul
                    v-if="
                      child.child &&
                      child.child.length &&
                      expandedIndex === index
                    "
                    class="pl-4 mt-1 space-y-1 overflow-hidden"
                  >
                    <li
                      v-for="(sub, subIndex) in child.child"
                      :key="subIndex"
                      class="text-gray-500 hover:text-orange-500"
                    >
                      <NuxtLink :to="`/blog/category/${sub.slug}`">
                        {{ sub.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </Transition>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-span-4">
          <div
            style="border-top-color: orange; border-top-width: 3px"
            class="p-4"
          >
            <h2
              class="text-2xl font-semibold text-orange-500 border-b border-gray-200 py-4"
            >
              Danh mục: {{ selectedCategory }}
            </h2>
            <BlogContent :category="selectedCategory" :allItems="allItems" />
          </div>
        </div>
      </div>
      <div class="flex justify-center py-6">
        <UPagination
          v-model:page="page"
          :total="100"
          :ui="{
            item: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
            first: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
            prev: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
            next: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
            last: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
          }"
        />
      </div>
    </div>
    <!-- Moblie -->
    <div class="lg:hidden block">
      <!-- menu -->
      <UCollapsible class="flex flex-col gap-2 w-full">
        <UButton class="w-full bg-orange-500 text-white">
          <div class="flex items-center justify-center w-full h-full gap-2">
            <UIcon
              name="material-symbols:menu-rounded"
              class="text-white mb-0.5"
              size="20"
            />
            <span>MENU</span>
          </div>
        </UButton>

        <template #content>
          <div class="flex flex-col">
            <NuxtLink
              to="/"
              class="flex items-center py-1 border-y border-gray-300"
            >
              <UIcon
                name="material-symbols:house"
                class="text-black"
                size="30"
              />
              <span class="font-bold text-black">TRANG CHỦ</span>
            </NuxtLink>

            <div
              v-for="(item, index) in categoryMenu"
              :key="index"
              class="relative border-b border-gray-300 py-1"
              @mouseenter="hoverIndex = index"
              @mouseleave="hoverIndex = null"
            >
              <div class="flex items-center justify-between gap-2">
                <ul
                  class="flex items-center justify-between w-full list-none cursor-pointer"
                >
                  <li
                    :class="[
                      'uppercase font-bold relative',
                      hoverIndex === index ? 'text-orange-500' : 'text-black',
                    ]"
                  >
                    <NuxtLink :to="`/${item.slug}`">{{ item.name }}</NuxtLink>
                  </li>
                  <div
                    class="px-2 border-x border-gray-200 flex items-center"
                    @click="
                      expandedIndexMobile =
                        expandedIndexMobile === index ? null : index
                    "
                  >
                    <UIcon
                      name="material-symbols:keyboard-arrow-down"
                      size="30"
                      :class="
                        hoverIndex === index ? 'text-orange-500' : 'text-black'
                      "
                    />
                  </div>
                </ul>
              </div>

              <div
                v-if="
                  expandedIndexMobile === index &&
                  item.child &&
                  item.child.length
                "
                class="bg-white z-10 mt-1"
              >
                <ul class="flex flex-col">
                  <li
                    v-for="(child, cIndex) in item.child"
                    :key="cIndex"
                    class="border-t border-gray-200"
                  >
                    <NuxtLink
                      :to="`/${child.slug}`"
                      class="text-black hover:text-orange-500 block p-2"
                    >
                      {{ child.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </UCollapsible>
      <div class="gap-16 mt-6">
        <!-- noi dung -->
        <div>
          <div
            style="border-top-color: orange; border-top-width: 3px"
            class="p-4"
          >
            <h2
              class="text-2xl font-semibold text-orange-500 border-b border-gray-200 py-4"
            >
              Danh mục: {{ selectedCategory }}
            </h2>
            <BlogContent :category="selectedCategory" :allItems="allItems" />
          </div>
        </div>
        <div class="flex justify-center py-6">
          <UPagination
            v-model:page="page"
            :total="100"
            :ui="{
              item: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
              first: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
              prev: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
              next: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
              last: 'hover:bg-[#f89e1b] hover:text-white cursor-pointer',
            }"
          />
        </div>
        <!-- danh muc -->
        <div>
          <div
            v-for="(name, index) in Categories"
            :key="index"
            class="mb-4 cursor-pointer"
          >
            <h3
              style="border-top-color: orange; border-top-width: 3px"
              class="text-black text-lg font-medium uppercase py-4"
            >
              {{ name.name }}
            </h3>
            <ul>
              <li
                v-for="(child, index) in name.child"
                :key="index"
                class="text-orange-500 hover:text-gray-700"
              >
                <NuxtLink
                  :to="
                    name.name === 'bài viết mới'
                      ? `/blog/${child.slug}`
                      : `/blog/category/${child.slug}`
                  "
                  class="flex items-center gap-2"
                >
                  <UIcon
                    v-if="name.name === 'Chuyên mục'"
                    name="material-symbols:keyboard-arrow-down"
                    size="30"
                    class="text-orange-500"
                    @click.stop.prevent="toggleExpand(index)"
                  />
                  <span>{{ child.name }}</span>
                </NuxtLink>
                <Transition name="slide-down" mode="out-in">
                  <ul
                    v-if="
                      child.child &&
                      child.child.length &&
                      expandedIndex === index
                    "
                    class="pl-4 mt-1 space-y-1 overflow-hidden"
                  >
                    <li
                      v-for="(sub, subIndex) in child.child"
                      :key="subIndex"
                      class="text-gray-500 hover:text-orange-500"
                    >
                      <NuxtLink :to="`/blog/category/${sub.slug}`">
                        {{ sub.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </Transition>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "blog",
});

import { useMockData } from "~/composables/useMockData";

const { categoryMenu, Categories } = useMockData();

const items = computed(() =>
  allItems.filter((item) => item.category === selectedCategory.value)
);
import { useRoute } from "vue-router";
const route = useRoute();
const selectedCategory = computed(() => {
  const path = route.path;
  const slug = path.split("/").filter(Boolean).pop();

  function findCategoryName(menu) {
    for (const group of menu) {
      if (group.child) {
        for (const item of group.child) {
          if (item.slug === slug) return item.name;
          if (item.child) {
            const subItem = item.child.find((sub) => sub.slug === slug);
            if (subItem) return subItem.name;
          }
        }
      }
    }
    return "Không rõ danh mục";
  }

  return findCategoryName(Categories);
});

const allItems = [
  {
    name: "So sánh bồn cầu TOTO MS857 và MS885: Giá và chất lượng khác nhau thế nào?",
    category: "khuyen-mai",
    desc: "MS857 và MS885 đều là dòng bồn cầu cao cấp của TOTO. Vậy sự khác biệt nằm ở đâu?",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2024/07/Thiet-ke-chua-co-ten-9-1.jpg",
    slug: "km-thiet-bi-ve-sinh",
  },
  {
    name: "Top 5 vòi sen INAX bán chạy nhất tháng 6/2025",
    category: "thiet-bi-ve-sinh",
    desc: "Danh sách những mẫu vòi sen được ưa chuộng nhất hiện nay từ INAX.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2024/07/Thiet-ke-chua-co-ten-9-1.jpg",
    slug: "san-pham-inax",
  },
  {
    name: "Bồn rửa mặt Caesar LF5255: Có đáng tiền không?",
    category: "thiet-bi-ve-sinh",
    desc: "Đánh giá chi tiết mẫu lavabo Caesar LF5255, dòng sản phẩm bán chạy của hãng.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2024/07/Thiet-ke-chua-co-ten-9-1.jpg",
    slug: "san-pham-caesar",
  },
  {
    name: "Ưu đãi 20% tất cả sản phẩm INAX trong tháng 6!",
    category: "khuyen-mai",
    desc: "Chương trình khuyến mãi hấp dẫn nhất dành cho khách hàng mua thiết bị INAX.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2024/07/Thiet-ke-chua-co-ten-9-1.jpg",
    slug: "km-inax",
  },
  {
    name: "Cách chọn gạch lát nền chống trơn phù hợp cho nhà tắm",
    category: "kien-thuc-xay-dung",
    desc: "Hướng dẫn chi tiết giúp bạn chọn đúng loại gạch an toàn và đẹp mắt cho phòng tắm.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2024/07/Thiet-ke-chua-co-ten-9-1.jpg",
    slug: "kien-thuc-xay-dung",
  },
  {
    name: "So sánh vòi rửa chén nóng lạnh TOTO và INAX: Nên chọn hãng nào?",
    category: "thiet-bi-nha-bep",
    desc: "Phân tích các yếu tố chất lượng, giá và bảo hành giữa hai thương hiệu lớn.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2024/07/Thiet-ke-chua-co-ten-9-1.jpg",
    slug: "thiet-bi-nha-bep",
  },
];
const hoverIndex = ref(null);
const expandedIndexMobile = ref(null);
const expandedIndex = ref(null);

function toggleExpand(index) {
  expandedIndex.value = expandedIndex.value === index ? null : index;
}
</script>
<style scoped>
.relative > .udropdownmenu {
  z-index: 1000;
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s ease;
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
html,
body {
  background-color: white;
  margin: 0;
  padding: 0;
}
</style>
