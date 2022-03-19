<template>
    <div class="base-page">
        <Header>
        </Header>
        <div class="divider"/>
        <slot name="body"></slot>
    </div>
</template>

<style lang="less" scoped>
.base-page {

    .divider {
        background: rgba(117, 103, 103, 0.77);
        height: 1px;
        width: 100%;
        margin-top: 70px;
    }
}
</style>

<script lang="ts" setup>
import Header from '../header/Header.vue'</script>