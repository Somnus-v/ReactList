import React from 'react'
import './style.css'

export default class Item extends React.Component{
    constructor(props){
        super(props);


    }





    render(){
        return(
            <div className="underline">
                <h5>评论者:{this.props.author}</h5>
                <h5>内容:</h5>
                <p>{this.props.comment}</p>
            </div>
        )
    }
}
