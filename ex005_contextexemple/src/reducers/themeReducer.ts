import { ReducerActionType } from "../types/reducerActionType";

export type ThemeType = {
    status: 'dark' | 'light';
}

export const themeInitialState: ThemeType = {
    status: "light",
}

export const themeReducer = (state: ThemeType, action: ReducerActionType) => {
    switch(action.type) {
        case 'CHANGE_STATUS':
            return {...state, status: action.payload.status};
        break;
    }
    return state;
}