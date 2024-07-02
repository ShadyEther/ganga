"use client"

import { Container, Link, List, Stack } from '@mui/material'
import React from 'react'
import PaginationComponent from './_components/PaginationComponent'
import CategoryListComponent from './_components/CategoryListComponent'
import ProductList from './_components/ProductList'

import FilterListComponent from './_components/FilterListComponent'

function Products() {
  return (
    <>
    {/* <CategoryListComponent/> */}
    <Container
      sx={{
        display:'flex',
      }}  
    >
      <FilterListComponent/>
      <ProductList/>
    </Container>
    <PaginationComponent/>
    
    </>
  )
}

export default Products