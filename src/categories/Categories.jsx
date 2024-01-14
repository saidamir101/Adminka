import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addCategory, delcategories, eddCategory, getcategories } from '../zapros/zapros'


import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";



import { handlechange } from '../redus/redus';


 
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
  height: 280,
   
};

function Categories() {
  const dispatch=useDispatch()
  const datacategories = useSelector((store) => store.redus.datacategories);
  const inpcategories1 = useSelector((store) => store.redus.inpcategories1);
  const eddcategories = useSelector((store) => store.redus.eddcategories);
  

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [addimg, setAddimg] = useState(null);
  const [eddimg, setEddimg] = useState(null);
  const [eddid, setEddid] = useState(0);
  console.log(eddid);

  const handelChangeImg = async (e) => {
    setAddimg(e.target.files[0]);
  };
  
  const handleSubmit = () => {
    if (addimg && inpcategories1) {
      const form = new FormData();
      form.append("CategoryImage", addimg);
      form.append("CategoryName", inpcategories1);

      dispatch(addCategory(form));
    } else {
      console.error("Image and text are required for adding a category");
    }
  };
  // eddit
    const handelChangeeddImg = async (e) => {
      setEddimg(e.target.files[0]);
  };
  
   const handleSubmit1 = () => {
     if (eddimg && eddcategories && eddid) {
       const form = new FormData();
       form.append("CategoryImage", eddimg);
       form.append("CategoryName", eddcategories);
       form.append("Id", eddid);

       dispatch(eddCategory(form));
     } else {
       console.error("Image and text are required for adding a category");
     }
  };
  


  
  useEffect(() => {
    dispatch(getcategories());
  },[dispatch])
  return (
    <>
      <section className="py-[2%] ml-[150px] w-[100%] ">
        <div className="flex justify-end my-[1%] px-[8%] gap-5 items-center">
          <button onClick={handleOpen}>
            <AddIcon sx={{ fontSize: "40px" }} />
          </button>
          <button onClick={handleOpen1} className="">
            <EditOutlinedIcon sx={{ fontSize: "30px" }} />
          </button>
        </div>
        <div className="grid grid-cols-4 justify-between  px-[5%] gap-5 ">
          {datacategories.map((el) => {
            return (
              <div className="flex  flex-col  items-center  gap-2">
                <img
                  className="w-[200px]"
                  src={`${import.meta.env.VITE_APP_FILES_URL}${
                    el.categoryImage
                  }`}
                  alt=""
                />
                <div className="flex flex-col gap-5">
                  <h1>{el.categoryName}</h1>
                  <button onClick={() => dispatch(delcategories(el.id))}>
                    <DeleteOutlineTwoToneIcon />
                  </button>
                </div>
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
                placeholder="img"
                onChange={handelChangeImg}
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="file"
              />
              <input
                placeholder="text"
                value={inpcategories1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "inpcategories1",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <button
                onClick={() => {
                  // dispatch(
                  //   addcategories({
                  //     "CategoryImage": inpcategories,
                  //     "CategoryName": inpcategories1,
                  //   })
                  // )
                  handleSubmit(), handleClose(false);
                }}
                className="p-[2%] bg-[#7bff00] text-white"
              >
                Добавить
              </button>
            </div>
          </Box>
        </Modal>
        {/* edit  */}
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex flex-col items-center gap-5 ">
              <h1 className="text-[20px] text-[#7bff00]">Изменить</h1>
              <select
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                name=""
                id=""
                onChange={(event) => setEddid(event.target.value)}
              >
                <option value="">all</option>
                {datacategories.map((el) => {
                  return <option value={el.id}>{el.id}</option>;
                })}
              </select>
              <input
                placeholder="img"
                onChange={handelChangeeddImg}
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="file"
              />
              <input
                placeholder="text"
                value={eddcategories}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "eddcategories",
                      settype: e.target.value,
                    })
                  )
                }
                className="border-[1px] w-[70%] border-[#7bff00] h-[40px]  "
                type="text"
              />
              <button
                onClick={() => {
                  // dispatch(
                  //   addcategories({
                  //     "CategoryImage": inpcategories,
                  //     "CategoryName": inpcategories1,
                  //   })
                  // )
                  handleSubmit1(), handleClose1(false);
                }}
                className="p-[2%] bg-[#7bff00] text-white"
              >
                Изменить
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Categories