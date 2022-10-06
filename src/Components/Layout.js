import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import TableData from "./tableData";

const Layout = () => {
  const [country, setCountry] = useState();
  const [seachData, setSearchData] = useState("");
  const [countryList, setCountryList] = useState([]);

  const getCountry = async () => {
    try {
      let data = await axios.get(
        "http://universities.hipolabs.com/search?country"
      );
      //   console.log(`data`, data.data);
      let lst = data.data.reduce((ans, ele) => {
        return ans.includes(ele.country) ? ans : [...ans, ele.country];
      }, []);

        console.log(`lst`, lst);
      setCountry(lst[0]);
      setCountryList(lst);
    } catch (err) {
      console.log(`err`, err);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <Header
        countryList={countryList}
        country={country}
        setCountry={setCountry}
        setSearchData={setSearchData}
        seachData={seachData}
      />
      <TableData country={country} seachData={seachData} />
    </>
  );
};

export default Layout;