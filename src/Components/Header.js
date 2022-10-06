import React from 'react'
import { useState } from "react";

import '../Style/header.css'
const Header = ({
  countryList,
  setCountry,
  country,
  setSearchData,
  seachData,
}) => {
  const handleChange = (event) => {
    let newD = event.target.value;
    setCountry(newD);
  };
  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <>
    
      <div>
        <h2>Select Country</h2>
       
        <select
        className='select'
          value={country}
          label="Country"
          onChange={handleChange}
        >
          {countryList?.map((ele) => {
            return (
              <option value={ele} key={ele}>
                {ele}
              </option>
            );
          })}
        </select>
      </div>
      <div className='search'>
        <input
          type="text"
          placeholder="Search College"
          value={seachData}
          onChange={handleSearch}
        />
      </div>
      </>
  );
};

export default Header;