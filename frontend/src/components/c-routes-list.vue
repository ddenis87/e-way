<template>
    <v-card class="c-routes-list w-100 overflow-y-auto">
        <v-card-item class="position-sticky top-0 border-b-sm" style="z-index: 1; background-color: #ffffff">
            <div class="title d-flex justify-space-between align-center">
                <span>Ваши маршруты</span>
                <v-btn :ripple="false"
                       size="large"
                       density="compact"
                       variant="text"
                       icon>
                    <v-icon icon="mdi-plus-thick"></v-icon>
                </v-btn>
            </div>

        </v-card-item>
<!--        <v-divider class="mt-2 mb-0"/>-->
        <v-sheet class="pa-4 d-flex flex-column ga-4">
            <template v-for="route in routeCardsState.routes" :key="route.id">
                <c-routes-list-item :route="route"></c-routes-list-item>
            </template>
        </v-sheet>
    </v-card>
</template>

<script setup lang="ts">
    import {useRoutesListManager} from '../services/RoutesListManager.ts';
    import CRoutesListItem from './c-routes-list-item.vue';

    const {state: routeCardsState} = useRoutesListManager();

</script>

<style scoped lang="scss">
    .c-routes-list {
        overflow-y: scroll;
    }
</style>