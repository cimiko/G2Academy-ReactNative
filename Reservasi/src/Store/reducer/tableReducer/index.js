import { ADD_TABLE, BOOKING_TABLE, PAY_TABLE } from '~/Store/constant'
import { imgTable } from '~/Asset/img'

const tabelState = [
    {
        id: 1,
        name: 'Meja 1',
        person: 2,
        image: imgTable,
        status: false
    },
    {
        id: 2,
        name: 'Meja 2',
        person: 2,
        image: imgTable,
        status: false
    }, {
        id: 3,
        name: 'Meja 3',
        person: 2,
        image: imgTable,
        status: false
    }, {
        id: 4,
        name: 'Meja 4',
        person: 2,
        image: imgTable,
        status: false
    }, {
        id: 5,
        name: 'Meja 5',
        person: 2,
        image: imgTable,
        status: false
    }, {
        id: 6,
        name: 'Meja 6',
        person: 2,
        image: imgTable,
        status: false
    }, {
        id: 7,
        name: 'Meja 7',
        person: 2,
        image: imgTable,
        status: false
    }, {
        id: 8,
        name: 'Meja 8',
        person: 2,
        image: imgTable,
        status: false
    }
]

function tableReducer(state = tabelState, action) {
    switch (action.type) {
        case ADD_TABLE:
            return state
        case BOOKING_TABLE:
            const reserve = [...state]
            reserve[action.payload].status = true
            return reserve
        case PAY_TABLE:
            const available = [...state]
            available[action.payload].status = false
            return available
        default:
            return state
    }
}

export { tableReducer, tabelState }