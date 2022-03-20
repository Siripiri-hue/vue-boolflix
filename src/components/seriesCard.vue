<template>
    <div class="card">
        <figure>
            <!-- <img :src="`https://themoviedb.org${movie.poster_path}`" alt=""> -->
            <figcaption>
                <p>Titolo: {{ serie.name }}</p>
                <p>Titolo originale: {{ serie.original_name }}</p>
                <p>Lingua originale: {{ serie.original_language }}</p>
                <p>Voto: {{ serie.vote_average }}</p>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    props: {
        serie: {
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