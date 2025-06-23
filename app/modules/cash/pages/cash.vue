<template>
  <div class="cash">
    <h2 class="cash__title">Касса</h2>
    <div class="cash__items">
      <div class="cash__item">
        <p class="cash__item-desc">За месяц, зарплата</p>
        <p class="cash__item-sum">2 340 000</p>
      </div>
      <div class="cash__item">
        <p class="cash__item-desc">За месяц, платежи</p>
        <p class="cash__item-sum">2 340 000</p>
      </div>
    </div>

    <h2 class="cash__title">Платежи</h2>
    <div class="cash__payments">
      <form action="" class="cash__payments-form">
        <fieldset>
          <label for="employee">Сотрудник</label>
          <input type="text" id="employee"/>
          <label for="cash__sum">Сумма</label>
          <input type="text" id="cash__sum"/>
        </fieldset>
        <fieldset>
        <label for="month">Месяц</label>
        <input type="text" id="month"/>
        <input type="button" value="Добавить зарплату" id="add__salary"/>
        </fieldset>
      </form>
    </div>

    <h2 class="cash__title">Долги</h2>
    <div class="cash__debts">
        <div class="cash__debts-titles">
            <div class="cash__debts-titlesBox">
                <p>Сумма</p>
            </div>
            <div class="cash__debts-titlesBox">
                <p>Метод</p>
            </div>
        </div>
        <div class="cash__debts-content">
            <ul class="cash__debts-list">
                <li class="cash__debts-item">600 000</li>
                <li class="cash__debts-item">600 000</li>
                <li class="cash__debts-item">600 000</li>
                <li class="cash__debts-item">600 000</li>
                <li class="cash__debts-item">600 000</li>
            </ul>

             <ul class="cash__debts-list">
                <li class="cash__debts-item">600 000</li>
                <li class="cash__debts-item">600 000</li>
                <li class="cash__debts-item">600 000</li>
                <li class="cash__debts-item">600 000</li>
                <li class="cash__debts-item">600 000</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cash {
  &__title {
    font-size: 50px;
    margin-bottom: 32px;
    font-weight: 600;
  }

  &__items {
    display: flex;
    gap: 40px;
    margin-bottom: 58px;
  }

  &__item {
    border: 1px solid #00000033;
    padding: 25px 80px 25px 25px;
    border-radius: 15px;

    &-desc {
      font-size: 18px;
      margin-bottom: 15px;
    }

    &-sum {
      font-weight: 700;
      font-size: 35px;
      color: #149d80;
    }
  }

  &__payments {
    border: 1px solid #00000033;
    border-radius: 15px;
    padding: 30px 50px 57px 58px;
    max-width: 730px;
    margin-bottom: 67px;

    &-form{
        display: flex;
        gap: 40px;

        fieldset{
            border: none;
            display: flex;
            flex-direction: column;
            row-gap: 7px;

            input {
                max-width: 380px;
                border: 1px solid #00000033;
                border-radius: 10px;
                outline: none;
                padding: 10px 20px;
                font-size: 20px;
                
                
            }
        }

    }
  }

  #add__salary{
    margin-top: 26px;
    cursor: pointer;

    &[value]{
        font-size: 20px;
        color: #FFFFFF;
        background: linear-gradient(90deg, #149D80, #20DDB5);
    }
  }

  &__debts {
    border: 1px solid #00000033;
    border-radius: 15px;
    max-width: 500px;
    padding: 15px 0 15px 58px;
    position: relative;

    &-titles{
        display: flex;
        justify-content: space-between;

    }

    &-titles::after{
        content: "";
        width: 100%;
        height: 1px;
        background: #00000033;
        position: absolute;
        top: 55px;
        left: 0;
    }

    &-titlesBox{
        width: 50%;

        p {
            font-size: 18px;
        }
    }

    &-content {
        display: flex;
        justify-content: space-between;
        margin-top: 44px;
    }

    &-list {
        width: 50%;

    }

    &-item {
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 18px;
    }



  }
}
</style>
