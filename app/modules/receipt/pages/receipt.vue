<template>
    <div class="receipt">
        <h2 class="receipt__title">Касса</h2>

        <div class="receipt__money">
            <div class="receipt__money-all">
                <div class="receipt__money-card">
                    <p class="receipt__money-cardTitle">Поступление с карты</p>
                    <p class="receipt__money-cardSum">4 350 000</p>
                </div>
                <div class="receipt__money-card">
                    <p class="receipt__money-cardTitle">Поступление с карты</p>
                    <p class="receipt__money-cardSum">4 350 000</p>
                </div>
            </div>
            <div class="receipt__money-expenses">
                <p class="receipt__money-expensesTitle">Расходы</p>
                <p class="receipt__money-expensesSum">2 340 000</p>
            </div>
        </div>

        <div class="receipt__btns">
            <button class="receipt__day">За 1 день</button>
            <button class="receipt__month">За 1 месяц</button>
            <button class="receipt__year">За 1 год</button>
            <button class="receipt__calculate">Рассчитать</button>
        </div>

        <div class="receipt__search">
            <input class="receipt__search-inp" type="text" name="" id="" placeholder="Поиск...">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .receipt {


        &__title {
            font-weight: 600;
            font-size: 50px;
        }

        &__money {
            display: flex;
            margin-top: 40px;

            &-all {
                max-width: 580px;
                width: 100%;
                border: 1px solid #00000033;
                border-radius: 15px;
                display: flex;
                justify-content: space-between;
                padding: 20px 40px;
            }

            &-cardTitle {
                font-size: 18px;
                margin-bottom: 15px;
            }

            &-cardSum {
                font-size: 35px;
                color: #149D80;
                font-weight: 700;
            }

            &-expenses {
                border: 1px solid #E36969;
                border-radius: 15px;
                padding: 20px 40px;
                margin-left: 135px;
                max-width: 305px;
                width: 100%;

            }

            &-expensesTitle {
                font-size: 18px;
                margin-bottom: 15px;
            }

             &-expensesSum {
                font-weight: 700;
                font-size: 35px;
                color: #E36969;
             }


        }

        &__btns {
            margin-top: 50px;
            display: flex;
            gap: 20px;

             
        }
        &__day, &__month, &__year {
                max-width: 240px;
                width: 100%;
                border-radius: 10px;
                border: 1px solid #00000033;
                background: transparent;
                font-size: 18px;
                padding: 10px 0px;
                cursor: pointer;
                color: #000;

                &:hover {
                    color: #149D80;
                    border: 1px solid #149D80;
            }
        }

        &__calculate{
            background: linear-gradient(90deg, #149D80, #20DDB5);
            border: none;
            border-radius: 10px;
            padding: 10px 0px;
            color: #fff;
            max-width: 240px;
            width: 100%;
            font-size: 18px;
            cursor: pointer;

        }

        &__search {
            margin-top: 50px;

            &-inp {
                max-width: 1023px;
                width: 100%;
                border: 1px solid #00000033;
                padding: 20px 20px 20px 50px;
                font-size: 20px;
                border-radius: 10px;
                outline: none;
            }
        }
    }
</style>