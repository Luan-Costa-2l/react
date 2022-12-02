import { ReducerActionType } from "../types/reducerActionType";
export type UserType = {
    name: string;
    age: number;
}

export const userInitialState: UserType = {
    name: '',
    age: 0
}

export const userReducer = (state: UserType, action: ReducerActionType) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name};
        break;
        case 'CHANGE_AGE':
            return {...state, age: action.payload.age};
        break;
    }
    return state;
}