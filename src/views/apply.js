import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Menu, Dropdown, Segment } from 'semantic-ui-react';

const types = [
  { key: '商务英语', text: '商务英语', value: '商务英语' },
  { key: '普通会话', text: '普通会话', value: '普通会话' },
  { key: '青少年英语', text: '青少年英语', value: '青少年英语' },
];
const courses = [
    { key: '菲律宾', text: '菲律宾', value: '菲律宾' },
    { key: '北美', text: '北美', value: '北美' },
];
const freq = [
    { key: '每周五回', text: '每周五回', value: '每周五回' },
];
const times = [
    { key: '20分钟', text: '20分钟', value: '20分钟' },
    { key: '30分钟', text: '30分钟', value: '30分钟' },
];
const longs = [
    { key: '3个月', text: '3个月', value: '3个月' },
    { key: '6个月', text: '6个月', value: '6个月' },
];
const whens = [
    { key: '9am~10am', text: '9am~10am', value: '9am~10am' },
    { key: '19am~20am', text: '19am~20am', value: '19am~20am' },
];


const Apply =  () => (
  <Segment vertical>
  <Menu vertical>
  <Dropdown text='课程类型' selection  options={types} />
  <Dropdown text='套餐类型' selection options={courses} />
  <Dropdown text='每周次数' selection options={freq} />
  <Dropdown text='每节课时长' selection options={times} />
  <Dropdown text='期间' selection options={longs} />
  <Dropdown text='希望时间' selection options={whens} />
  </Menu>
  学费:1800元
  <Button>
  <Link to="/pay_unified">
  确认
  </Link>
  </Button>
  </Segment>
);
export default Apply;
