import Image from 'next/image'

export default function Logo() {
  return (
    <>
      <Image
        src="/logo.svg"
        width={148}
        height={24}
        alt="Picture of the author"
        className="hidden md:block"
      />
      <Image
        src="/logomark.svg"
        width={28}
        height={24}
        alt="Picture of the author"
        className="block md:hidden"
      />
    </>
  )
}
