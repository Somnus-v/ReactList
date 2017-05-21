import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:"请输入你的留言",
            text:'',
            author:'',
            comment:''
        };



        this.setAuthor = this.setAuthor.bind(this);
        this.setComment = this.setComment.bind(this);
        this.setsubmitComments = this.setsubmitComments.bind(this);

    }


    setAuthor(e){
        console.log(e.target.value);
        this.setState({
            author:e.target.value
        })
    }
    setComment(e){
        // console.log(e.target.value);
        this.setState({
            comment:e.target.value
        })
    }

    setsubmitComments(e){
        e.preventDefault();
        // console.log(this.state.author);
        // console.log(this.state.comment);

        this.props.submitHandler(
            {
            author:this.state.author,
            comment:this.state.comment
        })
        this.setState({
            author:'',
            comment:''
        })

    }


    render() {


        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.setsubmitComments}>
                        <div className="form-group">
                            <label htmlFor="name">评论者:</label>
                                <input type="text" className="form-control" placeholder="name" id="name"
                                onChange={this.setAuthor}
                                value={this.state.author}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="txt">内容:</label>
                                <textarea className="form-control" rows="3" placeholder="this is happy day" id="txt"
                                onChange={this.setComment}
                                value={this.state.comment}
                                ></textarea>
                        </div>
                        <button type="submit" className="btn btn-info">提交</button>
                    </form>
                </div>
            </div>
        )
    }
}
