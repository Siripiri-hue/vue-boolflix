<template>
    <header>
        <h1>Boolflix</h1>

        <div id="search">
            <input type="text" placeholder="Type to search">
            <button>Go</button>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');

header {
    font-family: 'Ma Shan Zheng', cursive;
    color: #E6271F;
    display: flex;
    justify-content: space-around;
    height: 10vh;
    background-color: rgb(75, 75, 75);
    font-size: 20px;
    position: fixed;
    width: 100%;
    padding: 15px 10px;

    #search {
        display: flex;
        align-items: center;
        gap: 10px;
        
        input {
            border-radius: 10px;
            padding: 5px;
            border: none;
        }

        button {
            padding: 5px;
            border: none;
            border-radius: 10px;
            text-transform: uppercase;
            font-weight: 500;
        }
    }
}

</style>