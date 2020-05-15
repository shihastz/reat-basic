import React, { Component } from 'react'
import axios from 'axios';

export default class Ajax extends Component {
    constructor(){
        super();
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        //console.log("ajax");
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
           this.setState({
               posts : response.data
           })
        })
    }
    render() {
        return (
            <div>
                <h3>Ajax</h3>
                <table className="striped bordered hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.slice(0,5).map((val, index)=> {
                            return(
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.title}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
