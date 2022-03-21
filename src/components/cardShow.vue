<template>
    <div class="card">
        <figure>
            <img v-if="(show.poster_path == null)" src="../assets/img/imagenotfound.jpg">
            <img v-else :src="`https://image.tmdb.org/t/p/w185${show.poster_path}`">
            <figcaption> 
                <!-- <p class="title">Titolo: {{ show.title }}</p> <p>Titolo: {{ serie.name }}</p> -->
                <!-- <p class="title" v-if="(show.title) ? show.title : show.name "></p>  -->
                <p class="title">Titolo: {{ show.title || show.name }}</p>
                <!-- <p class="original-title">Titolo originale: {{ show.original_title }}</p> <p>Titolo originale: {{ serie.original_name }}</p> -->
                <!-- <p class="original-title" v-if="(show.original_title) ? show.original_title : show.original_name "></p> -->
                <p class="original-title"> Titolo originale: {{ show.original_title || show.original_name }}</p>
                <p class="original-lang">Lingua originale: {{ show.original_language }} <img class="flag" :src="flags[show.original_language]" alt=""></p>
                <p class="avg-vote">Voto: <font-awesome-icon v-for="i in 5" :key="i" :icon="(i < roundUpVotes) ? ' fa-star fa-solid' : 'fa-star fa-regular'" /></p>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    props: {
        show: {
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
                es: require('../assets/img/flags/SPAN0001.gif'),
                pt: require('../assets/img/flags/PORT0001.gif'),
                fr: require('../assets/img/flags/FRAN0001.gif'),
            },
        }
    },

    computed: {
        roundUpVotes: function() {
            return Math.ceil(this.show.vote_average) / 2;
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
        position: relative;

        figcaption {
            display: none;

            .flag {
                width: 20px;
            }
        }

        &:hover {
            

            figcaption {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba($color: #000000, $alpha: 0.6);
            }
        }
    }
}

</style>