import React from 'react';

const TableRow = ({
    ID, 
    IDBook,
    FirstName,
    LastName
}) => {
    return(
        <tr>
            <td>{ID}</td>
            <td>{IDBook}</td>
            <td>{FirstName}</td>
            <td>{LastName}</td>
        </tr>
    )
}

export default TableRow;