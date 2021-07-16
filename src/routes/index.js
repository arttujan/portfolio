import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Skills from '../pages/Skills';
import Work from '../pages/Work';
import Education from '../pages/Education';
import Interests from '../pages/Interests';
import Home from '../pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/skills' component={Skills}/>
            <Route path='/work' component={Work}/>
            <Route path='/education' component={Education}/>
            <Route path='/interests' component={Interests}/>
        </Switch>
    )
}
