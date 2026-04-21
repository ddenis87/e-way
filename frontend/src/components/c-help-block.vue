<template>
    <div class="help-block d-flex align-start ga-2">
        <v-icon
            v-if="icon"
            class="icon"
            :icon="icon"
        /><span class="help-text"><slot /></span>
    </div>
</template>

<script setup lang="ts">
    import {defineProps} from 'vue';

    type CHelpBlockProps = {
        icon?: string;
    };

    const props = defineProps<CHelpBlockProps>();
    const icon = props.icon;
</script>

<style scoped lang="scss">
    .help-block {
        font-size: 14px;
        color: grey;

        .icon {
            margin-top: 1px;
        }
    }
</style>