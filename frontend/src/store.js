import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {},
    middleware: (getDefualtMiddleware) => getDefualtMiddleware(),
    devTools: true,
});

export default store;
