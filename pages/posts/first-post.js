import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <>
        <Layout>
        <Head>
            <title>🐈 Cats first post</title>
        </Head>
    <h1>Our cool first post!!! 🌟</h1>
<h2>
    <Link href="/">
    <a> Back to home</a>
    </Link>
</h2>
</Layout>
    </>
    );
  }


  /*
NOTES ON ADDING THIRD PARTY SCRIPTS:
1. import Script from "next/script";
2. Add Script component beneath the Head component:
          <Script
             src="https://connect.facebook.net/en_US/sdk.js"
             //'lazyOnload' tells Next.js to load this particular script lazily during browser idle time
             strategy="lazyOnload"
             //'onLoad' is used to run any JavaScript code immediately after the script has finished loading. 
             onLoad={() =>
               console.log(`script loaded correctly, window.FB has been populated`)
             }
        >
        </Script>
  */