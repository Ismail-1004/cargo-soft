<template>
  <div class="track-code">
    <h1>Поиск трек-кода</h1>
    <div class="track-code__content">
      <div class="track-code__content-search">
        <input type="text" placeholder="Трек-код" />
        <button>Найти</button>
      </div>
      <div class="track-code__content-info">
        <p>Трек-код</p>
        <p>Cargo-ID</p>
        <p>Статус</p>
      </div>
      <div class="track-code__content-result">
        <p>YT1853854058505</p>
        <p>TPP-185</p>
        <span>TP-37</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.track-code {
  & h1 {
    font-family: var(--MM600);
    font-size: 50px;
  }

  &__content {
    border: 1px solid #00000033;
    width: 791px;
    padding: 62px 47px 47px 48px;
    border-radius: 50px;
    margin-top: 62px;

    &-search {
      height: 70px;
      display: flex;
      gap: 15px;
      align-items: center;
      & input {
        width: 565px;
        padding: 0 28px;
        height: 100%;
        border-radius: 20px;
        border: 1px solid #00000033;
        outline: none;

        font-family: var(--MM400);
        font-size: 30px;
        color: #00000080;
      }

      & button {
        width: 211px;
        height: 100%;
        font-family: var(--MM400);
        font-size: 30px;
        color: white;
        background: linear-gradient(180deg, #149d80 0%, #20ddb5 100%);
        border: none;
        border-radius: 20px;
        cursor: pointer;
      }
    }

    &-info {
      width: 100%;
      height: 92px;
      background: #0000000f;
      border-radius: 20px;
      padding: 0 56px 0 26px;
      margin: 42px 0 35px 0;

      display: flex;
      justify-content: space-between;
      align-items: center;

      & p {
        font-family: var(--MM400);
        font-size: 20px;
        color: #00000080;
      }
    }

    &-result {
      display: grid;
      grid-template-columns: 2fr 1.6fr 1fr;
      align-items: center;

      & p:first-child {
        margin-left: 15px;
        font-family: var(--MM700);
        font-size: 20px;
      }

      & p:nth-child(2) {
        font-family: var(--MM700);
        font-size: 20px;
      }

      & span {
        font-family: var(--MM700);
        font-size: 20px;
        color: white;
        background: linear-gradient(180deg, #149d80 0%, #20ddb5 100%);
        width: 113px;
        height: 38px;
        border-radius: 10px;
        margin-left: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
