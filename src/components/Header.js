import React from 'react'
import logo from '../logo.svg'


export default function Header(){
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">
                        <img alt="Brand" src={logo} width="30" />
                    </a>
                    <h4 className="navbar-text">React 评论框</h4>
                </div>
            </div>
        </nav>
    )
}
