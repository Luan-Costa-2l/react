import { useReducer, createContext } from "react";
import { UserType, userInitialState, userReducer } from "../reducers/userReducer";
import { themeReducer, themeInitialState, ThemeType } from '../reducers/themeReducer'
import { ReducerActionType } from "../types/reducerActionType";

type initialStateType = {
    user: UserType;
    theme: ThemeType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

type ContextProviderType = {
    children: React.ReactNode;
}

const initialState = {
    user: userInitialState,
    theme: themeInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: ReducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
})

export const ContextProvider = ({ children }: ContextProviderType) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
}