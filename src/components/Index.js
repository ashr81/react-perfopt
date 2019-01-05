import React, { Fragment } from 'react';
import Header from './Header';

class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            isError: false,
            data: [],
            actionAt: 0,
            multiAction: false
        }
        this.fetchData =  this.fetchData.bind(this)
        this.updateDataState = this.updateDataState.bind(this)
        this.deleteRandom = this.deleteRandom.bind(this)
        this.updateRandom = this.updateRandom.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    fetchData = () => {
        this.setState({
            isLoading: true
        })
        fetch("https://fakerestapi.azurewebsites.net/api/Authors")
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                data: response
            })
        })
        .catch((error) => {
            this.setState({
                isError: true,
                isLoading: false
            })
        })
    }

    updateDataState = (data) => {
        this.setState({ data })
    }

    deleteRandom = () => {
        const { data, multiAction, actionAt } = this.state;
        this.setState({
            data: data.filter((_d, i) => (multiAction && i%actionAt === 0) || (!multiAction && i !== actionAt))
        })
    }
    
    updateRandom = () => {
        const { data, multiAction, actionAt } = this.state;
        this.setState({
            data: data.map((d, i) => {
                if(multiAction && i % actionAt === 0) {
                    d.FirstName = 'Editted Entry'
                    return d;
                } else {
                    if(i === actionAt) d.FirstName = 'Editted Entry';
                    return d;
                }
            })
        })
    }

    onInputChange = (event) => {
        if(event.currentTarget.type === "number") {
            this.setState({
                actionAt: parseInt(event.currentTarget.value)
            })
        } else if(event.currentTarget.type === "checkbox") {
            const { multiAction } = this.state;
            this.setState({
                multiAction: !multiAction
            })
        }
    }

    render() {
        const { data, actionAt, multiAction } = this.state;
        return(
            <Fragment>
                <Header
                    fetchData={this.fetchData}
                    actionAt={actionAt}
                    onInputChange={this.onInputChange}
                    multiAction={multiAction}
                    updateRandom={this.updateRandom}
                    deleteRandom={this.deleteRandom}
                />
                <table>
                    <caption>Statement Summary</caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.render(data)}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default Index;