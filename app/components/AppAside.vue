<script setup>

const navigation = [
    'Домой',
    'Управление клиентами',
    'Обработка заявки',
    'Отправка СМС',
    'Поиск Трек кодов ',
    'Контроль статуcа заявки',
    'Остатки товаров рейсы',
    'Касса и платежи',
    'Отправка фотоотчет',
    'Отчет и итоги',
    'Управление расходами',
    'Настройки',

]

</script>

<template>
    <aside class="aside">
        <div class="aside__content">
            <div class="aside__content-navigation" v-for="item in navigation" :key="item">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M42.1667 23.3908V26.3063C42.1667 33.7828 42.1667 37.5213 39.9211 39.8439C37.6758 42.1667 34.0615 42.1667 26.8334 42.1667H19.1667C11.9385 42.1667 8.32441 42.1667 6.07888 39.8439C3.83337 37.5213 3.83337 33.7828 3.83337 26.3063V23.3908C3.83337 19.0047 3.83337 16.8116 4.82851 14.9936C5.82364 13.1756 7.64169 12.0472 11.2778 9.79059L15.1111 7.41151C18.9547 5.02607 20.8766 3.83334 23 3.83334C25.1235 3.83334 27.0454 5.02607 30.889 7.41151L34.7224 9.79057C38.3585 12.0472 40.1764 13.1756 41.1716 14.9936"
                        stroke="#149D80" stroke-width="4" stroke-linecap="round" />
                    <path d="M28.75 34.5H17.25" stroke="#149D80" stroke-width="4" stroke-linecap="round" />
                </svg>
                <p>{{ item }}</p>
            </div>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
.aside {
    width: 365px;
    height: 100%;
    border-right: 1px solid #00000033;

    &__content {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-top: 40px;
        margin-right: 23px;

        &-navigation {
            width: 294px;
            display: flex;
            align-items: center;
            gap: 26px;
            padding: 11px 0 11px 11px;
            border-radius: 10px;
            margin-left: 31px;
            position: relative;
            cursor: pointer;
            transition: .2s;

            & p {
                font-family: var(--MM600);
                font-size: 20px;
                width: 211px;
                transition: .1s;
            }

            &::before {
                content: '';
                width: 17px;
                height: 68px;
                background: linear-gradient(90deg, rgba(32, 221, 181, 0.35) 5.29%, rgba(20, 157, 128, 0.35) 61.54%);
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                position: absolute;
                left: -11%;
                top: 0;

                opacity: 0;
                visibility: hidden;
            }

            &:hover {
                background: linear-gradient(90deg, rgba(32, 221, 181, 0.35) 5.29%, rgba(20, 157, 128, 0.35) 61.54%);

                & p {
                    color: white;
                }

                & svg {
                    path {
                        stroke: white;
                    }
                }

                &::before {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }

}
</style>