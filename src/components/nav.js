import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Menu, Dropdown } from 'semantic-ui-react';

const Nav = () => (
    <Container>
    <Menu className=" large secondary pointing">
    <Menu.Item>
    <NavLink to="/">
    首页
    </NavLink>
    </Menu.Item>
    <Dropdown text="快乐特英语课程" pointing className='link item'>
    <Dropdown.Menu>
    <Dropdown.Item>
    <NavLink to="/business_english">
    商务口语
    </NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink to="/normal_english">
    普通口语
    </NavLink>
    </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>
    <NavLink to="/children_english">
    北美少儿英语
    </NavLink>
    </Menu.Item>
    <Dropdown text="学习申请" pointing className='link item'>
    <Dropdown.Menu>
    <Dropdown.Item>
    <NavLink to="/study_method">
    学习方法
    </NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink to="/study_upgrade">
    课程进阶
    </NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink to="/apply">
    课程申请
    </NavLink>
    </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    <Dropdown text="关于我们" pointing className='link item'>
    <Dropdown.Menu>
    <Dropdown.Item>
    <NavLink to="/introduction">
    介绍快乐特
    </NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink to="/specialist">
    快乐特 优势
    </NavLink>
    </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    <Menu.Item position='right'>
    <NavLink to="/me">
    个人中心
    </NavLink>
    </Menu.Item>
    </Menu>
    </Container>
);
export default Nav;
