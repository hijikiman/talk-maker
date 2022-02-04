import Head from 'next/head'
import Header from '../components/Header'

const Frame = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head>
                <title>Talk Maker</title>
                <meta name="description" content="Generate message app screen" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </>
    )
}

export default Frame
