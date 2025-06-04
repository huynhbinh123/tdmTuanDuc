<template>
  <UContainer>
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
        <div v-for="(name, index) in Categories" :key="index">
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
              <NuxtLink :to="`/blog/${child.slug}`">
                <UIcon
                  v-if="name.name === 'Chuyên mục'"
                  name="material-symbols:keyboard-arrow-down"
                />
                {{ child.name }}
              </NuxtLink>
              <ul
                v-if="child.child && child.child.length"
                class="pl-4 mt-1 space-y-1"
              >
                <li
                  v-for="(sub, subIndex) in child.child"
                  :key="subIndex"
                  class="text-gray-500 hover:text-orange-500"
                >
                  <NuxtLink :to="`/blog/${sub.slug}`">
                    {{ sub.name }}
                  </NuxtLink>
                </li>
              </ul>
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
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "blog",
});

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

const categoryMenu = [
  {
    name: "Thiết bị vệ sinh",
    slug: "thiet-bi-ve-sinh",
    child: [
      { name: "Bồn cầu", slug: "bon-cau" },
      { name: "Chậu rửa", slug: "chau-rua" },
      { name: "Vòi sen", slug: "voi-sen" },
      { name: "Bồn cầu", slug: "bon-cau" },
      { name: "Chậu rửa", slug: "chau-rua" },
      { name: "Vòi sen", slug: "voi-sen" },
    ],
  },
  {
    name: "Thiết bị bếp",
    slug: "thiet-bi-bep",
    child: [
      { name: "Bếp gas", slug: "bep-gas" },
      { name: "Bếp điện", slug: "bep-dien" },
      { name: "Máy hút mùi", slug: "may-hut-mui" },
    ],
  },
  {
    name: "Thiết bị vệ nước",
    slug: "thiet-bi-ve-nuoc",
    child: [
      { name: "Máy lọc nước", slug: "may-loc-nuoc" },
      { name: "Bình nóng lạnh", slug: "binh-nong-lanh" },
    ],
  },
  {
    name: "Thiết bị khóa cửa",
    slug: "thiet-bi-khoa-cua",
    child: [
      { name: "Khóa vân tay", slug: "khoa-van-tay" },
      { name: "Khóa cơ", slug: "khoa-co" },
    ],
  },
  {
    name: "Báo giá",
    slug: "bao-gia",
    child: [
      { name: "Báo giá thiết bị vệ sinh", slug: "bao-gia-thiet-bi-ve-sinh" },
      { name: "Báo giá thiết bị bếp", slug: "bao-gia-thiet-bi-bep" },
    ],
  },
  {
    name: "Khuyến mãi",
    slug: "khuyen-mai",
    child: [
      { name: "Giảm giá mùa hè", slug: "giam-gia-mua-he" },
      { name: "Tặng quà", slug: "tang-qua" },
    ],
  },
  {
    name: "Catalogue",
    slug: "catalogue",
    child: [
      { name: "Catalogue 2024", slug: "catalogue-2024" },
      { name: "Catalogue 2023", slug: "catalogue-2023" },
    ],
  },
  {
    name: "Hỏi đáp",
    slug: "hoi-dap",
    child: [
      { name: "Hỏi đáp sản phẩm", slug: "hoi-dap-san-pham" },
      { name: "Hỏi đáp kỹ thuật", slug: "hoi-dap-ky-thuat" },
    ],
  },
];

const Categories = [
  {
    name: "bài viết mới",
    child: [
      {
        name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua",
        slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua",
      },
      {
        name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua",
        slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-2",
      },
      {
        name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua",
        slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-3",
      },
      {
        name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua",
        slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-4",
      },
      {
        name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua",
        slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-5",
      },
    ],
  },
  {
    name: "Chuyên mục",
    child: [
      {
        name: "Khuyến Mãi",
        slug: "khuyen-mai",
        child: [
          {
            name: "Khuyến mãi thiết bị vệ sinh",
            slug: "khuyen-mai-thiet-bi-ve-sinh",
          },
          {
            name: "Khuyến mãi thiết bị bếp",
            slug: "khuyen-mai-thiet-bi-bep",
          },
          {
            name: "Khuyến mãi thiết bị nước",
            slug: "khuyen-mai-thiet-bi-nuoc",
          },
          {
            name: "Khuyến mãi thiết bị khóa cửa",
            slug: "khuyen-mai-thiet-bi-khoa-cua",
          },
        ],
      },
      {
        name: "Báo Giá",
        slug: "bao-gia",
        child: [
          {
            name: "Báo giá thiết bị vệ sinh",
            slug: "bao-gia-thiet-bi-ve-sinh",
          },
          {
            name: "Báo giá thiết bị bếp",
            slug: "bao-gia-thiet-bi-bep",
          },
        ],
      },
      {
        name: "Catalogue",
        slug: "catalogue",
      },
      {
        name: "Hỏi Đáp",
        slug: "hoi-dap",
      },
      {
        name: "Thiết Bị Vệ Sinh",
        slug: "thiet-bi-ve-sinh",
      },
      {
        name: "Thiết Bị Bếp",
        slug: "thiet-bi-bep",
      },
      {
        name: "Thiết Bị Nước",
        slug: "thiet-bi-nuoc",
      },
      {
        name: "Thiết Bị Khóa Cửa",
        slug: "thiet-bi-khoa-cua",
      },
    ],
  },
];

const allItems = [
  {
    name: "So sánh bồn cầu TOTO MS857 và MS885: Giá và chất lượng khác nhau thế nào?",
    category: "khuyen-mai",
    desc: "MS857 và MS885 đều là dòng bồn cầu cao cấp của TOTO. Vậy sự khác biệt nằm ở đâu?",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/so-sanh-bon-cau-ms857.jpg",
    slug: "km-thiet-bi-ve-sinh",
  },
  {
    name: "Top 5 vòi sen INAX bán chạy nhất tháng 6/2025",
    category: "thiet-bi-ve-sinh",
    desc: "Danh sách những mẫu vòi sen được ưa chuộng nhất hiện nay từ INAX.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/05/voi-sen-inax.jpg",
    slug: "san-pham-inax",
  },
  {
    name: "Bồn rửa mặt Caesar LF5255: Có đáng tiền không?",
    category: "thiet-bi-ve-sinh",
    desc: "Đánh giá chi tiết mẫu lavabo Caesar LF5255, dòng sản phẩm bán chạy của hãng.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/04/lavabo-caesar-lf5255.jpg",
    slug: "san-pham-caesar",
  },
  {
    name: "Ưu đãi 20% tất cả sản phẩm INAX trong tháng 6!",
    category: "khuyen-mai",
    desc: "Chương trình khuyến mãi hấp dẫn nhất dành cho khách hàng mua thiết bị INAX.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/05/khuyen-mai-inax.jpg",
    slug: "km-inax",
  },
  {
    name: "Cách chọn gạch lát nền chống trơn phù hợp cho nhà tắm",
    category: "kien-thuc-xay-dung",
    desc: "Hướng dẫn chi tiết giúp bạn chọn đúng loại gạch an toàn và đẹp mắt cho phòng tắm.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/02/gach-lat-nen-chong-tron.jpg",
    slug: "kien-thuc-xay-dung",
  },
  {
    name: "So sánh vòi rửa chén nóng lạnh TOTO và INAX: Nên chọn hãng nào?",
    category: "thiet-bi-nha-bep",
    desc: "Phân tích các yếu tố chất lượng, giá và bảo hành giữa hai thương hiệu lớn.",
    img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/voi-rua-chen.jpg",
    slug: "thiet-bi-nha-bep",
  },
];
const hoverIndex = ref(null);
</script>
<style scoped>
.relative > .udropdownmenu {
  z-index: 1000;
}
</style>
