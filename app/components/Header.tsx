import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="h-16 border-solid border-b border-gray-300">
            <div className="max-w-5xl mx-auto my-0 py-1 px-3">
                <Link href="/">
                    <a>
                        <Image src="/logo.png" alt="Vercel Logo" width={334} height={56} />
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header
