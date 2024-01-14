import { useState } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/layout';
import Categories from './categories/Categories';
import Product from './product/product';
import Brand from './brands/brand';
import Subcategory from './SubCategory/subcategory';

function App() {
  const isRoder = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/Categories",
          element: <Categories />,
        },
        {
          path: "/Product",
          element: <Product />,
        },
        {
          path: "/Brand",
          element: <Brand />,
        },
        {
          path: "/Subcategory",
          element: <Subcategory />,
        },
      ],
    },
  ]);
  return <RouterProvider router={isRoder} />;
}

export default App
