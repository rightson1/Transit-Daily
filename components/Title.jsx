import Head from 'next/head'

export default function Title({ description, title }) {
    return (
        <Head>
            <title>{title || ''} </title>
            <meta name="description" content={description || ''} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="John Lee Miller" />
            <meta property="og:description" content={description || ''} />
            <meta property="twitter:description" content={description || ''} />
            {/* <meta property="og:url" content="https://www.jlmillerltd.com" /> */}
            <meta property="og:image" content="https://transit-daily.vercel.app/logo.png" />
            <meta property="og:type" content="website" />

        </Head>
    )
}