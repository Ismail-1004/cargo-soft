<script setup>
import { ref, inject } from 'vue'

const isActive = inject('isModalActive')
</script>

<template>
    <div class="modal" v-if="isActive">
        <div class="modal__content">
            <div class="modal__content-head">
                <h2 class="modal__content-title">
                    Отправка
                    <span>СМС</span>
                </h2>
                <button class="modal__content-close" @click="isActive = false">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="modal__content-message">
                <textarea class="modal__content-textarea" placeholder="Начать писать..."></textarea>
            </div>
            <button class="modal__content-send">
                Отправить
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    transform: translateY(20px);
    opacity: 0;
  }
  to { 
    transform: translateY(0);
    opacity: 1;
  }
}

.modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease-out;
    transform: translateX(3%);
    
    &__content{
        width: 50%;
        background: #FFFFFFF2;
        border: 1px solid #00000080;
        border-radius: 50px;
        transform: translateX();

        &-head{
            padding: 25px 60px;
            border-bottom: 1px solid #00000080;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        &-title{
            font-family: 'Montserrat';
            font-weight: 600;
            font-size: 50px;

            & span{
                color: #149D80;
            }
        }

        &-message{
            padding: 0 50px;
            background: #FFFFFFF2;
        }

        &-textarea{
            resize: none;
            outline: none;
            padding: 30px;
            width: 100%;
            height: 250px;
            border-radius: 30px;
            border: 1px solid #00000080;
            
            font-size: 20px;
            font-family: 'Montserrat';
            font-weight: 300;
            color: #00000080;
            background: #FFFFFFF2;
        }

        &-send{
            padding: 20px 0;
            width: 100%;
            border-radius: 0 0 50px 50px;
            background: linear-gradient(90deg, #149D80 0%, #20DDB5 100%);
            border: none;
            margin-top: 40px;

            font-family: 'Montserrat';
            font-weight: 600;
            font-size: 50px;
            color: #fff;
        }

        &-close{
            background: #E36969;
            border: none;
            border-radius: 5px;
            height: 30px;

            & svg{
                width: 30px;
                color: #fff;
            }
        }
    }
}
</style>

