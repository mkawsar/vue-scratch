<template>
    <div class="container">
        <div class="row">
            <p>Hello world</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    mounted() {
        this.$store.dispatch("userStore/profile");
    }
};
</script>
