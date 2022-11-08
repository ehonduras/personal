import React from 'react';
import Navigation from './navigation/Navigation';
import RecentPosts from './recent_posts/RecentPosts';
import ProjectList from './project_list/ProjectList';

const Main = () => {
  return (
    <div>
        <Navigation />

        <RecentPosts />

        <ProjectList />
    </div>
  )
}

export default Main