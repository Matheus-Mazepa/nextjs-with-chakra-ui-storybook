'use client';

import AtomInput from "@/components/Atoms/Input";
import {useState} from "react";
import AtomPassword from "@/components/Atoms/Password";
import AtomButton from "@/components/Atoms/Button";

interface OganismoLoginFormProps {
  onSubmit: () => void
}

export default function OganismoLoginForm({ onSubmit }: OganismoLoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={onSubmit}>
      <AtomInput label={'Enter your email'} name={'email'} value={email} setState={setEmail} />
      <AtomPassword label={'Enter your password'} name={'password'} value={password} setState={setPassword} />
      <AtomButton label={'Login'} />
    </form>
  )
}
