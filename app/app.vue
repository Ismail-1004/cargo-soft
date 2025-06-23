<template>
  <div class="wrapper">
    <AppHeader />
    <div class="wrapper__content">
      <AppAside />
      <main class="wrapper__content-main container">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;

  &__content {
    display: flex;
  }
}
</style>
