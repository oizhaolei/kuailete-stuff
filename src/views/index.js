import React from 'react';

import { Button, Grid, Segment } from 'semantic-ui-react';
import LoginForm from '../components/login_form';

const Part1 = () => (
  <Segment className="k_block">
  <div>宣传画面 免费测试 主打北美少儿英语  会员申请/登录</div>
  <Grid stackable>
  <Grid.Column width={12}>
    <div>
    4张轮播
  Any time Any where 不需要去补习班也可以学英语/
  </div>
  <div>
  打电话的图片
  </div>
  <div>
  只要600元/月就可以和外教一对一上课
  </div>
  <div>
  外教教学图片
  </div>
  <div>
  北美少儿英语外教纯正发音
  </div>
  </Grid.Column>
  <Grid.Column width={4}>
  <LoginForm />
  </Grid.Column>
  </Grid>
  </Segment>
);
const Part2 = () => (
  <Segment className="k_block">
  <div>课程方式分类(电话英语/视频英语)</div>
  <Grid stackable>
  <Grid.Column width={8}>
  <div>
  课程类型
  </div>
  <div>
  随时随地
  保持电话畅通就可以
  学习的电话英语
  适合人群:
                     工作繁忙的职场人
  提高口语应试人群
  </div>
  </Grid.Column>
  <Grid.Column width={8}>
  <div>
  生动形象
  外教和我同步进
  行的视频英语
  选择优点:
                     口型学习
  同步分享
  </div>
  </Grid.Column>
  </Grid>
  </Segment>
);
const Part3 = () => (
  <Segment className="k_block">
  <div>课程选择(商务英语/一般会话/少儿英语)</div>
  <Grid stackable>
  <Grid.Column width={5}>
  <div>
  商务英语
  </div>
  </Grid.Column>
  <Grid.Column width={5}>
  <div>
  普通口语
  </div>
  </Grid.Column>
  <Grid.Column width={5}>
  <div>
  少儿英语
  </div>
  </Grid.Column>
  </Grid>
  <Button primary>点击免费体验</Button>
  </Segment>
);
const Part4 = () => (
  <Segment className="k_block">
  <div>外教介绍&选择理由&学员感想</div>
  我的外教
  目前我们拥有的正式外教共有500名，每位外教都经 过严格的选拔，专业的培训，3个月的测试课
  <Grid stackable>
  <Grid.Column width={5}>
  <div>
  canada Jonathan Mackenzie Bruce
  加拿大本地新闻学专业毕业 热情的上课态度，耐心细致的课后反馈
  Work Experience
                   - Teaching English as a Second Language, UNBSJ,
  2013-2014
                   - Bachelor of Journalism, University of King’s
  College, 2012-2013
                   - English Honours program, UNBSJ, 2011 – 2012
                   - Bachelor of Arts, University of New Brunswick,
  </div>
  </Grid.Column>
  <Grid.Column width={5}>
  <div>
  USA KeyshaL.Carlson
  耐心的纠正，亲切认真的上课态
  度，精炼的教材风格在学员中赢
  得了最高人气的美国当地外教
  </div>
  </Grid.Column>
  <Grid.Column width={5}>
  <div>
  USA Susan Elaine Oser
  理解学员，了解学员的心情， 声音清晰，总是能够带给学员 带来好心情的外教
  </div>
  </Grid.Column>
  </Grid>
  </Segment>
);
const Part5 = () => (
  <Segment className="k_block">
  <div>
  您的担忧
  </div>
  <Grid stackable>
  <Grid.Column width={5}>
  课程效果不好？
  真人外教1对1水平测试
  量身定做进阶课程进度
  外教，课程担当一起帮您提高英语
  </Grid.Column>
  <Grid.Column width={5}>
  <div>
  学费是不是很贵？
  </div>
  3个月/1800 从不能说英语到张口说英语
  除了外教1对1学习外，您还可以免费得到
  教材，随堂录音，课后反馈，中间测试评价
  英语学习中心
  </Grid.Column>
  <Grid.Column width={5}>
  <div>
  上课出现问题找谁?
                     </div>
  一对一的课程担当 您有问题，只需要 一个电话，我们帮 你清除课程以外的 烦恼
  </Grid.Column>
  </Grid>
  </Segment>
);
const Index = () => (
  <div>
  <Part1 />
  <Part2 />
  <Part3 />
  <Part4 />
  <Part5 />
  </div>
);
export default Index;
