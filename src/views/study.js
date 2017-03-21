import React from 'react';

import { Segment } from 'semantic-ui-react';

const Part1 = () => (
    <Segment className="k_block">
     学习方法
    </Segment>
);
const Part2 = () => (
    <Segment className="k_block">
     课程进阶
    </Segment>
);
const Part3 = () => (
    <Segment className="k_block">
     课程申请
    </Segment>
);
const Study = () => (
    <div>
    <Part1 />
    <Part2 />
    <Part3 />
    </div>
);
export default Study;
