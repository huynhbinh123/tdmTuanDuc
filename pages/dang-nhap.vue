<template>
  <UContainer>
    <div><Breadcrumb :items="[{ name: 'Đăng nhập' }]" /></div>

    <div class="grid lg:grid-cols-2 gap-6 mt-4 items-start">
      <!-- khách hàng mới -->
      <div class="flex flex-col bg-gray-100 rounded-lg text-black gap-2 p-6">
        <h2 class="text-3xl">Khách hàng mới</h2>
        <h3 class="">Đăng kí tài khoản</h3>
        <p class="text-black/70">
          Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn, cập nhật tình
          trạng đơn hàng, theo dõi những đơn hàng đã đặt.
        </p>
        <NuxtLink to="/dang-ky">
          <UButton
            class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow font-semibold cursor-pointer w-[100px]"
          >
            Tiếp tục
          </UButton></NuxtLink
        >
      </div>

      <!-- khác hàng cũ -->
      <div class="flex flex-col bg-gray-100 rounded-lg text-black gap-4 p-6">
        <h2 class="text-3xl">Khách hàng cũ</h2>
        <h3 class="">Tôi đã có tài khoản</h3>
        <div>
          <h1>Địa chỉ E-Mail:</h1>
          <UInput
            trailing-icon="i-lucide-at-sign"
            placeholder="E-mail của bạn"
            v-model="form.email"
            size="xl"
            class="w-full"
            :ui="{
              base: 'bg-white',
            }"
          />
        </div>
        <div>
          <h1>Mật khẩu:</h1>
          <UInput
            v-model="form.password"
            size="xl"
            placeholder="Mật khẩu"
            :type="show ? 'text' : 'password'"
            :ui="{
              base: 'bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ',
              trailing: 'pe-1',
            }"
            class="w-full"
          >
            <template #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                :aria-label="show ? 'Hide password' : 'Show password'"
                :aria-pressed="show"
                aria-controls="password"
                @click="show = !show"
              />
            </template>
          </UInput>
          <NuxtLink to="/" class="text-blue-400">Quên mật khẩu</NuxtLink>
        </div>

        <UButton
          class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow font-semibold cursor-pointer w-[100px]"
        >
          Tiếp tục
        </UButton>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const show = ref(false);
const form = reactive({
  email: "",
  password: "",
});
</script>

<style></style>
