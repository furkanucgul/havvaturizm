import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-10">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href='/'
        className="flex justify-center items-center">
            <Image
                src='https://havvaturizm.com.tr/uploads/cbzxi0R6iU5b4b8sQA59gCYQ.png'
                alt="logo"
                width={118}
                height={18}
            />
        </Link>
        </div>

    </header>
  )
}

export default Navbar