<template>
  <UContainer>
    <div>
      <Breadcrumb :items="[{ name: 'Giỏ Hàng' }]" />
    </div>

    <div class="py-10">
      <h1 class="text-4xl text-black">Giỏ Hàng</h1>
      <div>
        <div v-if="cartItems && cartItems.length">
          <div class="overflow-x-auto">
            <table
              class="table-auto w-full text-left text-black mt-6 border-collapse min-w-[600px]"
            >
              <thead class="bg-gray-100">
                <tr class="whitespace-nowrap">
                  <th class="p-2 border">Hình ảnh</th>
                  <th class="p-2 border">Tên sản phẩm</th>
                  <th class="p-2 border text-center">Số lượng</th>
                  <th class="p-2 border text-right">Đơn giá</th>
                  <th class="p-2 border text-right">Tổng cộng</th>
                  <th class="p-2 border text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, idx) in cartItems"
                  :key="idx"
                  class="border-b"
                >
                  <td class="p-2 border">
                    <img
                      :src="item.image"
                      alt=""
                      class="w-12 h-12 object-cover rounded border border-gray-300 mx-auto"
                    />
                  </td>
                  <td class="p-2 border">{{ item.name }}</td>
                  <td class="p-2 border text-center">{{ item.quantity }}</td>
                  <td class="p-2 border text-right whitespace-nowrap">
                    {{ item.price.toLocaleString() }} đ
                  </td>
                  <td class="p-2 border text-right">
                    {{ (item.price * item.quantity).toLocaleString() }} đ
                  </td>
                  <td class="p-2 border text-center">
                    <button
                      class="text-red-500 hover:underline hover:text-red-400 cursor-pointer"
                      @click="removeFromCart(idx)"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex justify-end gap-4 mt-4">
            <span class="font-bold text-black">Tổng số tiền:</span>
            <span class="font-bold text-orange-500">
              {{ totalCartPrice.toLocaleString() }} đ
            </span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <NuxtLink
              to="/"
              class="bg-gray-200 text-black/50 rounded p-2 border border-black-100 hover:border-black-200 hover:text-black/80"
            >
              Tiếp tục tìm mặt hàng khác
            </NuxtLink>
            <NuxtLink
              to="/thanh-toan"
              class="flex justify-center items-center gap-2 bg-orange-500 text-white text-center py-2 rounded hover:bg-orange-600 font-semibold lg:min-w-[200px] min-w-[150px]"
            >
              <UIcon name="material-symbols:credit-card" />
              Thanh toán
            </NuxtLink>
          </div>
        </div>
        <div v-else>
          <h2 class="text-black/80 py-4">Không có sản phẩm trong giỏ hàng!</h2>
          <NuxtLink to="/">
            <UButton
              class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow font-semibold cursor-pointer w-[100px]"
            >
              Tiếp tục
            </UButton></NuxtLink
          >
        </div>
      </div>
    </div>
  </UContainer>
</template>
<script lang="ts" setup>
type Category = {
  name: string;
  slug?: string;
  desc?: string;
  child?: Category[];
};

import { ref, computed } from "vue";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const cartItems = ref<CartItem[]>([
  {
    name: "Vòi Hoa Sen Inax BFV-1403S-4C (BFV1403S4C) Nóng Lạnh",
    quantity: 1,
    price: 160000,
    image:
      "https://www.tdm.vn/image/cachewebp/catalog/product-3935/sen-tam-nong-lanh-inax-BFV-1403S-4C-47x47.webp",
  },
  {
    name: "Vòi Hoa Sen Inax BFV-1403S-4C (BFV1403S4C) Nóng Lạnh",
    quantity: 2,
    price: 90000,
    image:
      "https://www.tdm.vn/image/cachewebp/catalog/product-3935/sen-tam-nong-lanh-inax-BFV-1403S-4C-47x47.webp",
  },
]);
const totalQuantity = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
);

const totalCartPrice = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
);

function removeFromCart(index: number) {
  cartItems.value.splice(index, 1);
}
</script>
