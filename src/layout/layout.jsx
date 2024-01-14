
import React, { useState } from 'react'
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link, Outlet } from 'react-router-dom';
import Categories from '../categories/Categories';
import Product from '../product/product';
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from 'react-redux';
import { handlechange } from '../redus/redus';
import { regis } from '../zapros/zapros';
import Brand from '../brands/brand';
import Subcategory from '../SubCategory/subcategory';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      // id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Layout() {
  const [value, setValue] = useState(0);
  
  const [modalregis, setModalregis] = useState(false);

  const inpreg = useSelector((store) => store.redus.inpreg);
  const inpreg1 = useSelector((store) => store.redus.inpreg1);

  const dispatch=useDispatch()



      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <div className="flex">
      <Box
        sx={{
          flexGrow: 1,
          // bgcolor: "background.paper",
          display: "flex",
          height: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, height:"100vh", borderColor: "divider",textAlign:"center", position:'fixed'  }}
        >
          <Link to={"/Categories"}>
            <Tab label="Categories" {...a11yProps(0)} />
          </Link>
          <Link to={"/Product"}>
            <Tab sx={{}} label="Product" {...a11yProps(1)} />
          </Link>
          <Link to={"/Brand"}>
            <Tab label="Brand" {...a11yProps(2)} />
          </Link>
          <Link to={"/Subcategory"}>
            <Tab label="SubCategory" {...a11yProps(3)} />
          </Link>
          
          <button
            onClick={() => setModalregis(true)}
            className="text-center text-[grey] text-[16px]"
          >
            Войти
          </button>
        </Tabs>

        <Outlet />
      </Box>
      <div
        style={{ display: modalregis ? "flex" : "none" }}
        className=" bg-[#96919186] fixed justify-center items-center z-20 w-[100%]  h-[100%] "
      >
        <div className="bg-[white]  p-[2%]  w-[28%] h-[55%] ">
          <div className="flex justify-between">
            <h1 className="font-semibold text-[20px]">Вход</h1>
            <button onClick={() => setModalregis(false)}>
              <ClearIcon />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center  h-[80%] gap-5">
            <div className="w-[70%]  flex   flex-col">
              <h1 className="text-[14px] text-[#FEBD1F]">логин</h1>
              <input
                value={inpreg}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "inpreg",
                      settype: e.target.value,
                    })
                  )
                }
                placeholder="Введите логин"
                className="border-[1.5px] focus:border-[#FEBD1F]  outline-none h-[50px] w-[100%]"
                type="text"
              />
            </div>
            <div className="w-[70%]  flex   flex-col">
              <h1 className="text-[14px] text-[] text-[#FEBD1F]">пароль</h1>
              <input
                value={inpreg1}
                onChange={(e) =>
                  dispatch(
                    handlechange({
                      type: "inpreg1",
                      settype: e.target.value,
                    })
                  )
                }
                placeholder="Введите пароль"
                className="border-[1.5px] focus:border-[#FEBD1F] outline-none h-[50px] w-[100%]"
                type="text"
              />
            </div>
            <button
              onClick={() => {
                dispatch(regis({ userName: inpreg, password: inpreg1 })),
                  setModalregis(false);
              }}
              className="px-[20%] h-[20%] rounded-[10px] bg-[#FEBD1F]"
            >
              Вход
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout