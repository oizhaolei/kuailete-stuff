import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from 'semantic-ui-react';

const Footer = () => (
    <Grid stackable>
    <Grid.Column width={5}>
    <Link to="/contact_us">
    联系我们
    </Link>
    </Grid.Column>
    <Grid.Column width={5}>
    <Link to="/study_center">
    学习中心
    </Link>
    </Grid.Column>
    <Grid.Column width={5}>
    <Link to="/help">
    帮助中心
    </Link>
    </Grid.Column>
    </Grid>
);
export default Footer;
