<script setup lang="ts">
    import {defineProps} from 'vue';

    type CHelpBlockProps = {
        icon: undefined|string;
    };

    const props = defineProps<CHelpBlockProps>();
    const icon = props.icon;

</script>

<template>
    <div class="help-block mt-6 d-flex align-center ga-2">
        <v-icon
            v-if="icon"
            :icon="icon"
        /><span class="help-text"><slot /></span>
    </div>
</template>

<style scoped lang="scss">

</style>