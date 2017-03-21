import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { Grid, Input, Label, Menu, Segment } from 'semantic-ui-react';

const LeftNav = () => (
    <Menu pointing vertical>
    <Menu.Item>
    <Link to="/me/dashboard">
    个人信息
    <Label color='teal'>1</Label>
    </Link>
    </Menu.Item>
    <Menu.Item>
    我的教室
    <Menu.Menu>
    <Menu.Item>
    <Link to="/me/curriculum">
    课程表
    </Link>
    </Menu.Item>
    <Menu.Item>
    <Link to="/me/material">
    教材
    </Link>
    </Menu.Item>
    </Menu.Menu>
    </Menu.Item>
    <Menu.Item>
    学习中心
    <Menu.Menu>
    <Menu.Item>
    <Link to="/me/daily">
    每日新闻
    <Label>1</Label>
    </Link>
    </Menu.Item>
    <Menu.Item>
    <Link to="/me/words">
    我的单词表
    </Link>
    </Menu.Item>
    </Menu.Menu>
    </Menu.Item>
    <Menu.Item>
    <Link to="/me/teachers">
    我的课程担当
    </Link>
    </Menu.Item>
    </Menu>
);

const Dashboard = () => (
  <Segment className="k_block">
  Hi ,
  Good job!
  您已经连续坚持了20天的1级课程，再坚持20天，您就 可以达到级别 2啦~我们都会陪你一起加油的!
  </Segment>
);

import Curriculum from './me/curriculum';

const Material = () => (
  <Segment className="k_block">
  教材
  </Segment>
);

const Daily = () => (
  <Segment className="k_block">
  每日新闻
  </Segment>
);

const Words = () => (
  <Segment className="k_block">
  我的单词表
  </Segment>
);

const Teachers = () => (
  <Segment className="k_block">
  我的课程担当
  </Segment>
);
const Me = () => (
  <Router>
  <Grid>
  <Grid.Column width={4}>
  <LeftNav />
  </Grid.Column>
  <Grid.Column stretched width={12}>
  <Route path='/me/dashboard' component={Dashboard} />
  <Route path='/me/curriculum' component={Curriculum} />
  <Route path='/me/material' component={Material} />
  <Route path='/me/daily' component={Daily} />
  <Route path='/me/words' component={Words} />
  <Route path='/me/teachers' component={Teachers} />
  </Grid.Column>
  </Grid>
  </Router>
);
export default Me;
