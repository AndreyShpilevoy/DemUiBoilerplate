import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from 'containers/Layout';
import Conference from 'containers/Conference';
// import PageViewForum from 'containers/Page_ViewForum';
// import PageViewTopic from 'containers/Page_ViewTopic';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={Conference} />
    <Route path='/Conference' component={Conference}/>
  </Route>
);

    // <Route path='/Conference/Forum/:forumId' component={PageViewForum}/>
    // <Route path='/Conference/Topic/:topicId' component={PageViewTopic}/>