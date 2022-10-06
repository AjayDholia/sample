import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../table/table";

const TableData = ({ country, seachData }) => {
  const [dataList, setDataList] = useState([]);
  const [dataList1, setDataList1] = useState([]);

  const getCountryData = async (id) => {
    try {
      let data = await axios.get(
        "http://universities.hipolabs.com/search?country=" + `${id}`
      );
      console.log(`data`, data.data);

       setDataList(data.data);
      setDataList1(data.data);
    } catch (err) {
      console.log(`err`, err);
    }
  };

  useEffect(() => {
    getCountryData(country);
  }, [country]);

  useEffect(() => {
    let newData = dataList.filter((ele) => {
      //   ele.name.indexOf(seachData);
      return ele.name.toLowerCase().includes(seachData.toLowerCase());
    });
    setDataList1(newData);
  }, [seachData]);

  return (
    <div style={{width:"90%",
    marginLeft:"5%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    marginTop : "3%"}}>

      <table style={{    width: "100%"}}>
        <thead style={{backgroundColor:"lightgray"}}>
          <th style={{width:"40%"}} >College Name</th>
          <th>State</th>
          <th>Visit college Website</th>
        </thead>
        <tbody>
          {dataList1?.map((ele) => {
            return (
              <Table
                name={ele.name}
                state={ele["state-province"]}
                link={ele["web_pages"][0]}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;