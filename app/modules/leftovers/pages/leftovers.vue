<script setup>
import { ref } from 'vue';

const activePeriodToggle = ref("month");

const progress = [
    {
        name: "TP-36",
        progress: 76
    },
    {
        name: "TP-37",
        progress: 100
    },
    {
        name: "TP-38",
        progress: 70
    },
    {
        name: "TP-39",
        progress: 50
    },
    {
        name: "TP-40",
        progress: 90
    },
    {
        name: "TP-41",
        progress: 100
    }
]
</script>

<template>
    <div class="leftovers">
        <h1>Остатки</h1>
        <div class="leftovers__periodToggle">
            <button @click="activePeriodToggle = 'month'" :class="{ 'active': activePeriodToggle === 'month' }"
                class="periodToggle__button">Этот месяц</button>
            <button @click="activePeriodToggle = 'year'" :class="{ 'active': activePeriodToggle === 'year' }"
                class="periodToggle__button">1 год</button>
        </div>
        <div class="leftovers__progressListItem">
            <div class="leftovers__progressListItem-table" v-for="item in progress" :key="item.name">
                <p>{{ item.name }}</p>
                <NuxtLink class="leftovers__progressListItem-table-link" to="#">
                    Посмотреть
                </NuxtLink>
                <div class="leftovers__progressListItem-progressBar">
                    <div class="leftovers__progressListItem-progressBar-progressBar">
                        <div class="leftovers__progressListItem-progressBar__item"
                            :style="{ width: item.progress + '%' }">
                        </div>
                    </div>
                    <span class="leftovers__progressListItem-progressBar-text">{{ item.progress }}%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.leftovers {
    & h1 {
        font-family: var(--MM600);
        font-size: 50px;
    }

    &__periodToggle {
        margin: 39px 0 54px 0;

        & .periodToggle__button {
            width: 452px;
            height: 76px;
            border: none;
            cursor: pointer;
            font-family: var(--MM700);
            font-size: 30px;
            color: #149D80;
            transition: .3s;
        }

        & .periodToggle__button:first-child {
            border-radius: 20px 0 0 20px;
        }

        & .periodToggle__button:last-child {
            border-radius: 0 20px 20px 0;
        }
    }

    &__progressListItem {
        max-width: 904px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 26px;

        &-table {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 76px;
            border: 1px solid #00000033;
            border-radius: 20px;
            padding: 0 43px 0 71px;

            p {
                font-family: var(--MM500);
                font-size: 25px;
            }

            &-link {
                font-family: var(--MM500);
                font-size: 25px;
                color: #149D80;
            }

        }

        &-progressBar {
            display: flex;
            align-items: center;
            gap: 8px;

            &-progressBar {
                width: 123px;
                height: 13px;
                border-radius: 20px;
                overflow: hidden;
                border: 1px solid #00000033;
                background: white;
            }

            &__item {
                height: 100%;
                width: 100%;
                background: #149D80;
                border-radius: 20px;
            }

            &-text {
                font-family: var(--MM500);
                font-size: 12px;
            }
        }
    }
}

.periodToggle__button.active {
    background: linear-gradient(180deg, #149D80 0%, #20DDB5 100%);
    color: white;
}
</style>