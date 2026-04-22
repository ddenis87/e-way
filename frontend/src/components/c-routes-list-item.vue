<template>
        <v-card class="c-routes-list-item pa-2" color="blue-lighten-5">
            <v-card variant="flat" :disabled="!Boolean(route.status)" color="blue-lighten-5">
                <div class="status d-flex justify-end ga-2">Статус: <span>{{ statusMap[route.status] }}</span></div>
                <v-divider class="mb-2 mt-2"/>
            <div class="route">
                <span>{{ route.departure }}</span>
                <v-icon icon="mdi-arrow-right-thin"></v-icon>
                <span>{{ route.destination }}</span>
            </div>
            <span>Когда: {{ route.departureDataTime }}</span><br>
            </v-card>
            <v-card-actions class="justify-end align-end">
                <v-btn :ripple="false"
                       size="large"
                       density="compact"
                       variant="text"
                       icon>
                    <v-icon icon="mdi-dots-vertical"></v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
</template>

<script setup lang="ts">
    import type {RoutesListItemCard} from "../services/RoutesListItemManager.ts";

    type CRouteListItem = {
        route: RoutesListItemCard
    };

    const statusMap = {
        0: 'Завершен',
        1: 'Активен',
    };
    const props = defineProps<CRouteListItem>();
    const {route} = props;
</script>

<style scoped lang="scss">
    .c-routes-list-item {
        font-size: 14px;
        .status {
            font-size: 12px;
            span {
                width: 58px;
            }
        }
        .route {
            display: grid;
            grid-template-columns: calc(50% - 14px) 24px calc(50% - 14px);
            gap: 4px;
        }
    }
</style>