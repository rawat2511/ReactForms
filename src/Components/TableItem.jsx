import React from 'react'

export const TableItem = (props) => {
    const {id, name, age, address, dept, salary, married, photo} = props.item;
  return (
    <tr>
        <td>{id}.</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{dept}</td>
        <td>{salary}</td>
        <td>{married.toString() }</td>
        <td>
            <img style={{height: "80px", width: "80px"}} src={photo} alt={name} />
        </td>
        <td>
            <button onClick={() => props.handelDelete(id)}>DELETE</button>
        </td>
    </tr>
  )
}
