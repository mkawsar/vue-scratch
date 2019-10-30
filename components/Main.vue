<template>
    <div>
        <div id="wrapper" v-if="$route.meta.requireAuth">
            <!-- Navigation -->
            <Left />
            <div id="content-wrapper" class="d-flex flex-column">
                <!-- Main Content -->
                <div id="content">
                    <!-- Topbar Navbar -->
                    <Top />
                    <!-- End of Topbar -->

                    <!-- Begin Page Content -->
                    <router-view></router-view>
                </div>
                <!-- End of Main Content -->
                <Footer />
            </div>
        </div>
        <div id="wrapper" v-if="$route.meta.guest">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Footer from "./lib/Footer.vue";
import Left from "./lib/Left.vue";
import Top from "./lib/Top.vue";
export default {
    name: "Main",
    components: {
        Footer,
        Left,
        Top
    }
};
</script>

<style>
body {
    font-family: "Roboto", sans-serif;
}

h1 {
    text-align: center;
}
</style>
