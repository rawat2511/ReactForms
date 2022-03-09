import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Table } from './Table';

export const Form = () => {

  const [data, setData] = useState({
      married: false,
      dept: "developer"
  });

  const [tableData, setTableData] = useState([]);

  const [sortFilter, setSortFilter] = useState({
      sort: "none",
      filter: "all"
  })

  const handelData = (e) => {
      const {name, value} = e.currentTarget;
      if(name === "married"){
          setData({
              ...data,
              married: e.currentTarget.checked
          })
          return;
      }
      setData({
          ...data,
          [name]: value
      })
  }

  const handelSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post("https://tangy-watery-scion.glitch.me/todos6", data);
      setTableData([...tableData, data]);
  }

  useEffect( async () => {
      const response = (await axios.get("https://tangy-watery-scion.glitch.me/todos6")).data;
      console.log("Response ",response);
      setTableData(response);
  }, [])

  const handelDelete = async (id1) => {
      await axios.delete(`https://tangy-watery-scion.glitch.me/todos6/${id1}`);
      var a = tableData.filter(({id}) => id1 !== id );
      setTableData(a);
  }

  const handelSort = (e) => {
      const {name, value} = e.currentTarget;
      
      setSortFilter({
          ...sortFilter,
          sort: value
      })

  }
  const handelFiler = (e) => {
      const {name, value} = e.currentTarget;
      
      setSortFilter({
          ...sortFilter,
          filter: value
      })

      console.log(sortFilter);

  }
  

  return (
    <div>
        <h1>Fill Form</h1>
        <form onSubmit={handelSubmit} >
            <div>
                <div>
                    <input onChange={handelData} type="text" name="name" id="name" placeholder='Enter name' required />
                </div>
                <div>
                    <input  onChange={handelData} type="number" name="age" id="age" placeholder='Enter age' required />
                </div>
                <div>
                    <input  onChange={handelData} type="text" name="address" id="address" placeholder='Enter address' required />
                </div>
                <div>
                    <select  onChange={handelData} name="dept" id="dept">
                        <option value="Developer">Developer</option>
                        <option value="HR">HR</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Operations">Operations</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>
                <div>
                    <input  onChange={handelData} type="number" name="salary" id="salary" placeholder='Enter salary' required />
                </div>
                <div>
                    <input  onChange={handelData} type="checkbox" name="married" id="married" />Married
                </div>
                <div>
                    <input  onChange={handelData} type="text" name="photo" id="photo" placeholder='Profile Photo URL' required />
                </div>
                <div>
                    <input type="submit" value="SUBMIT" />
                </div>
            </div>

        </form>

        <hr />

        <div>Sort by Salary: 
            <input onChange={handelSort} type="radio" name="order" id="ascending" value="ascending" />Low to high
            <input onChange={handelSort} type="radio" name="order" id="decending" value="decending" />High to low
        </div>
        <div>
            <select  onChange={handelFiler} name="filter" id="filter">
                <option value="all">All</option>
                <option value="developer">Developer</option>
                <option value="HR">HR</option>
                <option value="marketing">Marketing</option>
                <option value="operations">Operations</option>
                <option value="finance">Finance</option>
                <option value="sales">Sales</option>
            </select>
        </div>


        

        <Table data={tableData} sortFilter={sortFilter} handelDelete={handelDelete} />
    </div>
  )
}

