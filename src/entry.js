
'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory } from 'react-router';
import { createHistory, createHashHistory, useBasename } from 'history';

//引入样式文件
import './styles/app.scss';

import App from './components/App.js'
import List from './components/List.js'
import Detail from './components/Detail.js'

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
	        <Route path='/list' component={List} />
	        <Route path='/detail' component={Detail} />
    </Router>
), document.getElementById('app'));