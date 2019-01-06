import React, { memo } from 'react';

const Header = ({
    fetchData,
    actionAt,
    onInputChange,
    multiAction,
    updateRows,
    deleteRows,
    addRows
}) => {
    console.log("Rendered!")
    return (
        <div className="action-items">
            <button className="display-block margin-top-bottom render-list" onClick={fetchData}>Render List</button>
            <div className="display-block margin-top-bottom">
                <label>Position at which you want action to take place</label>
                <input type="number" value={actionAt} onChange={onInputChange}></input>
            </div>
            <div className="display-block margin-top-bottom">
                <label htmlFor="checkbox">Action on Multiple Elements</label>
                <input type="checkbox" id="checkbox" checked={multiAction} onChange={onInputChange}></input>
            </div>
            <div className="display-block margin-top-bottom">
                <button className="button-action-item" onClick={addRows}>Add Entry</button>
                <button className="button-action-item" onClick={updateRows}>Update Entry</button>
                <button className="button-action-item" onClick={deleteRows}>Delete Entry</button>
            </div>
        </div>
    )
}

export default memo(Header);