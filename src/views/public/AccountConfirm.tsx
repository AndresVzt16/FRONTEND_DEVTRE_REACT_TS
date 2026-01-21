import React from 'react'
import { useParams } from 'react-router-dom'

const AccountConfirm = () => {
    const {token} = useParams()

  return (
    <div>{token}</div>
  )
}

export default AccountConfirm