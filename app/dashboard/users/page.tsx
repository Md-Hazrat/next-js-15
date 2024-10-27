import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <div>
        <h1>Dashboard Users</h1>
        <ul>
            <Link href="/dashboard/users/1"><li>User 1</li></Link>
            <Link href="/dashboard/users/1"><li>User 2</li></Link>
            <Link href="/dashboard/users/1"><li>User 3</li></Link>
            <Link href="/dashboard/users/1"><li>User 4</li></Link>
        </ul>
    </div>
  )
}

export default Users