import React from 'react'
import Item from './Item'

export default class App extends React.Component {
    constructor(props) {
        super(props);



    }


    render() {
        console.log(this.props.comments)
        let list = this.props.comments.map((ele, index) => {
            return (<Item key={index} author={ele.author} comment={ele.comment}/>)
        })

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    {list}
                </div>
            </div>
        )
    }
}
    // export default function List(props){

    //
    //     return(
    //         <div className="panel panel-default">
    //             <div className="panel-heading">
    //                 <h3 className="panel-title">数据库</h3>
    //             </div>
    //             <div className="panel-body">
    //                 {list}
    //             </div>
    //         </div>
    //     )
    // }
