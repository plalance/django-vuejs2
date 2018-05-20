<template>
    <div>
        <h2>VueJs, bienvenue {{ user }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        data() {
            return {
                user: {},
            }
        },
        created() {
            let datas = this.$root.$data;
            this.user = datas.user;
        },
        computed: {
            exampleComuted() {
                return 'toto';
            }
        },
        beforeMount() {
        },
        mounted() {
            // let url = $.get(Routing.generate('example', {'user_id': 1}));
        },
        watch: {},
        methods: {
            example() {

            }
        }
    }
</script>

<style scoped>

</style>