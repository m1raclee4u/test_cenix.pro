<script>
export default {
    
}
</script>

<template>
    <header>
        <h1>
            Тестовое задание
        </h1>
        <button @click="$store.commit('posts/SET_VISIBLE_ADD_POP_UP')">
            Добавить пост
        </button>
    </header>
</template>

<style lang="scss" scoped>
header{
    position: fixed;
    left: 0;
    z-index: 10;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid #3688FF;
    h1{
        font-size: 32px;
    }
    
}
</style>
