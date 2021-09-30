import React, { useState } from 'react';
import { decryptPrivateKeyWithPassword, useUsers } from '../../../types/user';
import { buildGenericFormField } from '../../../types/genericFormField';
import { GenericForm } from '../../GenericForm/GenericForm';
import { loadKeyPair } from '../../App/App.slice';
import { store } from '../../../state/store';
import { ContainerPage } from '../../ContainerPage/ContainerPage';

export function Login() {
  const [ users ] = useUsers()

  const [ loggingIn, setLoggingIn ] = useState(false)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errors, setErrors ] = useState({})

  function signIn(ev: React.FormEvent) {
    ev.preventDefault();
  
    setLoggingIn(true)
  
    const user = users.find(u => u.email === email)
    if (!user) {
      setErrors({"email": ["not found"]})
      setLoggingIn(false)
      return 
    }

    try {
      const privateKey = decryptPrivateKeyWithPassword(user.encryptedPrivateKey, password)
      store.dispatch(loadKeyPair({privateKey, publicKey: user.publicKey}))
      location.hash = '#/';
    } catch {
      // AUTHORIZATION
      // store.dispatch(updateErrors({"password": ["is incorrect"]}))
    }
  }

  function onUpdateField(name: string, value: string) {
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }

  return (
    <div className='auth-page'>
      <ContainerPage>
        <div className='col-md-6 offset-md-3 col-xs-12'>
          <h1 className='text-xs-center'>Sign in</h1>
          <p className='text-xs-center'>
            <a href='/#/register'>Need an account?</a>
          </p>

          <GenericForm
            disabled={loggingIn}
            formObject={{email, password}}
            submitButtonText='Sign in'
            errors={errors}
            onChange={onUpdateField}
            onSubmit={signIn}
            fields={[
              buildGenericFormField({ name: 'email', placeholder: 'Email' }),
              buildGenericFormField({ name: 'password', placeholder: 'Password', type: 'password' }),
            ]}
          />
        </div>
      </ContainerPage>
    </div>
  );
}