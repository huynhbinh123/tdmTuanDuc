<template>
  <UContainer class="mt-6">
    <!-- Breadcrumb -->
    <Breadcrumb :items="[{ name: 'Đặt hàng' }]" />

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
      <form @submit.prevent="handleSubmit">
        <div v-for="group in userForm" :key="group.group" class="space-y-6">
          <div>
            <div
              class="flex justify-between border-l-3 border-blue-400 items-center bg-gray-100 p-2"
              :class="{
                'mt-3': group.group === 'Thông tin thanh toán',
                'mt-0': group.group !== 'Thông tin thanh toán',
              }"
            >
              <h3 class="text-black font-bold text-sm gap-2 uppercase">
                {{ group.group }}
              </h3>
              <UIcon :name="group.icon" class="text-black" size="20" />
            </div>
            <!--  -->
            <div v-if="group.buttons" class="mt-4 flex gap-2 flex-1 r">
              <div class="flex-1">
                <Button
                  class="w-full bg-gray-200 p-1 text-gray-500 cursor-pointer"
                >
                  {{ group.buttons[0].login }}
                </Button>
              </div>
              <div class="flex-1">
                <Button
                  class="w-full bg-orange-400 p-1 text-white cursor-pointer"
                >
                  {{ group.buttons[0].guest }}
                </Button>
              </div>
            </div>

            <!-- Các input field -->
            <div v-for="field in group.fields" :key="field.model" class="mt-3">
              <div class="flex">
                <h3 class="text-black/80">{{ field.label }}</h3>
                <span v-if="field.required" class="text-red-500 ms-2">*</span>
              </div>
              <Input
                :type="field.type"
                :id="field.model"
                v-model="formData[field.model as FormField]"
                :placeholder="field.placeholder"
                :required="field.required"
                class="w-full bg-gray-100 text-black/70 p-1"
              />
            </div>
          </div>
        </div>
      </form>
      <!-- Cột phải -->
      <div class="col-span-3 space-y-6">
        <!-- Xác nhận đơn hàng -->
        <div class="border border-gray-300 rounded-md p-4">
          <h3 class="font-bold text-sm border-b pb-2">Xác nhận đơn hàng</h3>
          <div class="mt-4 space-y-2">
            <p><strong>Sản phẩm:</strong> Nắp Bồn Cầu Rửa Cơ INAX CW-S32VN</p>
            <p>- Mã SP: CW-S32VN</p>
            <div class="flex justify-between mt-2">
              <span>Số lượng</span>
              <div class="flex items-center gap-1">
                <UButton size="sm" icon="i-heroicons-chevron-down" />
                <span>1</span>
                <UButton size="sm" icon="i-heroicons-chevron-up" />
              </div>
              <span>2.130.000 đ</span>
              <span>= 2.130.000 đ</span>
            </div>
            <div class="text-right font-semibold mt-2">Tổng: 2.130.000 đ</div>
            <UTextarea class="mt-4" placeholder="Ghi chú thêm cho đơn hàng" />
          </div>
        </div>

        <!-- Hướng dẫn chuyển khoản -->
        <div class="border border-gray-300 rounded-md p-4">
          <h3 class="font-bold text-sm border-b pb-2">
            Hướng dẫn chuyển khoản ngân hàng
          </h3>
          <p class="mt-2 text-sm leading-relaxed">
            Ngân hàng Ngoại thương Vietcombank<br />
            Tên tài khoản: Doanh nghiệp tư nhân thương mại dịch vụ Tuấn Đức<br />
            Số tài khoản: 0461003764572<br />
            Chi nhánh Tân Bình Dương
          </p>
        </div>

        <!-- Đặt hàng -->
        <div class="flex items-center justify-between mt-4">
          <UCheckbox label="Tôi đã đọc và đồng ý với Các câu hỏi thường gặp" />
          <UButton>Đặt hàng</UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { RadioGroupItem } from "@nuxt/ui";
const userForm = [
  {
    group: "Đăng nhập",
    icon: "material-symbols:person-rounded",
    buttons: [{ login: "Đăng nhập", guest: "Khách" }],
    fields: [
      {
        label: "E-mail",
        model: "email",
        placeholder: "Nhập e-mail",
        type: "email",
        required: true,
      },
    ],
  },
  {
    group: "Thông tin thanh toán",
    icon: "solar:letter-bold",
    fields: [
      {
        label: "Tên",
        model: "firstName",
        placeholder: "Nhập tên",
        type: "text",
        required: true,
      },
      {
        label: "Điện Thoại",
        model: "phone",
        placeholder: "Nhập số điện thoại",
        type: "tel",
        required: true,
      },
      {
        label: "Địa chỉ",
        model: "address",
        placeholder: "Nhập địa chỉ",
        type: "text",
        required: true,
      },
    ],
  },
];

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
