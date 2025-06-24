<script setup>
import Table from '../components/Table'
import { ref } from 'vue';

const activeOption = ref('normal');
</script>

<template>
    <div class="photo">
        <div class="photo__content">
            <h2 class="photo__content-title">
                Фото отчет
            </h2>
            <form class="photo__content-form" @submit.prevent>
                <label for="race" class="photo__content-formText">Рейс</label>
                <div class="photo__content-lock">
                    <input type="text" class="photo__content-input" id="race">
                    <img src="@/assets/images/photo/green-lock.png" class="photo__content-greenLock">
                    <img src="@/assets/images/photo/red-lock.png" class="photo__content-redLock">
                </div>
                <label for="id" class="photo__content-formText">ID код</label>
                <input type="number" class="photo__content-input">
                <label for="weight" class="photo__content-formText">Вес(кг)</label>
                <input type="number" class="photo__content-input">
                <label for="id" class="photo__content-formText">Трек-код</label>
                <input type="text" class="photo__content-input">
                <div class="photo__content-formType">
                    <label class="photo__content-formText">Тип</label>
                    <div class="photo__content-options">
                        <div class="photo__content-option" @click="activeOption = 'normal'">
                            <button
                                type="button" 
                                class="photo__content-checkbox" 
                                :class="{ active: activeOption === 'normal' }"
                            ></button>
                            <p class="photo__content-optionText">
                                Обычный товар
                            </p>
                        </div>
                        <div class="photo__content-option" @click="activeOption = 'brand'">
                            <button 
                                type="button"  
                                class="photo__content-checkbox" 
                                :class="{ active: activeOption === 'brand' }"
                            ></button>
                            <p class="photo__content-optionText">
                                Бренд
                            </p>
                        </div>
                        <div class="photo__content-option" @click="activeOption = 'series'">
                            <button 
                                type="button" 
                                class="photo__content-checkbox" 
                                :class="{ active: activeOption === 'series' }"
                            ></button>
                            <p class="photo__content-optionText">
                                Серия
                            </p>
                        </div>
                    </div>
                </div>
            </form>
            <button class="photo__content-send">
                Отправить
            </button>
            <Table />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.photo{
    &__content{
        &-title{
            font-family: 'Montserrat';
            font-size: 35px;
            margin-bottom: 20px;
        }

        &-form{
            border: 1px solid #00000033;
            border-radius: 30px;
            padding: 25px 80px 30px 50px;
            display: flex;
            flex-direction: column;
            width: 80%;
        }

        &-formText{
            font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 400;
            margin-bottom: 5px;
            display: inline-block;
        }

        &-input{
            border: 1px solid #00000033;
            border-radius: 15px;
            padding: 10px;
            margin-bottom: 15px;
            outline: none;
            width: 100%;
        }

        &-lock{
            width: 100%;
            position: relative;
        }

        &-greenLock{
            position: absolute;
            right: 2%;
            top: 10%;
            width: 25px;
            height: 25px;
        }

        &-redLock{
            position: absolute;
            right: -5%;
            top: 10%;
            width: 25px;
            height: 25px;
        }

        &-formType{
            margin-top: 15px;
        }

        &-options{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &-option{
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }

        &-optionText{
            font-family: "Montserrat";
            font-weight: 400;
            font-size: 15px;
        }

        &-checkbox{
            width: 25px;
            height: 25px;
            border: 1px solid #00000033;
            border-radius: 50%;
            background: inherit;

            &.active{
                background: #149D80;
                border: none;
            }
        }

        &-send{
            font-family: "Montserrat";
            font-weight: 700;
            font-size: 40px;
            padding: 23px 0 32px 0;
            color: #fff;

            width: 80%;
            margin: 40px 0;
            background: linear-gradient(90deg, #149D80 0%, #20DDB5 100%);
            border: none;
            border-radius: 15px;
        }
    }
}
</style>