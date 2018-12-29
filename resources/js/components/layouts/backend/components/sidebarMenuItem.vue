<template>
    <div>
        <li class="active selected" v-for="(route, index) in routes" :key="index">
            <a href="#" @click.prevent="goToRoute(route.name)">
                <span class="has-icon">
                    <i class="icon-chat_bubble_outline"></i>
                </span>
                <span class="nav-title">{{ route.meta.title }}</span>
            </a>
        </li>
    </div>
</template>

<script>
export default {
    props: ['routes'],
    methods: {
        goToRoute(routeName){
            return this.$router.push({ name: routeName })
        }
    }
}
</script>

