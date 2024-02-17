// store.js
import { configureStore } from '@reduxjs/toolkit';
import { api} from './api/transactionApi'

export const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export { 
    useGetTransactionsQuery, 
} from './api/transactionApi'

export default store;
