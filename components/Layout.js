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
                <meta charSet="UTF-8"/>
                {/*<link rel="icon" href="/favicon.ico" />*/}
                <link rel="canonical" href="https://szomszedsagbolkozosseget.hu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    name="description"
                    content="
                    Az Orczy Szomszédok a Gólya Szövetkezet és a Kazán Közösségi Ház Szomszédsági programjának a ház környezetéről szóló, helytörténeti projektje.
                    Az itt élők történetein keresztül szeretnénk megismerni a véleményüket és tapasztalataikat a környékről, megérteni, hogy különböző társadalmi folyamatok hogyan alakítják a mindennapjaikat.
                    "
                />
                <meta name="title" content={title} />
                <title>{title}</title>
                <meta property="og:url" content="https://szomszedsagbolkozosseget.hu/"/>
                <meta property="og:image" content="/opengraphImg.jpg" />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content="
                    Az Orczy Szomszédok a Gólya Szövetkezet és a Kazán Közösségi Ház Szomszédsági programjának a ház környezetéről szóló, helytörténeti projektje.
                    Az itt élők történetein keresztül szeretnénk megismerni a véleményüket és tapasztalataikat a környékről, megérteni, hogy különböző társadalmi folyamatok hogyan alakítják a mindennapjaikat.
                    "/>
                <meta name="google-site-verification" content="uRFiN9o-kHS4IhXFJq-5uXve-UdT6gXXNgtbjtyFjWs" />
            </Head>
            <div className={style.content}>
                <ResponsiveAppBar/>
                <main>{children}</main>
            </div>
            <Footer/>
        </div>
    )
}