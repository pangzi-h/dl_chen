<template>
    <div class="container">
        <Header class="header">
            <slot name="header"></slot>
        </Header>
        <main class="main">
            <slot></slot>
        </main>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {Header, Footer},
}
</script>

<style scoped>
.container {
    box-sizing: border-box;
    height: 100vh;
    background-image: url('@/assets/bg.png');
    background-size: 100% 100%;
    color: #ea5711;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
        width: 90%;
        height: auto;
    }

    .main {
        box-sizing: border-box;
        padding: 20px;
        width: 90%;
        height: 100%;
    }

    .footer {
        width: 90%;
        height: auto;
    }
}
</style>