
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type lang = "en" | "fa" | null

interface appLanguage {
    lang?: {
        name: lang,
        rtl: boolean
    }
}

const initialState: appLanguage = {
    lang: undefined
}

export const appLanguageSlice = createSlice({
    name: 'app-language',
    initialState,
    reducers: {
        switchLanguage: (state, action: PayloadAction<appLanguage>) => {
            state.lang = action.payload.lang
        }
    }
})

export const { switchLanguage } = appLanguageSlice.actions
export default appLanguageSlice.reducer