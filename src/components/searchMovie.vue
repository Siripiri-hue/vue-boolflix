<template>
    <div id="search">
        <input type="text" placeholder="Type to search" v-model="searchedMovie"
        @keyup.enter="searchMovie()">
        <button @click="searchMovie()">Go</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchedMovie: '',
        }
    },

    methods: {
        searchMovie: function() {
            this.$emit('search-film', this.searchedMovie);
            this.searchedMovie = '';
        },
    },
    
}
</script>

<style lang="scss" scoped>

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

</style>