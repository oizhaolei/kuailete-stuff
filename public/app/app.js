import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import Header from './components/header.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';

import UserLayout from './layout/user';

import Index from './views/index';
import Study from './views/study';
import BusinessEnglish from './views/business_english';
import NormalEnglish from './views/normal_english';
import ChildrenEnglish from './views/children_english';
import StudySystem from './views/study_system';
import Apply from './views/apply';
import StudyFlow from './views/study_flow';
import Introduction from './views/introduction';
import Specialist from './views/specialist';
import Me from './views/me';
import PayUnified from './views/pay_unified';

import UserDashboard from './views/user_dashboard';

import configureStore from './store/configureStore';

const store = configureStore();

render(
    <div>
    <Provider store={store}>
    <Router>
    <div>
    <Header />
    <Nav />
    <Route exact path='/' component={Index} />
    <Route path='/study' component={Study} />
    <Route path='/business_english' component={BusinessEnglish} />
    <Route path='/normal_english' component={NormalEnglish} />
    <Route path='/children_english' component={ChildrenEnglish} />
    <Route path='/study_system' component={StudySystem} />
    <Route path='/apply' component={Apply} />
    <Route path='/study_flow' component={StudyFlow} />
    <Route path='/introduction' component={Introduction} />
    <Route path='/specialist' component={Specialist} />
    <Route path='/me' component={Me} />
    <Route path='/pay_unified' component={PayUnified} />
    <Footer />
    </div>
    </Router>
    </Provider>
    </div>
    ,
    document.getElementById('app')
);
