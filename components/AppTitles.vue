<template>
<div>
    <h1 class="title" :data-cy="data_cy">{{maintitle}}</h1>
    <h2 class="subtitle">{{subtitle}}</h2>
</div>
</template>

<script>
export default {
    name: "AppTitles",
    props: ['maintitle', 'subtitle', 'data_cy']
}
</script>
