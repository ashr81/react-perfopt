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
        this.deleteRows = this.deleteRows.bind(this)
        this.updateRows = this.updateRows.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    fetchData = () => {
        this.setState({
            isLoading: true
        })
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                data: response,
                isLoading: false
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

    addRows = () => {
        const { data, multiAction, actionAt } = this.state;
        this.setState({
            data: data.flatMap((d, i) => {
                if(multiAction && i % actionAt === 0) {
                    return [{...d}, {...d, id: d.id + 20000}];
                } else {
                    if(i === actionAt)
                        return [{...d}, {...d, id: d.id + 20000}];
                    return d;
                }
            })
        })
    }

    deleteRows = () => {
        const { data, multiAction, actionAt } = this.state;
        this.setState({
            data: data.filter((_d, i) => (multiAction && i%actionAt === 0) || (!multiAction && i !== actionAt))
        })
    }
    
    updateRows = () => {
        const { data, multiAction, actionAt } = this.state;
        this.setState({
            data: data.map((d, i) => {
                if(multiAction && i % actionAt === 0) {
                    d.title = 'Editted Entry'
                    return d;
                } else {
                    if(i === actionAt) d.title = 'Editted Entry';
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
        const { data, actionAt, multiAction, isLoading } = this.state;
        return(
            <Fragment>
                <Header
                    fetchData={this.fetchData}
                    actionAt={actionAt}
                    onInputChange={this.onInputChange}
                    multiAction={multiAction}
                    updateRows={this.updateRows}
                    deleteRows={this.deleteRows}
                    addRows={this.addRows}
                />
                {isLoading ? 
                    <div>Please waiting..,</div>
                    : 
                    <table>
                        <caption>Statement Summary</caption>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Album Id</th>
                                <th>Title</th>
                                <th>Thumbnail Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.render(data)}
                        </tbody>
                    </table>
                }
            </Fragment>
        )
    }
}

export default Index;