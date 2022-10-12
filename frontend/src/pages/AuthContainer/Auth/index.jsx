import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { Form, Input, SubmitButton, Error, Success, Loader } from "../../../components/index"
import { setUsername, setPassword } from "../../../store/features/userReducer/formSlice"
import { registration, login } from "../../../store/features/userReducer/authSlice"

const Auth = () => {
  const {status, error, created} = useSelector(state => state.user.auth)
  const {form, toogled} = useSelector(state => state.user.form)
  const dispatch = useDispatch()

  if (status === 'loading') return <Loader />

  const handleFetchUser = e => {
    e.preventDefault()
    toogled
    ? dispatch(registration(form))
    : dispatch(login(form))
  }

  const setName = e => dispatch(setUsername(e.target.value))
  const setPass = e => dispatch(setPassword(e.target.value))

  return (
    <Form onSubmit={handleFetchUser} >
      <Input 
        placeholder='name'
        type='text' 
        value={form.username} 
        onChange={setName}
      />
      <Input 
        placeholder='password'
        type='password' 
        value={form.password} 
        onChange={setPass}
      />
      <SubmitButton>
        { toogled ? 'create account' : 'login' }
      </SubmitButton>
      { error && 
        <Error>
          {error.map(msg => 
            <div key={msg} >
              {msg}
            </div>
          )}
        </Error>
      }
      { created &&
        <Success>{created}</Success>
      }
    </Form>
  )
}

export { Auth }