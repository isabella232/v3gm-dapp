import React from 'react'
import Image from 'next/image'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex w-screen items-center justify-between">
      <div className="flex items-center">
        <p className="text-base text-white">Home</p>
      </div>

      <div className="flex items-center ">
        <p className="text-base text-white">Settings</p>
        <button className="text-base text-white">
          <Image
            src={'/svg/settings.svg'}
            height={60}
            width={60}
            color="white"
          />
        </button>
        <button className="text-base text-white">Network</button>

        <button className="text-base text-white">Connect Wallet</button>
      </div>
    </div>
  )
}
export default Header
