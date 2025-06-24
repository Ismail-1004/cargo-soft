<script setup>
import { ref } from 'vue'

const items = ref([
    { date: '27.06.2025', time: '02:20', id: 'TPP-85', count: '6', status: true },
    { date: '27.06.2025', time: '02:20', id: 'TPP-85', count: '6', status: false }
])

</script>

<template>
    <div class="table">
        <div class="table__content">
            <div class="table__content-titles">
                <h3 class="table__content-title">
                    Дата    
                </h3>
                <h3 class="table__content-title">
                    Время    
                </h3>
                <h3 class="table__content-title">
                    Код ID    
                </h3>
                <h3 class="table__content-title">
                    Кол-во товара    
                </h3>
                <h3 class="table__content-title">
                    Статус    
                </h3>
            </div>
            <div class="table__content-orders">
                <div 
                    class="table__content-order"
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <p class="table__content-text">{{ item.date }}</p>
                    <p class="table__content-time">{{ item.time }}</p>
                    <p class="table__content-id">{{ item.id }}</p>
                    <p class="table__content-count">{{ item.count }}</p>
                    <button 
                        class="table__content-status"
                        :class="{ 'green': item.status, 'red': !item.status }"
                    >
                        {{ item.status ? 'отправлен' : 'не отправлен' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.table{
    width: 80%;

    &__content{
        &-titles{
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #F5F5F5;
            border-radius: 30px 30px 0 0;
            padding: 20px;
        }

        &-title{
            font-weight: 400;
            font-size: 15px;
        }

        &-orders{
            padding: 20px 50px 20px 50px;  
            border-left: 1px solid #00000033;
            border-bottom: 1px solid #00000033;
            border-right: 1px solid #00000033;
            border-radius: 0 0 30px 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        &-order{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &-status{
            width: 14%;
        }

        &-text{
            font-family: "Montserrat";
            font-weight: 600;
            font-size: 13px;
        }

        &-time{
            font-family: "Montserrat";
            font-weight: 600;
            font-size: 13px;
            transform: translateX(-20px);
        }

        &-id{
            font-family: "Montserrat";
            font-weight: 600;
            font-size: 13px;
            transform: translateX(-30px);
        }

        &-status {
            padding: 8px 0px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            color: white;
            font-weight: 500;
            transition: background-color 0.3s ease;
            transform: translateX(10px);
        }
    }
}

.red{
    background: #E36969;
}

.green{
    background: linear-gradient(90deg, #149D80 0%, #20DDB5 100%);
}

</style>