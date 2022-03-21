<template>
    <header>
        <h1>Boolflix</h1>
    </header>
</template>

<script>
export default {
    data() {
        return {
            searchedMovie: '',
        }
    }
}
</script>

<style lang="scss" scoped>

header {
    position: fixed;
    height: 10vh;
    width: 100%;
    z-index: 99;

    padding: 15px 10px;

    background-color: rgb(75, 75, 75);

    font-family: 'Ma Shan Zheng', cursive;
    color: #E6271F;
    font-size: 20px;
}

</style>