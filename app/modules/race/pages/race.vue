<script setup>
import { ref, provide } from 'vue'

const items = ref([
    {num: '1', name: 'Мухторжон', id: 'TP-41', phone: '+998 97 555 35 64', btn: 'Оплачено', status: 'paid'},
    {num: '2', name: 'Дилдора', id: 'TP-39', phone: '+998 97 555 35 64', btn: 'На складе', status: 'not-paid'},
    {num: '3', name: 'Машрапжон', id: 'TP-36', phone: '+998 97 555 35 64', btn: 'Не оплачено', status: 'inSclad'}
])

const isModalActive = ref(false)
provide('isModalActive', isModalActive)

</script>

<template>
    <div class="race">
        <div class="race__content">
            <h2 class="race__content-title">
                Рейс
                <span>TP-37</span>
            </h2>
            <div class="race__content-date">
                <p class="race__content-dateText">
                    Дата прибытия:
                    <span>
                        25.06.2025
                    </span>
                </p>
                <p class="race__content-dateText">
                    Вес:
                    <span>
                        1450кг
                    </span>
                </p>
            </div>
            <div class="race__content-total">
                <button class="race__content-totalBtn green">
                    Общий оборот:
                    <span>6 300 000</span>
                </button>
                <button class="race__content-totalBtn red">
                    Не оплаченные:
                    <span>1 350 000</span>
                </button>
            </div>
            <div class="race__content-categories">
                <button class="race__content-btn">
                    Общее
                </button>
                <button class="race__content-btn">
                    На складе
                </button>
                <button class="race__content-btn">
                    Не оплаченные
                </button>
                <button class="race__content-sendBtn" @click="isModalActive = true">
                    Отправить SMS
                </button>
                <ChildComponent />
            </div>
            <div class="race__content-table">
                <div class="race__content-tableHead">
                    <p class="race__content-tableTitle num">
                        #
                    </p>
                    <p class="race__content-tableTitle client">
                        Клиент
                    </p>
                    <p class="race__content-tableTitle id">
                        ID Код
                    </p>
                    <p class="race__content-tableTitle number">
                        Номер телефона
                    </p>
                    <p class="race__content-tableTitle status">
                        Статус
                    </p>
                </div>
                <div class="race__content-tableBody">
                    <div
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        <p class="race__content-tableText num">
                            {{ item.num }}
                        </p>
                        <p class="race__content-tableText client">
                            {{ item.name }}
                        </p>
                        <p class="race__content-tableText id">
                            {{ item.id }}
                        </p>
                        <p class="race__content-tableText number">
                            {{ item.phone }}
                        </p>
                        <button :class="['race__content-tableBtn', item.status]">
                            {{ item.btn }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <modal v-if="isModalActive" />
    </div>
</template>

<style lang="scss" scoped>
.race{
    &__content{
        position: relative;

        &-title{
            font-family: "Montserrat";
            font-weight: 600;
            font-size: 50px;
            color: #000;
            & span{
                color: #149D80;
            }
        }
        &-date{
            display: flex;
            align-items: center;
            gap: 40px;
            margin: 20px 0;
        }

        &-dateText{
            font-family: "Montserrat";
            font-weight: 500;
            font-size: 20px;
        }

        &-total{
            display: flex;
            align-items: center;
            width: 64%;
            margin-bottom: 40px;
        }

        &-totalBtn{
            width: 50%;
            padding: 20px 0;
            font-family: "Montserrat";
            font-weight: 700;
            color: #fff;
            font-size: 25px;
            border: none;
            
            &.red{
                background: #E36969;
                border-radius: 0 20px 20px 0;
            }

            &.green{
                background: linear-gradient(180deg, #149D80 0%, #20DDB5 100%);
                border-radius: 20px 0 0 20px;
            }
        }

        &-categories{
            display: flex;
            align-items: center;
            margin-bottom: 60px;
        }

        &-btn{
            padding: 25px 60px;
            background: #F5F5F5;
            border-radius: 20px;
            border: none;
            margin-right: 15px;

            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 20px;
            color: #000;
        }

        &-sendBtn{
            padding: 10px 25px;
            background: linear-gradient(180deg, #149D80 0%, #20DDB5 100%);
            border-radius: 20px;
            border: 1px solid #149D80;
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 20px;
            color: #fff;
            margin-left: 45px;
            width: 12%;
        }
        
        &-table{
            width: 64%;
        }
        
        &-tableHead{
            padding: 20px 40px;
            background: #F5F5F5;
            border: 1px solid #00000033;
            border-radius: 20px 20px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &-tableBody{
            padding: 20px 40px;
            background: inherit;
            border-left: 1px solid #00000033;
            border-right: 1px solid #00000033;
            border-bottom: 1px solid #00000033;
            border-radius: 0 0 20px 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            
            & div{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        &-tableTitle{
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 20px;
        }

        &-tableText{
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 20px;
        }

        &-tableBtn{
            padding: 5px 10px;
            border: none;
            border-radius: 20px;

            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 15px;
            color: #fff;
            max-width: 120px;
            width: 100%;
            text-align: center;
            

            &.paid{
                background: linear-gradient(180deg, #149D80 0%, #20DDB5 100%);
            }

            &.not-paid{
                background: #E36969;
            }

            &.inSclad{
                background: #E2D545;
            }
        }
    }
}

.num{
    max-width: 40px;
    width: 100%;
    text-align: center;
}

.client{
    max-width: 144px;
    width: 100%;
    text-align: center;
}

.id{
    max-width: 144px;
    width: 100%;
    text-align: center;
}

.number{
    max-width: 183px;
    width: 100%;
    text-align: center;
}

.status{
    max-width: 120px;
    width: 100%;
    text-align: center;
}
</style>