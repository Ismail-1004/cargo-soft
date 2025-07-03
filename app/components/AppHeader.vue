<template>
    <header class="header">
        <div class="header__content">
            <img src="~/public/logo.svg" alt="logo" class="header__logo">
            <form action="" class="header__form">
                <img src="../assets/images/search.svg" alt="">
                <input type="text" placeholder="Поиск...">
            </form>
            <img src="../assets/images/avatar.svg" alt="" class="header__avatar">
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    border-radius:  0 0 50px 50px;
    border-bottom: 1px solid #00000033;
    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 46px 85px;
    }

    &__form {
        background: linear-gradient(90deg, rgba(32, 221, 181, 0.35) 5.29%, rgba(20, 157, 128, 0.35) 61.54%);
        width: 412px;
        padding: 15px 18px;
        border-radius: 20px;
        gap: 11px;

        display: flex;
        align-items: center;

        & img {
            cursor: pointer;
        }
        & input {
            background: none;
            border: none;
            outline: none;
            font-family: var(--MM400);
            font-size: 20px;
            color: white;
            width: 100%;

            &::placeholder {
                font-family: var(--MM400);
                font-size: 20px;
                color: white;
            }
        }
    }
}
</style>