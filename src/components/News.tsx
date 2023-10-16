import React from 'react'
import CreatePost from './util/CreatePost'
import PostsList from './util/PostsList'

type Props = {}

const News = (props: Props) => {
  return (
    <>
        <CreatePost type={'profile'}></CreatePost>
        <PostsList type={'news'} ></PostsList>
    </>
  )
}
export default News ;