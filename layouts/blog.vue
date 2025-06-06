<template>
  <div class="flex flex-col min-h-screen bg-white">
    <SiteHeader :showCategoryMenu="false" :showCartUser="false" />

    <main class="flex-grow pt-[16px]">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
