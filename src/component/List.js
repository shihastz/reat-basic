import React, { Component } from 'react'

export default class List extends Component {

    state = {
        data : [
            {
                id:1,
                name:"shihas"
            },
            {
                id:2,
                name:"ihas"
            }

        ]
    };
    componentDidMount(){
       // alert("sdf")
    }
    render() {
        return (
            <div>
            <h3>List Component</h3>
                <ul>
                {this.state.data.map((value,index) => {
                    return (
                        <li key={index}>{value.id} - {value.name}</li>
                    )
                }

                )}
                </ul>
                <ul>  
                {this.state.data.map((value,index) => (                    
                        <li key={value.id}>{value.id} -GD-- {value.name}</li>
                    
                )

                )}
                </ul>
            </div>
        )
    }
}
