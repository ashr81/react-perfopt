import React, { Fragment } from 'react';
import TableRow from './TableRow';
import Index from './Index';
import { withRouter } from 'react-router-dom';

class UsingIndex extends React.Component {
    render() {
        return(
            <Fragment>
                <div className="page-header">List View using Index as Key</div>
                <Index render={data => (
                    data.map((d, i) => (<TableRow key={i} {...d}/>))
                )}/>
            </Fragment>
        )
    }
}

export default withRouter(UsingIndex);