import { configureStore } from "@reduxjs/toolkit";
import Myslicer  from "./Createslicer";

export const Mystores=configureStore({
    reducer:{
        counter:Myslicer,
    }
})
