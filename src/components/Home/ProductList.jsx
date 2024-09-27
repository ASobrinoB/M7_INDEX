import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../contexts/products/ProductContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

import PaypalButton from "./paypal";

export const ProductList = () => {

  const ctx = useContext(ProductContext);
  const { products, getProducts } = ctx;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Descripción</TableCell>
              <TableCell>Especificación</TableCell>
              <TableCell>Precio USD</TableCell>
              <TableCell>Despacho USD</TableCell>
              <TableCell>Peso KG</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.specification}</TableCell>
                <TableCell>{row.priceUSD}</TableCell>
                <TableCell>{row.shippingUSD}</TableCell>
                <TableCell>{row.weightKG}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>
                 <IconButton>
                 <PaypalButton valor={row.priceUSD} />
                 </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
