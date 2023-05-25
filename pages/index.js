import styles from "../styles/Home.module.css";
import Head from 'next/head';
import Layout from "@/components/Layout";
import {Montserrat, Poppins} from 'next/font/google'

// const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
const montserrat = Montserrat({subsets: ['latin']})

export default function Home() {
  return (
      <>
        <Head>
          {/*<link rel="icon" href="/favicon.png" />*/}
        </Head>
        <Layout poppins={montserrat.className}></Layout>
      </>
  );
}