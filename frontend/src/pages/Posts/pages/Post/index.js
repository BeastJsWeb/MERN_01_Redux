import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cl from './index.module.scss'
import { IMG_URL } from '../../../../utils/index'
import { Error, SubmitButton, Loader } from '../../../../components/index'
import { remove } from '../../../../store/features/postsReducer/postsSlice'

const Post = () => { 
  const {status, error} = useSelector(state => state.posts.posts)
  const {post} = useSelector(state => state.posts.post)
  const dispatch = useDispatch()

  if (!post) return ''

  const handleDeletePost = () => dispatch(remove(post._id))

  return (
    <div id={post._id} className={cl.component} >
      { status.remove === 'loading'
        ? <Loader />
        : <>
          <p>{post.title}</p>
          { post.picture && 
            <img 
              src={IMG_URL + post.picture} 
              alt='post' 
              width={150} 
              height={100} 
            />
          }
          <div>Author: {post.author}</div>
          <div>Content: <br/>{post.content}</div>
          <div>
            <SubmitButton onClick={handleDeletePost} >
              Delete
            </SubmitButton>
            { error &&
              <Error>{error}</Error>
            }
          </div>
          </>
      }
    </div>
  )
}

export { Post }