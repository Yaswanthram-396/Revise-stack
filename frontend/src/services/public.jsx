import React from 'react';

const url = process.env.REACT_APP_API_URL;

export const getBooks=async()=>{
    console.log(url)
    try{
        const response=await fetch(`${url}/books`);
        const data=await response.json();
        return data.data;
    }
    catch(e){
        return e; 
    }
}