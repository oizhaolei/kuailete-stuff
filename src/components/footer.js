import React from 'react';

import { Grid, Header, List } from 'semantic-ui-react';

const Footer = () => (
  <Grid stackable>
  <Grid.Column width={5}>
  <Header as='h4'>联系我们</Header>
  <List>
  <List.Item>咨询时间+电话</List.Item>
  <List.Item>公司地图</List.Item>
  </List>
  </Grid.Column>
  <Grid.Column width={5}>
  <Header as='h4'>学习中心</Header>
  <List>
  <List.Item>教材分类+级别划分图</List.Item>
  <List.Item>级别测试申请</List.Item>
  </List>
  </Grid.Column>
  <Grid.Column width={5}>
  <Header as='h4'>帮助中心</Header>
  <List>
  <List.Item>上课方式了解</List.Item>
  <List.Item>关于课程</List.Item>
  <List.Item>关于老师</List.Item>
  <List.Item>关于学费</List.Item>
  <List.Item>关于支付</List.Item>
  <List.Item>关于售后服务</List.Item>
  </List>
  </Grid.Column>
  </Grid>
);
export default Footer;
