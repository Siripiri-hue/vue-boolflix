<template>
    <div class="card">
        <figure>
            <img v-if="(serie.poster_path == null)" src="../img/imagenotfound.jpg">
            <img v-else :src="`https://image.tmdb.org/t/p/w185${serie.poster_path}`">
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