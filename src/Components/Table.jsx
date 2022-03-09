import React from 'react'
import { TableItem } from './TableItem'

export const Table = (props) => {
    console.log("Inside Table : ", props.data);
    const {sort, filter} = props.sortFilter;
    console.log(sort, filter , "Sort>filter")
  return (
    <div>
        <h1>Table</h1>
        <table border='1' style={{margin: "0px auto"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Married</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.filter(({dept}) => {
                        console.log("Dept : ", dept);
                        console.log("Fiter : ", filter);
                        return (filter === "all") ? true : (dept === filter) ? true : false
                    }).
                    sort((a,b) => (sort === "none") ? 0 : (sort === "ascending") ? (a.salary-b.salary) : (b.salary-a.salary)).
                    map((item) => <TableItem key={item.id} item={item} handelDelete={props.handelDelete} />)
                }
            </tbody>
        </table>
    </div>
  )
}
