<template>
    <div class="card">
        <figure>
            <img v-if="(movie.poster_path == null)" src="../assets/img/imagenotfound.jpg">
            <img v-else :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`">
            <figcaption>
                <p class="title">Titolo: {{ movie.title }}</p>
                <p class="original-title">Titolo originale: {{ movie.original_title }}</p>
                <p class="original-lang">Lingua originale: {{ movie.original_language }} <img class="flag" :src="flags[movie.original_language]" alt=""></p>
                <p class="avg-vote">Voto: {{ roundUpVotes }}
                    <font-awesome-icon v-for="i in 5" :key="i" :icon="(i < roundUpVotes) ? ' fa-star fa-solid' : 'fa-star fa-regular'" />  
                </p>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
        },
    },

    data() {
        return {
            flags: {
                it: require('../assets/img/flags/ITAL0001.gif'),
                en: require('../assets/img/flags/UNKG0001.gif'),
                au: require('../assets/img/flags/ASTL0001.gif'),
                us: require('../assets/img/flags/UNST0001.gif'),
            },
        }
    },

    computed: {
        roundUpVotes: function() {
            return Math.ceil(this.movie.vote_average) / 2;
        }
    }
}
</script>

<style lang="scss" scoped>

.card {
    border: 1px solid lightcoral;
    padding: 10px;

    figure {
        width: 200px;

        figcaption {
            .flag {
                width: 20px;
            }
        }
    }
}

</style>