import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { Form, Input, Modal, SubmitButton } from "../../../components"
import { changed } from "../../../store/features/userReducer/profileSlice"

export const Edit = (props) => {
  const {form} = useSelector(state => state.user.profile)
  const dispatch = useDispatch()

  const handleChange = () => dispatch(changed(form))

  return (
    <Modal {...props} >
      <Form>
        <Input
          name='avatar'
          type='file'
          loaded={form.avatar.name}
          placeholder='Photo'
          onChange={handleChange}
        />
        <Input 
          name='name'
          type='text'
          value={form.name}  
          maxLength={100} 
          placeholder='Name'
          onChange={handleChange}
        />
        <Input 
          name='email'
          type='text'
          value={form.email}  
          maxLength={100} 
          placeholder='Email Address'
          onChange={handleChange}
        />
        <SubmitButton>Save</SubmitButton>
      </Form>
    </Modal>
  )
}