'use strict';


import React from 'react';
import ReactDom from 'react-dom';

class List extends React.Component {
    render() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是列表页</div>
            </div>
        );
    }
};

module.exports = List;