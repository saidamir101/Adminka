import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import { saveToken } from "../utils/token";

 export const getcategories = createAsyncThunk(
  "zapros/getcategories",
  async function () {
      try {
          const { data } = await axiosRequest.get("Category/get-categories");
          return data.data
    } catch (error) {
      console.log(error);
    }
  }
);
export const getproduct = createAsyncThunk(
  "zapros/getproduct",
  async function () {
   try {
     const { data } = await axiosRequest.get("Product/get-products");
     return data.data;
   } catch (error) {
     console.log(error);
   }
  });
 export const getcolor = createAsyncThunk(
   "zapros/getcolor",
   async function () {
     try {
       const { data } = await axiosRequest.get("Color/get-colors");
       return data.data;
     } catch (error) {
       console.log(error);
     }
   }
 );
export const getsubcategory = createAsyncThunk(
  "zapros/getsubcategory",
  async function () {
    try {
      const { data } = await axiosRequest.get("SubCategory/get-sub-category");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
 export const getbrand = createAsyncThunk("zapros/getbrand", async function () {
   try {
     const { data } = await axiosRequest.get("Brand/get-brands");
     return data.data;
   } catch (error) {
     console.log(error);
   }
 });
// export const addcategories = createAsyncThunk(
//   "zapros/addcategories",
//   async function (obj,{dispatch}) {
//     try {
//       const { data } = await axiosRequest.post("Category/add-category",obj);
//       dispatch(getcategories())
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const addCategory = createAsyncThunk(
    "zapros/addCategory",
    async function (form,{dispatch}) {
      try {
        const { data } = await axiosRequest.post("/Category/add-category",form,{
          headers: {
              'Content-Type': 'multipart/form-data'
          },
      });
        dispatch(getcategories());
        console.log(form);
      } catch (error) {
        console.log(error);
      }
    }
);

export const addproduct = createAsyncThunk(
  "zapros/addproduct",
  async function (form, { dispatch }) {
    try {
      const { data } = await axiosRequest.post("Product/add-product", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(getproduct());
    } catch (error) {
      console.log(error);
    }
  }
);

export const eddCategory = createAsyncThunk(
  "zapros/eddCategory",
  async function (form, { dispatch }) {
    try {
      const { data } = await axiosRequest.put(
        "Category/update-category",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(getcategories());
    } catch (error) {
      console.log(error);
    }
  }
);

export const eddproduct = createAsyncThunk(
  "zapros/eddproduct",
  async function (form, { dispatch }) {
    try {
      const { data } = await axiosRequest.put(
        `Product/update-product?Id=${form.idx}&BrandId=${form.brandid1}&ColorId=${form.ColorId}&ProductName=${form.ProductName}&Description=${form.Description}&Quantity=${form.Quantity}&Weight=${form.Weight}&Size=${form.Size}&Code=${form.Code}&Price=${form.Price}&HasDiscount=${form.HasDiscount}&DiscountPrice=${form.DiscountPrice}&SubCategoryId=${form.SubCategoryId}`
        // form,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
      console.log([...form]);
      dispatch(getcategories());
    } catch (error) {
      console.log(error);
    }
  }
);
  
export const addsubcategories = createAsyncThunk(
  "zapros/addsubcategories",
  async function (obj, { dispatch }) {
    try {
      const { data } = await axiosRequest.post(
        `SubCategory/add-sub-category?CategoryId=${obj.inpsubadd}&SubCategoryName=${obj.inpsubadd1}`
      );
      dispatch(getsubcategory());
    } catch (error) {
      console.log(error);
    }
  }
);
export const addbrand = createAsyncThunk(
  "zapros/addbrand",
  async function (obj, { dispatch, getState }) {
    let a =getState().redus.inpbrand;
    try {
      const { data } = await axiosRequest.post(
         `Brand/add-brand?BrandName=${obj}`
      );
      console.log(getState().redus.inpbrand);
      getState.redus.inpbrand=""
      dispatch(getbrand());
      
      
      
      
    } catch (error) {
      console.log(error);
    }
  }
  
);
export const delbrand = createAsyncThunk(
  "zapros/delbrand",
  async function (id, { dispatch }) {
    try {
      const { data } = await axiosRequest.delete(`Brand/delete-brand?id=${id}`);
      dispatch(getbrand());
    } catch (error) {
      console.log(error);
    }
  }
);
export const delsybcat = createAsyncThunk(
  "zapros/delsybcat",
  async function (id, { dispatch }) {
    try {
      const { data } = await axiosRequest.delete(
        `SubCategory/delete-sub-category?id=${id}`
      );
      dispatch(getsubcategory());
    } catch (error) {
      console.log(error);
    }
  }
);
export const delcategories = createAsyncThunk(
  "zapros/delcategories",
  async function (id, { dispatch }) {
    try {
      const { data } = await axiosRequest.delete(
        `Category/delete-category?id=${id}`
      );
      dispatch(getcategories());
    } catch (error) {
      console.log(error);
    }
  }
);
export const eddbrand = createAsyncThunk(
  "zapros/eddbrand",
  async function (obj, { dispatch }) {
    console.log(obj);
    try {
      const { data } = await axiosRequest.put(
        `Brand/update-brand?Id=${obj.inpeddbrand}&BrandName=${obj.inpeddbrand1}`
      );
      dispatch(getbrand());
    } catch (error) {
      console.log(error);
    }
  }
);
export const eddsubcategories = createAsyncThunk(
  "zapros/eddsubcategories",
  async function (obj, { dispatch }) {
    console.log(obj);
    try {
      const { data } = await axiosRequest.put(
        `SubCategory/update-sub-category?Id=${obj.inpeddsubcat}&CategoryId=${obj.inpeddsubcat1}&SubCategoryName=${obj.inpeddsubcat2}`
      );
      dispatch(getsubcategory());
    } catch (error) {
      console.log(error);
    }
  }
)
export const regis = createAsyncThunk(
  "zapros/regis",
  async function (obj, { dispatch }) {
    try {
      const { data } = await axiosRequest.post(`Account/login`, obj);
      saveToken(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);