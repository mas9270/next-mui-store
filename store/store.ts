import { configureStore } from '@reduxjs/toolkit'
import appLanguageSlice from './slices/appLanguage'
import appThemeSlice from './slices/appTheme'

export const makeStore = () => {
  return configureStore({
    reducer: {
      appLanguage: appLanguageSlice,
      appTheme: appThemeSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']