import React, { Fragment } from 'react';
import TableRow from './TableRow';
import Index from './Index';
import { withRouter } from 'react-router-dom';

class UsingId extends React.Component {
    render() {
        return(
            <Fragment>
                <div className="page-header">List View using Id as Key</div>
                <Index render={data => (
                    data.map((d) => (<TableRow key={d.ID} {...d}/>))
                )}/>
            </Fragment>
        )
    }
}

export default withRouter(UsingId);