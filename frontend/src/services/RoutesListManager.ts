import {reactive} from 'vue';
import type {RoutesListItemCard} from './RoutesListItemManager.ts';

export type RoutesListState = {
    routes: RoutesListItemCard[];
};

const state = reactive<RoutesListState>({
    routes: [
        {id: 1, departure: 'Березовка', destination: 'Благовещенск', departureDataTime: new Date(), totalSeats: 2, status: 1},
        {id: 2, departure: 'Ивановка', destination: 'Благовещенск', departureDataTime: '2026-04-24 12:00:00', totalSeats: 1, status: 1},
        {id: 3, departure: 'Благовещенск', destination: 'Березовка', departureDataTime: '2026-04-25 18:30:00', totalSeats: 3, status: 0},
        {id: 4, departure: 'Благовещенск', destination: 'Березовка', departureDataTime: '2026-04-25 18:30:00', totalSeats: 3, status: 0},
        {id: 5, departure: 'Благовещенск', destination: 'Березовка', departureDataTime: '2026-04-25 18:30:00', totalSeats: 3, status: 0},
    ],
});

function removeCard() {};

function initialize() {};

export function useRoutesListManager() {
    return {
        initialize,
        removeCard,
        state,
    };
};