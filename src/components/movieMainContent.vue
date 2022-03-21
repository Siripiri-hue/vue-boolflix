<template>
    <main>
        <Search @search-film="fetchMovie" />
        
        <!-- <h2>Movies</h2> -->
        <section id="movies-wrapper">
            <!-- <Movie v-for="movie in movies" :key="movie.id" :movie="movie" /> -->
            <Card v-for="show in movies" :key="show.id" :show="show" />
        </section>

        <!-- <h2>Tv Show</h2> -->
        <section id="series-wrapper">
            <Card v-for="show in series" :key="show.id" :show="show" />
        </section>
    </main>
</template>

<script>
import axios from "axios"
import Search from './searchMovie.vue'
// import Movie from './movieCard.vue'
// import tvShow from './seriesCard.vue'
import Card from './cardShow.vue'

export default {
    components: {
        Search,
        // Movie,
        // tvShow,
        Card,
    },

    data() {
        return {
            movies: [],
            series: [],
        }
    },

    methods: {
        fetchMovie: function(inputResearch) {
            axios.get(`https://api.themoviedb.org/3/search/movie/`, {
                params: {
                    api_key: 'f511c6c384d66a3daf9eef04127c3c77',
                    query: inputResearch,
                    language: 'it-IT',
                }
            })
            .then ( (response) => {
                console.log(response.data);
                // const title = response.data.title;
                // const originalTitle = response.data.original_title;
                // const language = response.data.original_language;
                // const rating = response.data.vote_average;
                this.movies = response.data.results;
                console.log(this.movies);
            })

            axios.get(`https://api.themoviedb.org/3/search/tv/`, {
                params: {
                    api_key: 'f511c6c384d66a3daf9eef04127c3c77',
                    query: inputResearch,
                    language: 'it-IT',
                }
            })
            .then ( (response) => {
                console.log(response.data);
                this.series = response.data.results;
                console.log(this.series);
            })
        },
    },
}
</script>

<style lang="scss" scoped>

main {
    height: 100vh;
    background-color: rgb(49, 49, 49);
    color: white;
    padding: 13vh 10px 50px;
    flex-grow: 1;
    overflow: auto;

    h2 {
        font-family: 'Quintessential', cursive;
        color: white;
    }

    #search {
        position: fixed;
        top: 20px;
        right: 25px;
        z-index: 999;
    }

    #movies-wrapper, #series-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        // border: 1px solid lightgreen;
    }

    #movies-wrapper::after {
        content: "";
        display: block;
        border-bottom: 2px solid lightgreen;
        width: 50%;
        margin: 40px 0;
    }
}
</style>