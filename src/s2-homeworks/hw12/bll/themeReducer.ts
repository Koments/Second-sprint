const initState = {
    themeId: 1,
}

export type StateType = {
    themeId: number
}

// type ChangeThemeIdType = {
//     type: 'SET_THEME_ID'
//     id: number
// }

export const themeReducer = (state = initState, action: ChangeThemeIdActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return { ...state, themeId: action.id }
        }
        default:
            return state
    }
}

type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any