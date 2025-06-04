<template>
  <SiteHeader :showCategoryMenu="false" :showCartUser="false" />

  <main class="flex-grow min-h-screen bg-white pt-[16px]">
    <slot />
  </main>

  <SiteFooter />
</template>

<script lang="ts" setup></script>

<style></style>
