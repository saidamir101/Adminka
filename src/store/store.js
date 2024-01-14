import { configureStore } from "@reduxjs/toolkit";
import redus from "../redus/redus";

export const store = configureStore({
    reducer: {
        redus
    }
})