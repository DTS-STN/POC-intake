<template>
<div>
    <h1 class="title" :data-cy="CypressName">{{MainTitle}}</h1>
    <h2 class="subtitle">{{SubTitle}}</h2>
</div>
</template>

<script>
export default {
    name: "AppTitles",
    props: ['MainTitle', 'SubTitle', 'CypressName']
}
</script>
