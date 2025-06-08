<template>
  <UContainer>
    <!-- Lg -->
    <div class="lg:block hidden">
      <div class="grid grid-cols-6 gap-16 mt-6">
        <div class="col-span-2">
          <div>
            <div
              v-for="(name, index) in Categories"
              :key="index"
              class="mb-4 cursor-pointer"
            >
              <h3
                class="text-black text-lg font-medium uppercase py-4 border-t-4 border-orange-600"
              >
                {{ name.name }}
              </h3>

              <ul
                v-if="name.name === 'bài viết mới'"
                class="list-disc pl-5 space-y-1 text-orange-500"
              >
                <li
                  v-for="(child, index) in name.child"
                  :key="index"
                  class="text-orange-500 hover:text-gray-700 leading-snug"
                >
                  <NuxtLink
                    :to="`/blog/${child.slug}`"
                    class="text-inherit no-underline hover:text-gray-700 line-clamp-2"
                  >
                    {{ child.name }}
                  </NuxtLink>
                </li>
              </ul>

              <ul v-else class="space-y-1">
                <li
                  v-for="(child, index) in name.child"
                  :key="index"
                  class="text-orange-500 hover:text-gray-700"
                >
                  <NuxtLink
                    :to="`/blog/category/${child.slug}`"
                    class="flex items-center gap-2"
                  >
                    <UIcon
                      name="material-symbols:keyboard-arrow-down"
                      size="20"
                      class="text-orange-500"
                      @click.stop.prevent="toggleExpand(index)"
                    />
                    <span>{{ child.name }}</span>
                  </NuxtLink>

                  <!-- Sub menu -->
                  <Transition name="slide-down" mode="out-in">
                    <ul
                      v-if="
                        child.child &&
                        child.child.length &&
                        expandedIndex === index
                      "
                      class="pl-4 space-y-1 overflow-hidden"
                    >
                      <li
                        v-for="(sub, subIndex) in child.child"
                        :key="subIndex"
                        class="text-gray-500 hover:text-orange-500"
                      >
                        <NuxtLink
                          :to="`/blog/category/${sub.slug}`"
                          class="ml-6"
                        >
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
          <UCollapsible class="flex flex-col gap-2 w-full">
            <UButton
              label="Viết bình luận"
              class="bg-orange-500 text-white uppercase text-xl cursor-pointer hover:bg-orange-400 line-clamp-none mx-auto"
            />

            <template #content>
              <form class="space-y-4 p-4" @submit.prevent="submitReview">
                <p class="text-black text-xl font-bold">Để lại một bình luận</p>
                <p class="text-gray-500 text-sm">
                  Email của bạn sẽ không được hiển thị công khai. Các trường bắt
                  buộc được đánh dấu *
                </p>
                <!-- Nội dung bình luận -->
                <div>
                  <label class="font-medium text-sm text-black"
                    >Đánh giá / Bình luận<span class="text-red-500"
                      >*</span
                    ></label
                  >
                  <textarea
                    v-model="form.comment"
                    rows="6"
                    class="w-full border border-gray-300 p-2 rounded resize-none text-black hover:border-orange-400 focus:border-orange-400 focus:outline-none"
                    placeholder="Nhập đánh giá hoặc bình luận của bạn"
                  ></textarea>
                  <p v-if="errors.comment" class="text-red-500 text-sm mt-1">
                    {{ errors.comment }}
                  </p>
                </div>
                <!-- Tên và Email -->
                <div class="flex flex-col gap-2">
                  <label class="font-medium text-sm text-black"
                    >Tên<span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="form.name"
                    type="text"
                    class="border border-gray-300 hover:border-orange-400 focus:border-orange-400 focus:outline-none p-2 rounded w-full text-black"
                    placeholder="Nhập tên của bạn"
                  />
                  <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                    {{ errors.name }}
                  </p>

                  <label class="font-medium text-sm text-black"
                    >E-mail<span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    class="border border-gray-300 hover:border-orange-400 focus:border-orange-400 focus:outline-none p-2 rounded w-full text-black"
                    placeholder="Nhập email của bạn"
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                    {{ errors.email }}
                  </p>
                  <label class="font-medium text-sm text-black"
                    >Trang web</label
                  >
                  <input
                    v-model="form.website"
                    type="text"
                    class="border border-gray-300 hover:border-orange-400 focus:border-orange-400 focus:outline-none p-2 rounded w-full text-black"
                  />
                </div>

                <!-- Nút hành động -->
                <div class="flex justify-end gap-2 mt-4">
                  <UButton
                    type="submit"
                    class="bg-orange-500 text-white font-bold cursor-pointer hover:bg-orange-600 focus:border-orange-400 focus:outline-none transition-colors p-3"
                    >Gửi
                  </UButton>
                </div>
              </form>
            </template>
          </UCollapsible>
        </div>
      </div>
    </div>

    <!-- Moblie -->
    <div class="lg:hidden block">
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
          <UCollapsible class="flex flex-col gap-2 w-full my-4">
            <UButton
              label="Viết bình luận"
              class="bg-orange-500 text-white uppercase text-xl cursor-pointer hover:bg-orange-400 line-clamp-none mx-auto"
            />

            <template #content>
              <form class="space-y-4 p-4" @submit.prevent="submitReview">
                <p class="text-black text-xl font-bold">Để lại một bình luận</p>
                <p class="text-gray-500 text-sm">
                  Email của bạn sẽ không được hiển thị công khai. Các trường bắt
                  buộc được đánh dấu *
                </p>
                <!-- Nội dung bình luận -->
                <div>
                  <label class="font-medium text-sm text-black"
                    >Đánh giá / Bình luận<span class="text-red-500"
                      >*</span
                    ></label
                  >
                  <textarea
                    v-model="form.comment"
                    rows="6"
                    class="w-full border border-gray-300 p-2 rounded resize-none text-black hover:border-orange-400 focus:border-orange-400 focus:outline-none"
                    placeholder="Nhập đánh giá hoặc bình luận của bạn"
                  ></textarea>
                  <p v-if="errors.comment" class="text-red-500 text-sm mt-1">
                    {{ errors.comment }}
                  </p>
                </div>
                <!-- Tên và Email -->
                <div class="flex flex-col gap-2">
                  <label class="font-medium text-sm text-black"
                    >Tên<span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="form.name"
                    type="text"
                    class="border border-gray-300 hover:border-orange-400 focus:border-orange-400 focus:outline-none p-2 rounded w-full text-black"
                    placeholder="Nhập tên của bạn"
                  />
                  <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                    {{ errors.name }}
                  </p>

                  <label class="font-medium text-sm text-black"
                    >E-mail<span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    class="border border-gray-300 hover:border-orange-400 focus:border-orange-400 focus:outline-none p-2 rounded w-full text-black"
                    placeholder="Nhập email của bạn"
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                    {{ errors.email }}
                  </p>
                  <label class="font-medium text-sm text-black"
                    >Trang web:</label
                  >
                  <input
                    v-model="form.website"
                    type="text"
                    class="border border-gray-300 hover:border-orange-400 focus:border-orange-400 focus:outline-none p-2 rounded w-full text-black"
                  />
                </div>

                <!-- Nút hành động -->
                <div class="flex justify-end gap-2 mt-4">
                  <UButton
                    type="submit"
                    class="bg-orange-500 text-white font-bold cursor-pointer hover:bg-orange-600 focus:border-orange-400 focus:outline-none transition-colors p-3"
                    >Gửi
                  </UButton>
                </div>
              </form>
            </template>
          </UCollapsible>
        </div>
        <div>
          <div
            v-for="(name, index) in Categories"
            :key="index"
            class="mb-4 cursor-pointer"
          >
            <h3
              class="text-black text-lg font-medium uppercase py-4 border-t-4 border-orange-600"
            >
              {{ name.name }}
            </h3>

            <ul
              v-if="name.name === 'bài viết mới'"
              class="list-disc pl-5 space-y-1 text-orange-500"
            >
              <li
                v-for="(child, index) in name.child"
                :key="index"
                class="text-orange-500 hover:text-gray-700 leading-snug"
              >
                <NuxtLink
                  :to="`/blog/${child.slug}`"
                  class="text-inherit no-underline hover:text-gray-700 line-clamp-2"
                >
                  {{ child.name }}
                </NuxtLink>
              </li>
            </ul>

            <ul v-else class="space-y-1">
              <li
                v-for="(child, index) in name.child"
                :key="index"
                class="text-orange-500 hover:text-gray-700"
              >
                <NuxtLink
                  :to="`/blog/category/${child.slug}`"
                  class="flex items-center gap-2"
                >
                  <UIcon
                    name="material-symbols:keyboard-arrow-down"
                    size="20"
                    class="text-orange-500"
                    @click.stop.prevent="toggleExpand(index)"
                  />
                  <span>{{ child.name }}</span>
                </NuxtLink>

                <!-- Sub menu -->
                <Transition name="slide-down" mode="out-in">
                  <ul
                    v-if="
                      child.child &&
                      child.child.length &&
                      expandedIndex === index
                    "
                    class="pl-4 space-y-1 overflow-hidden"
                  >
                    <li
                      v-for="(sub, subIndex) in child.child"
                      :key="subIndex"
                      class="text-gray-500 hover:text-orange-500"
                    >
                      <NuxtLink :to="`/blog/category/${sub.slug}`" class="ml-6">
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
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useMockData } from "~/composables/useMockData";

interface CategoryItem {
  name: string;
  slug: string;
  child?: CategoryItem[];
}

const { categoryMenu, Categories } = useMockData();

const hoverIndex = ref<number | null>(null);
const route = useRoute();

const selectedCategory = computed<string>(() => {
  const path = route.path;
  const slug = path.split("/").filter(Boolean).pop();

  function findCategoryName(menu: CategoryItem[]): string {
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

const expandedIndexMobile = ref<number | null>(null);
const expandedIndex = ref<number | null>(null);

onMounted(() => {
  for (let i = 0; i < Categories.length; i++) {
    const group = Categories[i];
    for (let j = 0; j < (group.child?.length || 0); j++) {
      const child = group.child![j];

      const isMatch =
        child.name === selectedCategory.value ||
        (child.child &&
          child.child.some((sub) => sub.name === selectedCategory.value));

      if (isMatch) {
        expandedIndex.value = j;
        expandedIndexMobile.value = j;
        return;
      }
    }
  }
});

function toggleExpand(index: number) {
  expandedIndex.value = expandedIndex.value === index ? null : index;
}

definePageMeta({
  layout: "blog",
});

const isOpen = ref<boolean>(false);

const form = ref({
  name: "",
  email: "",
  website: "",
  comment: "",
});

interface Errors {
  name?: string;
  email?: string;
  comment?: string;
}

const errors = ref<Errors>({});

const submitReview = () => {
  errors.value = {};

  if (!form.value.name.trim()) {
    errors.value.name = "Vui lòng nhập tên";
  }

  if (!form.value.email.trim()) {
    errors.value.email = "Vui lòng nhập email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = "Email không hợp lệ";
  }

  if (!form.value.comment.trim()) {
    errors.value.comment = "Vui lòng nhập bình luận";
  }

  if (Object.keys(errors.value).length === 0) {
    console.log("Dữ liệu người dùng nhập:", form.value);
    // Reset form nếu cần:
    form.value = {
      name: "",
      email: "",
      website: "",
      comment: "",
    };
  }
};
</script>
