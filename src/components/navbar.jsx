import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-black w-full py-8 px-2 text-white flex justify-between'>
        <div>LOGO</div>
        <div>
            <Link href="/">Accueil</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/contact">Me Contacter</Link>
        </div>
    </div>
  )
}