<template>
    <div id="loader" v-show="state" ref="loader">
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'loader',
        props: {
            duration: {
                default: 5,
                type: Number
            },
            state: {
                default: true,
                type: Boolean
            }
        },
        computed: {},
        data() {
            return {
                // loading : this.state
            }
        },
        mounted() {
            document.body.classList.add("loading");
        },
        watch: {
            state: function () {
                if (this.state === true) {
                    console.log("caché !");
                    document.body.classList.add("loading");
                } else {
                    console.log("montré");
                    document.body.classList.remove("loading");
                }
            }
        }
    };
</script>