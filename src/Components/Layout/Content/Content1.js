import React from 'react'
import { Layout } from 'antd';
import { ContentTheme } from './ContentStyle';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Module/Pages/Sidebar_Pages/Home';
import Desk from '../../Module/Pages/Sidebar_Pages/Desk';
import Login from '../../Module/Pages/Sidebar_Pages/Login';
import Register from '../../Module/Pages/Sidebar_Pages/Register';
import Table from '../../Module/Pages/Sidebar_Pages/Table';
import Files from '../../Module/Pages/Sidebar_Pages/Files';
import "../Layout.css"

const { Content } = Layout;

export default function Content1() {
    return (
        <>


            <ContentTheme>
                <Content className="Border" style={{ minHeight: '100vh' }}>

                    <Switch>

                        <Route path='/home' exact key='0' component={Home} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/login' component={Login} />
                        <Route path='/desk' component={Desk} />
                        <Route path='/table' component={Table} />
                        <Route path='/files' component={Files} />

                    </Switch>
                </Content>
            </ContentTheme>



        </>
    )
}