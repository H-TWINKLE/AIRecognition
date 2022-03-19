<template>
    <base-page>
        <template v-slot:body>
            <div class="home">
            </div>
        </template>
    </base-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Index'
})
</script>

<style lang="less" scoped>
.home {
    position: fixed;
    top: 20%;
    left: 0;
    width: 60%;
    height: 60%;
    margin-left: 20%;
    background: url("../src/assets/img/school.jpg");
    background-size: 100% 100%;
}
</style>