import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = PropsWithChildren<{
  className?: string
}>

export default function Button({ children, className }: ButtonProps) {
  return (
    <button className={twMerge('uppercase rounded-1 px-6 py-3 border-primary border-2', className)}>{children}</button>
  )
}
