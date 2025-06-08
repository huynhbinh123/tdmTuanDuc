<template>
  <UContainer>
    <div class="border-b-2 border-gray-300">
      <div v-for="(name, index) in categoryMenu" :key="index">
        <div class="mt-10">
          <h2 class="border-b-3 border-orange-500">
            <span
              class="text-white bg-orange-500 font-bold text-xl p-2 pb-0 rounded-t uppercase border-b-3 border-orange-500 inline-block"
            >
              {{ name.name }}
            </span>
          </h2>
        </div>

        <!--  sản phẩm -->

        <!-- bai viet moi nhat -->
        <div v-if="index == 0" class="my-4">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div
              v-if="name.items[0]"
              class="h-full shadow hover:shadow-lg transition group cursor-pointer relative rounded overflow-hidden"
            >
              <img
                :src="name.items[0].img"
                class="w-full h-full object-cover"
                alt=""
              />
              <NuxtLink :to="`blog/${name.items[0].slug}`"
                ><div
                  class="absolute inset-0 bg-black/40 text-white flex flex-col justify-end p-4"
                >
                  <p
                    class="text-lg font-semibold leading-snug line-clamp-2 group-hover:text-orange-500 transition"
                  >
                    {{ name.items[0].title }}
                  </p>
                  <div class="flex items-center text-sm mt-2">
                    <UIcon
                      name="material-symbols:calendar-today"
                      class="text-white mr-1"
                    />
                    <span>{{ name.items[0].currentTime }}</span>
                  </div>
                </div></NuxtLink
              >
            </div>

            <div class="flex flex-col gap-4">
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div
                  v-for="(item, i) in name.items.slice(1, 3)"
                  :key="i"
                  class="bg-white p-2 border rounded shadow hover:shadow-lg transition group cursor-pointer relative"
                >
                  <NuxtLink :to="`/blog/${item.slug}`"
                    ><div class="relative w-full h-62 rounded overflow-hidden">
                      <img
                        :src="item.img"
                        class="w-full h-full object-cover"
                        alt=""
                      />
                      <div
                        class="absolute inset-0 bg-black/40 p-2 flex flex-col justify-end"
                      >
                        <p
                          class="text-white font-semibold line-clamp-2 group-hover:text-orange-500"
                        >
                          {{ item.title }}
                        </p>
                        <div class="flex items-center">
                          <UIcon
                            name="material-symbols:calendar-today"
                            class="text-white mr-1"
                          />
                          <p class="text-white text-sm mt-1">
                            {{ item.currentTime }}
                          </p>
                        </div>
                      </div>
                    </div></NuxtLink
                  >
                </div>
              </div>
              <div
                v-if="name.items[3]"
                class="bg-white p-2 border rounded shadow hover:shadow-lg transition group cursor-pointer relative"
              >
                <NuxtLink :to="`/blog/${name.items[3].slug}`"
                  ><div class="relative w-full h-62 rounded overflow-hidden">
                    <img
                      :src="name.items[3].img"
                      class="w-full h-full object-cover"
                      alt=""
                    />
                    <div
                      class="absolute inset-0 bg-black/40 p-2 flex flex-col justify-end"
                    >
                      <p
                        class="text-white font-semibold line-clamp-2 group-hover:text-orange-500"
                      >
                        {{ name.items[3].title }}
                      </p>
                      <div class="flex items-center">
                        <UIcon
                          name="material-symbols:calendar-today"
                          class="text-white mr-1"
                        />
                        <p class="text-white text-sm mt-1">
                          {{ name.items[3].currentTime }}
                        </p>
                      </div>
                    </div>
                  </div></NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
        <!-- cac thanh phan khac -->
        <div
          v-if="index >= 1"
          class="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-4"
        >
          <div
            v-for="(item, i) in name.items"
            :key="i"
            class="bg-white p-2 border rounded shadow hover:shadow-lg transition group cursor-pointer"
          >
            <NuxtLink :to="`/blog/${item.slug}`"
              ><img
                :src="item.img"
                alt=""
                class="w-full h-40 object-cover mb-2 group-hover:border border-orange-500"
              />
              <p
                class="text-black font-semibold line-clamp-2 group-hover:text-orange-500"
              >
                {{ item.title }}
              </p>
              <div class="flex items-center">
                <UIcon
                  name="material-symbols:calendar-clock-outline"
                  size="20"
                  class="text-gray-500 mr-2"
                />
                <span class="text-gray-600 text-sm">{{
                  item.currentTime
                }}</span>
              </div></NuxtLink
            >
          </div>
        </div>

        <div
          v-if="index >= 1"
          class="flex justify-center items-center group cursor-pointer my-8"
        >
          <NuxtLink
            :to="`/blog/category/${name.slug}`"
            class="text-orange-500 group-hover:text-orange-400 font-bold underline"
          >
            Xem thêm bài viết về: {{ name.name }}
          </NuxtLink>
          <UIcon
            name="material-symbols:chevron-right"
            size="20"
            class="text-orange-500 group-hover:text-orange-400 transition transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import { useMockData } from "~/composables/useMockData";
definePageMeta({
  layout: "blog",
});
const { categoryMenu } = useMockData();
import { useRoute } from "vue-router";
const route = useRoute();
</script>
