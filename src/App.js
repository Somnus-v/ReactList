import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Form from './components/Form'
import $ from 'jquery'




export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            comments:[]
        };


        this.setpost = this.setpost.bind(this)

    }


    //通过这个API调取数据，DOM树已经渲染，但是数据还没加载。
    componentDidMount(){
        var _this=this;
        $.ajax({
            url:'http://127.0.0.1:3100/api/comments',
            type:'get',
            success:function(data){
                _this.setState({
                    comments:data
                })
            }
        })
    }

    //相当于一个载体，去子组件里面拿数据，之后再操作数据
    setpost(data){
        // console.log(data);

        $.ajax({
            url:'http://localhost:3100/api/comments',
            type:'post',
            data:data,
            success:(data)=>{
                this.setState({
                    comments:data
                })
            }
        })

    }

    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <List comments={this.state.comments} title="数据库"/>
                        </div>
                        <div className="col-md-6">
                            <Form title="请输入你的留言" submitHandler={this.setpost}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
