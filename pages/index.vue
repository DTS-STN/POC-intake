<template>
<div class="container">
    <div>

        <h1 class="title">{{ $t('welcome') }}</h1>

        <div class="w-full max-w-2xl mx-auto">
            <p class="mb-8 text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
                sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc.
            </p>
            <div></div>
        </div>
        <nuxt-link class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" v-for="locale in availableLocales" :key="locale.code" :to="(locale.code) + '/InsertPocPage'" data-cy="start-button">
            {{ $t('getstarted') }}
        </nuxt-link>
        <h2 class="subtitle"></h2>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(i => i.code == this.$i18n.locale);
        }
    }
};
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
