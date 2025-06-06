<template>
  <UContainer>
    <!-- Lg -->
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
                    name="material-symbols:keyboard-arrow-down"
                    size="30"
                  />
                  {{ child.name }}
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
        <div class="col-span-4">
          <h2
            class="text-2xl font-semibold text-black border-b border-gray-200 py-4"
          >
            {{ selectedCategory }}
          </h2>
          <p class="text-black">
            Chậu rửa chén (bồn rửa bát) là khu vực hoạt động gần như liên tục
            trong căn bếp, không chỉ phục vụ rửa thực phẩm, chén đĩa mà còn ảnh
            hưởng đến thẩm mỹ và sự tiện nghi chung. Hafele – thương hiệu danh
            tiếng toàn cầu đến từ Đức, nổi tiếng với các giải pháp phụ kiện nội
            thất, thiết bị bếp và gia dụng chất lượng cao- mang đến dòng sản
            phẩm chậu rửa chén đáp ứng những tiêu chuẩn khắc khe về độ bền, tính
            năng và thiết kế tinh tế.
          </p>
        </div>
      </div>
    </div>

    <!-- Moblie -->
    <div class="lg:hidden block">
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
        <div>
          <h2
            class="text-2xl font-semibold text-black border-b border-gray-200 py-4"
          >
            {{ selectedCategory }}
          </h2>
          <p class="text-black">
            Chậu rửa chén (bồn rửa bát) là khu vực hoạt động gần như liên tục
            trong căn bếp, không chỉ phục vụ rửa thực phẩm, chén đĩa mà còn ảnh
            hưởng đến thẩm mỹ và sự tiện nghi chung. Hafele – thương hiệu danh
            tiếng toàn cầu đến từ Đức, nổi tiếng với các giải pháp phụ kiện nội
            thất, thiết bị bếp và gia dụng chất lượng cao- mang đến dòng sản
            phẩm chậu rửa chén đáp ứng những tiêu chuẩn khắc khe về độ bền, tính
            năng và thiết kế tinh tế.
          </p>
        </div>
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
import { useMockData } from "~/composables/useMockData";

const { categoryMenu, Categories } = useMockData();
const hoverIndex = ref(null);
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
const expandedIndexMobile = ref(null);
const expandedIndex = ref(null);

function toggleExpand(index) {
  expandedIndex.value = expandedIndex.value === index ? null : index;
}
</script>
