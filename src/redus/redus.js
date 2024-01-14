import { createSlice } from "@reduxjs/toolkit";
import { getbrand, getcategories, getcolor, getproduct, getsubcategory } from "../zapros/zapros";
const redus = createSlice({
  name: "redus",
  initialState: {
    datacategories: [],
    databrand: [],
    datacolor: [],
    dataproduct: [],
    datasubcategory: [],
    inpcategories: "",
    inpcategories1: "",
    eddcategories: "",
    inpreg: "",
    inpreg1: "",
    inpbrand: "",
    inpsubadd: "",
    inpsubadd1: "",
    inpeddbrand: "",
    inpeddbrand1: "",
    inpeddsubcat: "",
    inpeddsubcat1: "",
    inpeddsubcat2: "",
    addprodname: "",
    proddescrip: "",
    prodquantity: "",
    prodweight: "",
    prodsize: "",
    prodcode: "",
    prodprise: "",
    proddiscprise: "",
    // edditproduct
    addprodname1: "",
    proddescrip1: "",
    prodquantity1: "",
    prodweight1: "",
    prodsize1: "",
    prodcode1: "",
    prodprise1: "",
    proddiscprise1: "",
  },
  reducers: {
    handlechange: (state, actions) => {
      state[actions.payload.type] = actions.payload.settype;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getcategories.pending, (state, actions) => {});
    builder.addCase(getcategories.fulfilled, (state, actions) => {
      state.datacategories = actions.payload;
    });
    builder.addCase(getcategories.rejected, (state, actions) => {});
    //brand
    builder.addCase(getbrand.pending, (state, actions) => {});
    builder.addCase(getbrand.fulfilled, (state, actions) => {
      state.databrand = actions.payload;
    });
    builder.addCase(getbrand.rejected, (state, actions) => {});
    //getsubcategory
    builder.addCase(getsubcategory.pending, (state, actions) => {});
    builder.addCase(getsubcategory.fulfilled, (state, actions) => {
      state.datasubcategory = actions.payload;
    });
    builder.addCase(getsubcategory.rejected, (state, actions) => {});
    // getproduct
    builder.addCase(getproduct.pending, (state, actions) => {});
    builder.addCase(getproduct.fulfilled, (state, actions) => {
      state.dataproduct = actions.payload;
    });
    builder.addCase(getproduct.rejected, (state, actions) => {});
    //getcolor
    builder.addCase(getcolor.pending, (state, actions) => {});
    builder.addCase(getcolor.fulfilled, (state, actions) => {
      state.datacolor = actions.payload;
    });
    builder.addCase(getcolor.rejected, (state, actions) => {});
  },
});

export const {handlechange} = redus.actions
export default redus.reducer