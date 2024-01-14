import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addproduct,
  addsubcategories,
  delsybcat,
  eddproduct,
  eddsubcategories,
  getbrand,
  getcolor,
  getproduct,
  getsubcategory,
} from "../zapros/zapros";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { handlechange } from "../redus/redus";

import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,

  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  //   height: 280,
};

function Product() {
  const dispatch = useDispatch();
  const datasubcategory = useSelector((store) => store.redus.datasubcategory);
  const dataproduct = useSelector((store) => store.redus.dataproduct);
  const databrand = useSelector((store) => store.redus.databrand);
  const datacolor = useSelector((store) => store.redus.datacolor);

  // const inpsubadd = useSelector((store) => store.redus.inpsubadd);
  // const inpsubadd1 = useSelector((store) => store.redus.inpsubadd1);
  // // const inpeddbrand1 = useSelector((store) => store.redus.inpeddbrand1);
  // const inpeddsubcat = useSelector((store) => store.redus.inpeddsubcat);
  // const inpeddsubcat1 = useSelector((store) => store.redus.inpeddsubcat1);
  // const inpeddsubcat2 = useSelector((store) => store.redus.inpeddsubcat2);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // modalledd
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  // addproduct

  const addprodname = useSelector((store) => store.redus.addprodname);
  const proddescrip = useSelector((store) => store.redus.proddescrip);
  const prodquantity = useSelector((store) => store.redus.prodquantity);
  const prodweight = useSelector((store) => store.redus.prodweight);
  const prodsize = useSelector((store) => store.redus.prodsize);
  const prodcode = useSelector((store) => store.redus.prodcode);
  const prodprise = useSelector((store) => store.redus.prodprise);
  const proddiscprise = useSelector((store) => store.redus.proddiscprise);

  const [addimg, setAddimg] = useState(null);
  const [brandid, setBrandid] = useState(0);
  const [colorid, setcolorid] = useState(0);
  const [SubCategoryId, setSubCategoryId] = useState(0);
  const [discout, setDiscout] = useState(true);

  const handelChangeImg = async (e) => {
    setAddimg(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      addimg &&
      brandid &&
      colorid &&
      addprodname &&
      proddescrip &&
      prodquantity &&
      prodweight &&
      prodsize &&
      prodcode &&
      prodprise &&
      discout !== null &&
      SubCategoryId &&
      proddiscprise
    ) {
      const form = new FormData();
      form.append("Images", addimg);
      form.append("BrandId", brandid);
      form.append("ColorId", colorid);
      form.append("ProductName", addprodname);
      form.append("Description", proddescrip);
      form.append("Quantity", prodquantity);
      form.append("Weight", prodweight);
      form.append("Size", prodsize);
      form.append("Code", prodcode);
      form.append("Price", prodprise);
      form.append("HasDiscount", discout);
      form.append("SubCategoryId", SubCategoryId);
      form.append("DiscountPrice", proddiscprise);
      console.log(form.values());
      dispatch(addproduct(form));
    } else {
      console.error("Image and text are required for adding a category");
    }
  };

  // edditproduct

   const addprodname1 = useSelector((store) => store.redus.addprodname1);
   const proddescrip1 = useSelector((store) => store.redus.proddescrip1);
   const prodquantity1 = useSelector((store) => store.redus.prodquantity1);
   const prodweight1 = useSelector((store) => store.redus.prodweight1);
   const prodsize1 = useSelector((store) => store.redus.prodsize1);
   const prodcode1 = useSelector((store) => store.redus.prodcode1);
   const prodprise1 = useSelector((store) => store.redus.prodprise1);
   const proddiscprise1 = useSelector((store) => store.redus.proddiscprise1);

   const [addimg1, setAddimg1] = useState(null);
   const [brandid1, setBrandid1] = useState(0);
   const [idx, setIdx] = useState(0);
   const [colorid1, setcolorid1] = useState(0);
   const [SubCategoryId1, setSubCategoryId1] = useState(0);
  const [discout1, setDiscout1] = useState(true);
  
  const handelChangeImg1 = async (e) => {
    setAddimg1(e.target.files[0]);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (
      addimg1 &&
      brandid1 &&
      colorid1 &&
      addprodname1 &&
      proddescrip1 &&
      prodquantity1 &&
      prodweight1 &&
      prodsize1 &&
      prodcode1 &&
      prodprise1 &&
      discout1 !== null &&
      SubCategoryId1 &&
      proddiscprise1
    ) {
      const form = new FormData();
      form.append("idx", idx);
      form.append("BrandId", brandid1);
      form.append("ColorId", colorid1);
      form.append("ProductName", addprodname1);
      form.append("Description", proddescrip1);
      form.append("Quantity", prodquantity1);
      form.append("Weight", prodweight1);
      form.append("Size", prodsize1);
      form.append("Code", prodcode1);
      form.append("Price", prodprise1);
      form.append("HasDiscount", discout1);
      form.append("SubCategoryId", SubCategoryId1);
      form.append("DiscountPrice", proddiscprise1);
      form.append("Images", addimg1);
      dispatch(eddproduct(form));
      console.log(form.idx);
    } else {
      console.error("Image and text are required for adding a category");
    }
  };
  useEffect(() => {
    dispatch(getproduct());
    dispatch(getbrand());
    dispatch(getcolor());
    dispatch(getsubcategory());
  }, [dispatch]);
  return (
    <div className="ml-[180px]">
      <section className=" mx-auto ">
        <div className="flex justify-end my-[1%] gap-5 items-center">
          <button className="">
            <AddIcon onClick={handleOpen} sx={{ fontSize: "40px" }} />
          </button>
          <button className="">
            <EditOutlinedIcon onClick={handleOpen1} sx={{ fontSize: "30px" }} />
          </button>
        </div>
        <div className="grid gap-10   items-center grid-cols-4">
          {dataproduct?.products?.map((el) => {
            return (
              <div className="flex p-[5%] flex-col w-[250px] justify-between shadow-sm shadow-black    items-center gap-2">
                <img
                  className="w-[50%] h-[100px]"
                  src={`${import.meta.env.VITE_APP_FILES_URL}${el.image}`}
                  alt=""
                />

                <div className="flex gap-1 ">
                  <p>{el.id}</p>
                  <h1>{el.productName}</h1>
                </div>
                <button onClick={() => dispatch(delsybcat(el.id))}>
                  <DeleteOutlineTwoToneIcon />
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="text-[20px] text-center pb-[5%] text-[#7bff00]">
              Добавить
            </h1>
            <div className="grid grid-cols-2  justify-items-center gap-5 ">
              <input
                placeholder="img"
                onChange={handelChangeImg}
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]"
                type="file"
              />
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setBrandid(event.target.value)}
              >
                <option value="">BrandID</option>
                {databrand.map((el) => {
                  return <option value={el.id}>{el.id}</option>;
                })}
              </select>
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setcolorid(event.target.value)}
              >
                <option value="">ColorId</option>
                {datacolor.map((el) => {
                  return <option value={el.id}>{el.id}</option>;
                })}
              </select>
              <input
                placeholder="productName"
                value={addprodname}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "addprodname",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="descriotion"
                value={proddescrip}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "proddescrip",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="Quantity"
                value={prodquantity}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodquantity",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="Weight"
                value={prodweight}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodweight",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="Size"
                value={prodsize}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodsize",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="Code"
                value={prodcode}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodcode",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="PRise"
                value={prodprise}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodprise",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setDiscout(event.target.value)}
              >
                <option value="">HasDiscount</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
              <input
                placeholder="DiscountPrice"
                value={proddiscprise}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "proddiscprise",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setSubCategoryId(event.target.value)}
              >
                <option value="">SubCategoryId</option>
                {datasubcategory.map((el) => {
                  return <option value={el.id}>{el.id}</option>;
                })}
              </select>

              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="p-[1%] w-[70%] bg-[#7bff00] text-white"
              >
                Добавить
              </button>
            </div>
          </Box>
        </Modal>
        {/* modalledd */}
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="text-[20px] text-center pb-[5%] text-[#7bff00]">
              Изменить
            </h1>
            <div className="grid grid-cols-2 justify-center  justify-items-center gap-3 ">
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setIdx(event.target.value)}
              >
                <option value="">idproduct</option>
                {dataproduct?.products?.map((el) => {
                  return <option value={el.id}>{el.id}</option>;
                })}
              </select>
              <input
                placeholder="img"
                onChange={handelChangeImg1}
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]"
                type="file"
              />
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setBrandid1(event.target.value)}
              >
                <option value="">BrandID</option>
                {databrand.map((el) => {
                  return <option value={el.id}>{el.id}</option>;
                })}
              </select>
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setcolorid1(event.target.value)}
              >
                <option value="">ColorId</option>
                {datacolor.map((el) => {
                  return <option value={el.id}>{el.id}</option>;
                })}
              </select>
              <input
                placeholder="productName"
                value={addprodname1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "addprodname1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="descriotion"
                value={proddescrip1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "proddescrip1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="Quantity"
                value={prodquantity1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodquantity1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="Weight"
                value={prodweight1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodweight1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="Size"
                value={prodsize1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodsize1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="Code"
                value={prodcode1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodcode1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="PRise"
                value={prodprise1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "prodprise1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setDiscout1(event.target.value)}
              >
                <option value="">HasDiscount</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
              <input
                placeholder="DiscountPrice"
                value={proddiscprise1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "proddiscprise1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setSubCategoryId1(event.target.value)}
              >
                <option value="">SubCategoryId</option>
                {datasubcategory.map((el) => {
                  return <option value={el.id}>{el.id}</option>;
                })}
              </select>

              <button
                onClick={(e) => {
                  handleSubmit1(e);
                }}
                className="p-[1%] w-[70%] bg-[#7bff00] text-white"
              >
                Изменить
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Product;
