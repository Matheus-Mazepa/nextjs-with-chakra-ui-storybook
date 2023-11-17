import React, {ReactNode} from "react";
import { Button } from '@chakra-ui/react'

interface AtomButtonProps {
  variant?: string
  onClick?: () => void
  label: string
  icon?: ReactNode
}

export default function AtomButton({ variant, label, icon, onClick }: AtomButtonProps) {
  return <Button variant={variant} rightIcon={icon}>{label}</Button>
}