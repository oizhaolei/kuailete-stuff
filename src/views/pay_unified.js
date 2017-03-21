import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

const PayUnified = () => (
  <Segment className="k_block">
    <Button primary>支付宝</Button>
    <Button secondary>微信支付</Button>
  </Segment>
);

export default PayUnified;
