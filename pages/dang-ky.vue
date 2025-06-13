<template>
  <UContainer>
    <div><Breadcrumb :items="[{ name: 'Đăng ký' }]" /></div>

    <div class="flex flex-col gap-2 mt-10">
      <h3 class="text-black text-4xl font-semibold">Đăng Ký Tài Khoản</h3>
      <div class="text-black/80">
        Nếu bạn đã đăng ký tài khoản, vui lòng đăng nhập
        <NuxtLink to="dang-nhap" class="text-orange-400">Tại Đây.</NuxtLink>
        <p class="text-black/80">
          <span class="text-black/80 font-bold">Lưu ý:</span> Các mục dấu sao
          <span class="text-black/80 font-bold">màu đỏ</span> không được bỏ
          trống & phải điền đầy đủ, chính xác
        </p>
      </div>

      <form @submit.prevent="handleSubmit">
        <div v-for="group in userForm" :key="group.group" class="mb-6">
          <h3
            class="text-lg font-semibold border-b border-gray-300 text-black py-2 mb-2"
          >
            {{ group.group }}
          </h3>
          <div v-for="field in group.fields" :key="field.model" class="mb-4">
            <div class="flex flex-col">
              <label
                :for="field.model"
                class="text-sm font-medium text-gray-700 mb-1"
              >
                {{ field.label }}
                <span v-if="field.required" class="text-red-500 ms-2">*</span>
              </label>
              <input
                :type="field.type"
                :id="field.model"
                v-model="formData[field.model as FormField]"
                :placeholder="field.placeholder"
                :required="field.required"
                class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Lưu
        </button>
      </form>
    </div>
  </UContainer>
</template>
<script setup lang="ts">
import { useMockUserForm } from "~/composables/useMockData";
const userForm = useMockUserForm();
type FormField =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "password"
  | "confirmPassword";

const formData = reactive<Record<FormField, string>>({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const handleSubmit = () => {
  console.log("Dữ liệu form:", formData);
};
</script>
