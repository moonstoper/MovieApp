import React from 'react'
import  Pagination  from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const CustomPagination = ({setPage,noOfPages = 10}) => {
    
    const darkTheme=createMuiTheme({
        palette:{
            type:'dark'
        }
    })

    const handlePageChange=(page) =>{
        setPage(page)
        window.scroll(0,0)
    }
    return (
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent:"center",
            marginTop:10,
        }} 
        >
            <ThemeProvider theme={darkTheme}>
            <Pagination
            count={noOfPages} 
            onChange={(e)=>handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
            color ="secondary"
            />
            </ThemeProvider>
          
        </div>
    )
}

export default CustomPagination
