export const oneOffEvents = [
    {
        id: 6,
        label: 'Soirée pizza entre nous',
        flat_id: 1,
        categories: [{
            id: 84,
            label: 'Soirées',
            color: '#CC85FF',
            weight: 4,
            type: 'events',
            total: null,
        },],
        start_date: 1590085800000, // 21 mai 2020 à 20h30:00
        end_date: null,
        interval: null,
        duration: 3600000,
    },
    {
        id: 10,
        label: 'Réussir le jury',
        flat_id: 1,
        categories: [{
            id: 82,
            label: 'École',
            color: '#007377',
            weight: 3,
            type: 'events',
            total: null,
        },],
        start_date: 1592461800000, // 18 juin 2020 à 8h30:00
        end_date: null,
        interval: null,
        duration: 3600000,
    },
    {
        id: 11,
        label: 'Anniversaire Karl Marx',
        flat_id: 1,
        categories: [],
        start_date: 1588629600000, // 05 mai 2020 à 0h00:00
        end_date: null,
        interval: null,
        duration: 3600000,
    },
];

export const recurringEvents = [
    {
        id: 1,
        label: 'Récurer la baignoire',
        flat_id: 1,
        categories: [{
            id: 85,
            label: 'Ménage',
            color: '#FFD378',
            weight: 1,
            type: 'events',
            total: null,
        },],
        start_date: 1586889591000, // 14 avril 2020 à 20h39:51
        end_date: null,
        interval: 1814400000, // tous les 21 jours
        duration: 3600000,
    },
    {
        id: 2,
        label: 'Sortir les poubelles',
        flat_id: 1,
        categories: [{
            id: 85,
            label: 'Ménage',
            color: '#FFD378',
            weight: 1,
            type: 'events',
            total: null,
        },],
        start_date: 1586803191000, // 13 avril 2020 à 20h39:51
        end_date: null,
        interval: 604800000, // tous les 7 jours
        duration: 3600000,
    },
    {
        id: 3,
        label: 'Soirée Hunger Games',
        flat_id: 1,
        categories: [{
            id: 84,
            label: 'Soirées',
            color: '#CC85FF',
            weight: 4,
            type: 'events',
            total: null,
        },],
        start_date: 1587888000000, // le 26 avril 2020 à 10h00:00
        end_date: 1589097600000, // le 10 mai 2020 à 10h00:00
        interval: 604800000, // tous les 7 jours
        duration: 3600000,
    },
    {
        id: 4,
        label: 'Laver la cuisine',
        flat_id: 1,
        categories: [{
            id: 85,
            label: 'Ménage',
            color: '#FFD378',
            weight: 1,
            type: 'events',
            total: null,
        },],
        start_date: 1590066000000, // 21 mai 2020 à 15h
        end_date: null,
        interval: 1209600000, // tous les 14 jours
        duration: 3600000,
    },
    {
        id: 8,
        label: 'Payer loyer',
        flat_id: 1,
        categories: [
            {
                id: 87,
                label: 'Transactions',
                color: '#228539',
                weight: 2,
                type: 'events',
                total: null,
            },],
        start_date: 1586070000000, // 5 avril 2020 à 9h00:00
        end_date: null,
        interval: 2592000000, // tous les 30 jours
        duration: 3600000,
    },
    {
        id: 9,
        label: 'Payer les charges',
        flat_id: 1,
        categories: [
            {
                id: 87,
                label: 'Transactions',
                color: '#228539',
                weight: 2,
                type: 'events',
                total: null,
            },],
        start_date: 1586070000000, // 5 avril 2020 à 9h00:00
        end_date: null,
        interval: 2592000000, // tous les 30 jours
        duration: 3600000,
    },
    {
        id: 14,
        label: 'Profiter des vacances',
        flat_id: 1,
        categories: [],
        start_date: 1593554400000, // 1 juillet 2020 à 0h00:00
        end_date: 1596232799000, // 31 juillet 2020 à 23h59:59
        interval: 86400000, // tous les jours
        duration: 3600000,
    },
];
