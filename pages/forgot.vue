<template>
  <UContainer>
    <div><Breadcrumb :items="[{ name: 'Quên mật khẩu' }]" /></div>

    <div>
      <div class="flex flex-col gap-2 mt-10 border-b border-gray-200">
        <h3 class="text-4xl font-lg text-black p2">Bạn Quên Mật Khẩu?</h3>
        <p class="text-black">
          Nhập địa chỉ email đã đăng kí với tài khoản này. Bấm Tiếp tục, mật
          khẩu sẽ được gửi đến email của bạn.
        </p>
        <h2 class="text-black text-lg">Địa chỉ E-Mail của bạn</h2>
      </div>

      <form @submit.prevent="submitEmail" class="pt-4">
        <div class="flex justify-end items-center gap-3">
          <h1 class="text-black whitespace-nowrap">Địa chỉ E-Mail:</h1>
          <UInput
            trailing-icon="i-lucide-at-sign"
            placeholder="E-mail của bạn"
            v-model="form.email"
            size="xl"
            class="w-[80%]"
            :ui="{ base: 'bg-white text-black' }"
          />
        </div>

        <div class="flex justify-between items-center pt-4">
          <NuxtLink to="/dang-nhap">
            <button
              type="button"
              class="bg-gray-200 text-black/50 rounded p-2 border border-black-100 hover:border-black-200 hover:text-black/80 cursor-pointer"
            >
              Quay lại
            </button>
          </NuxtLink>

          <button
            type="submit"
            :disabled="loading"
            class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow font-semibold cursor-pointer w-[100px] flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span v-if="!loading">Tiếp tục</span>
            <span v-else>
              <UIcon name="i-lucide-loader" class="animate-spin" />
            </span>
          </button>
        </div>
      </form>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "#imports";
const toast = useToast();
const form = reactive({
  email: "",
});

const router = useRouter();
const loading = ref(false);

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function submitEmail() {
  if (!isValidEmail(form.email)) {
    toast.add({
      title: "Lỗi",
      description: "Vui lòng nhập email hợp lệ.",
      color: "error",
      duration: 3000,
    });
    return;
  }

  loading.value = true;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  loading.value = false;

  router.push({
    path: "/dang-nhap",
    query: {
      email: form.email,
    },
  });
}
</script>
