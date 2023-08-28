import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import React from "react";
import style from '../styles/Layout.module.css'
import Footer from "./Footer";
import Head from "next/head";
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: ['latin']})


export default function Layout({children, title}) {

    return (

        <div className={montserrat.className}>
            <Head>
                {/*<link rel="icon" href="/favicon.ico" />*/}
                <meta
                    name="og:description"
                    content="Az Orczy Szomszédok a Gólya Szövetkezet és a Kazán Közösségi Ház Szomszédsági programjának a ház környezetéről szóló, helytörténeti projektje."
                />
                <meta name="og:title" content={title} />
                <title>{title}</title>
            </Head>
            <div className={style.content}>
                <ResponsiveAppBar/>
                <main>{children}</main>
            </div>
            <Footer/>
        </div>
    )
}