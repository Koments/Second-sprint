import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]
            if(action.payload === 'up') {
                return copyState.sort((a, b) => {
                    // Convert names to lowercase for case-insensitive sorting
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();

                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0; // names are equal
                })
            } else {
                return copyState.sort((a, b) => {
                    // Convert names to lowercase for case-insensitive sorting
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();

                    if (nameA > nameB) return -1;
                    if (nameA < nameB) return 1;
                    return 0; // names are equal
                })
            }
        }
        case 'check': {
            return [...state].filter(el => el.age > 18)
        }
        default:
            return state
    }
}
