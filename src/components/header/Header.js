import Link from 'next/link'
import Image from 'next/image'

import Logo from 'assets/svg/logo.svg'

import stl from './Header.module.scss'

const Header = () => {
  const userName = 'John'
  const userAvatarURL =
    'https://img.freepik.com/free-photo/artist-white_1368-3546.jpg'

  return (
    <div className={stl.header}>
      <Link href="/" passHref>
        <a>
          <Logo />
        </a>
      </Link>

      <div className={stl.userInfo}>
        <span>{userName}</span>

        <div className={stl.avatar}>
          <Image src={userAvatarURL} width={42} height={42} alt="user avatar" />
        </div>
      </div>
    </div>
  )
}

export default Header
