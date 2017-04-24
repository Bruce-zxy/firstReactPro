'use strict';


import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/list">list page</a></div>
                <div><a href="#/detail">detail page</a></div>
            </div>
        );
    }
};

module.exports = App;



