import React, { useState } from 'react';

import Header from '../../shares/components/Header/Header';
import CreatePostForm from '../../shares/components/CreatePostForm/CreatePostForm';
import PostsContainer from './components/Posts/PostsContainer';

const PostsPage = () => {
  const [searchByTag, setSearchByTag] = useState(false);

  return (
    <>
      <Header />
      <PostsContainer searchByTag={searchByTag} setSearchByTag={setSearchByTag} />
      {!searchByTag && <CreatePostForm />}
    </>
  );
};

export default PostsPage;
