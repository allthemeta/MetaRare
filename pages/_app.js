import '../styles/globals.css'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <h1> PostSeam Marketplace</h1>
        <div className='flex mt-4'>
          <Link href="/">
            <a className="mr-6 text-blue-500">
              Home
            </a>
          </Link>

          <Link href="/create-item">
            <a className="mr-6 text-blue-500">
              Sell Asset
            </a>
          </Link>

          <Link href="/my-assets">
            <a className="mr-6 text-blue-500">
              My Assets
            </a>
          </Link>

          <Link href="/creator-dashboard">
            <a className="mr-6 text-blue-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
