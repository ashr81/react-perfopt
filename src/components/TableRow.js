import React from 'react';

const TableRow = ({
    id, 
    albumId,
    title,
    url
}) => {
    return(
        <tr>
            <td>{id}</td>
            <td>{albumId}</td>
            <td>{title}</td>
            <td>{url}</td>
        </tr>
    )
}

export default TableRow;