import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {   addsubcategories,  delsybcat,   eddsubcategories,  getsubcategory } from "../zapros/zapros";

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
  width: 350,

  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  //   height: 280,
};

function Subcategory() {
    const dispatch = useDispatch();
    const datasubcategory = useSelector((store) => store.redus.datasubcategory);
    const inpsubadd = useSelector((store) => store.redus.inpsubadd);
    const inpsubadd1 = useSelector((store) => store.redus.inpsubadd1);
    const inpeddbrand1 = useSelector((store) => store.redus.inpeddbrand1);
    const inpeddsubcat = useSelector((store) => store.redus.inpeddsubcat);
    const inpeddsubcat1 = useSelector((store) => store.redus.inpeddsubcat1);
    const inpeddsubcat2 = useSelector((store) => store.redus.inpeddsubcat2);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // modalledd
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    useEffect(() => {
      dispatch(getsubcategory());
    }, [dispatch]);
  return (
    <div className="ml-[180px]">
      <section className=" mx-auto ">
        <div className="flex justify-end my-[1%] gap-5 items-center">
          <button className="">
            <AddIcon onClick={handleOpen} sx={{ fontSize: "40px" }} />
          </button>
          <button
            onClick={() => {
              setOpen1(true);
            }}
            className=""
          >
            <EditOutlinedIcon sx={{ fontSize: "30px" }} />
          </button>
        </div>
        <div className="grid gap-10   items-center grid-cols-4">
          {datasubcategory.map((el) => {
            return (
              <div className="flex py-[5%] flex-col w-[250px] justify-between shadow-sm shadow-black h-[200px]   items-center gap-2">
                {/* <img
                      className="w-[50%]"
                      src={`${import.meta.env.VITE_APP_FILES_URL}${
                        el.categoryImage
                      }`}
                      alt=""
                    /> */}

                <div className="flex gap-1 ">
                  <p>{el.id}</p>
                  <h1>{el.subCategoryName}</h1>
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
            <div className="flex flex-col items-center gap-5 ">
              <h1 className="text-[20px] text-[#7bff00]">Добавить</h1>
              <input
                placeholder="categoriesID"
                value={inpsubadd}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "inpsubadd",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="SubCategoryName"
                value={inpsubadd1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "inpsubadd1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <button
                onClick={() => {
                  dispatch(addsubcategories({ inpsubadd, inpsubadd1 })),
                    handleClose(false);
                }}
                className="p-[2%] bg-[#7bff00] text-white"
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
            <div className="flex flex-col items-center gap-5 ">
              <h1 className="text-[20px] text-[#7bff00]">Изменить</h1>
              <input
                placeholder="id"
                value={inpeddsubcat}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "inpeddsubcat",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="categoryID"
                value={inpeddsubcat1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "inpeddsubcat1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <input
                placeholder="subcategoryName"
                value={inpeddsubcat2}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "inpeddsubcat2",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <button
                onClick={() => {
                  dispatch(
                    eddsubcategories({
                      inpeddsubcat,
                      inpeddsubcat1,
                      inpeddsubcat2,
                    })
                  ),
                    handleClose1(false);
                }}
                className="p-[2%] bg-[#7bff00] text-white"
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

export default Subcategory