import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Form, Error, Textarea, SubmitButton, Input, Loader } from '../../../../components/index'
import { create } from '../../../../store/features/postsReducer/postsSlice'
import { changed } from '../../../../store/features/postsReducer/formSlice'

const CreatePost = () => {
  const {status, error} = useSelector(state => state.posts.posts)
  const {form} = useSelector(state => state.posts.form)
  const dispatch = useDispatch()

  const handleChange = e => dispatch(changed(e.target))

  if (status.create === 'loading') return <Loader />

  const onSubmit = e => {
    e.preventDefault()
    dispatch(create(form))
  }

  return (
    <Form onSubmit={onSubmit} >
      <Input 
        required
        type='text'
        value={form.title}  
        maxLength={100} 
        placeholder='Title'
        onChange={handleChange}
      />
      <Input 
        required
        type='text'
        value={form.author}   
        maxLength={50} 
        placeholder="Author"
        onChange={handleChange}
      />
      <Textarea 
        required
        type='text'
        value={form.content}  
        maxLength={200}
        placeholder="Content"
        onChange={handleChange}
      />
      <Input
        type='file'
        loaded={form.picture.name}
        placeholder='Picture'
        onChange={handleChange}
      />
      <SubmitButton>Send</SubmitButton>
      { error &&
        <Error>{error}</Error>
      }
    </Form>
  )
}

export { CreatePost }
