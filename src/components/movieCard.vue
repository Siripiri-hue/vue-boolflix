<template>
    <div class="card">
        <figure>
            <!-- <img :src="`https://api.themoviedb.org${movie.poster_path}`" alt=""> -->
            <figcaption>
                <p>Titolo: {{ movie.title }}</p>
                <p>Titolo originale: {{ movie.original_title }}</p>
                <p>Lingua originale: {{ movie.original_language }}</p>
                <p>Voto: {{ movie.vote_average }}</p>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
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
            color: lightblue;
        }
    }
}

</style>