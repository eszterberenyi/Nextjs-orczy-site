import React from "react";
import Layout from "../../components/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {neighborhoodContent} from "../../utils/pageContents";
import {getWindowWidth} from "../../utils/getWindowWidth";
import {CopyText} from "../../components/CopyText";
import Box from "@mui/material/Box";

export default function Research() {
    const {theme, windowWidth} = getWindowWidth();

    return (
        <Layout
            title='Önkéntesség'
        >
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
                // margin={2}
                sx={{padding: windowWidth >= theme.breakpoints.values.md ? 6 : 3}}
            >

                <Grid item container>
                    <Typography variant='h5' fontWeight='bold' >
                        {neighborhoodContent.volunteer.title}
                    </Typography>
                </Grid>

                <Grid
                    item
                    container
                    style={{whiteSpace: 'pre-line'}}
                    spacing={2}
                >
                    <Grid item>
                        <Typography>
                            A szomszédsági program indulása óta több, mint 30 önkéntes vett
                            részt különféle projektjeinkben. Ők segítenek nekünk szórólapokat,
                            kiadványt készíteni és terjeszteni a Kazán Közösségi Házról és programjainkról.
                            A szomszédsági napjainkon, rendezvényeken szervezőként és foglalkozás tartóként vesznek részt,
                            ötleteikkel és kapcsolataikkal támogatják a különféle al-projektjeink megvalósulását.
                            Nélkülük nem értük volna el eddigi céljainkat, minden segítségükért hálával tartozunk!
                            <br/>
                            <br/>
                            <Box component="span" fontWeight='bold'>
                                Ha szeretnél bekapcsolódni és a
                                szabadidőben segíteni minket abban,
                                amire épp szükségünk van, ha a munkánk
                                ismerete vagy az olvasottak alapján ötleteid
                                támadtak, amiket szívesen megosztanál velünk vagy
                                esetleg megvalósítanád nálunk, akkor keress minket!
                            </Box>
                            <br/>
                            <br/>
                            Az indulásunk óta minden évben gyakorlati helyet biztosítunk különféle egyetemek
                            hallgatói számára. Együttműködtünk az Eötvös Lóránd Tudományegyetem
                            Társadalomelméleti Kar Szociális munka, Szociológia, Közösségi és Civil
                            Tanulmányok, Nemzetközi Tanulmányok és a Corvinus Nemzetközi Tanulmányok.
                            A hallgatók a gyakorlatuk során az általuk választott és a szakmájukhoz,
                            tanulmányaikhoz és érdeklődésükhöz illő projektjeinkben vehetnek részt.
                            <br/>
                            <br/>
                            <Box component="span" fontWeight='bold'>
                                Ha szeretnéd az egyetemi gyakorlatod nálunk tölteni, keress minket!
                            </Box>
                            <br/>
                            <br/>
                            A szomszédsági program a kezdetek óta pályázati forrásokból működik,
                            tehát véges források állnak rendelkezésünkre minden évben a felmerülő
                            anyagköltségeink finanszírozására. Ezért – és mert abban hiszünk, hogy fontos és jó
                            dolog újrahasznosítani, cserélni és nem újat venni – gyakran személyes kapcsolatainkon
                            vagy online felületeken keresztül kérünk és gyűjtünk olyan eszközöket, amelyekre szükségünk
                            van. (Pl. bútorok, játékok, sporteszközök, kreatív eszközök, könyvek, stb.)
                            <br/>
                            <br/>
                            <Box component="span" fontWeight='bold'>
                                Ha a munkánk ismerete vagy az itt olvasottak alapján úgy gondolod, van olyan tárgyad
                                (játék, kreatív eszköz, könyv, bútor), ami szerinted jól jöhet nekünk, keress minket!
                            </Box>
                            <br/>
                            <br/>
                            Számos kerületi és kerületen kívüli szervezettel működtünk és működünk együtt,
                            valamint igyekszünk olyan szervezetekkel beszélgetni, tapasztalatot cserélni,
                            akik hasonló közösségépítő munkát végeznek és jó gyakorlatokat gyűjteni. Szívesen
                            mesélünk eddigi tevékenységeinkről, belső szervezeti működésünkről, tervezési módszerünkről,
                            céljainkról, nehézségeinkről és szívesen hallgatunk meg másokat is!
                            <br/>
                            <br/>
                            <Box component="span" fontWeight='bold'>
                                Ha úgy gondolod, hogy a csoport/szervezet/intézmény, ahol dolgozol hasznos
                                információkat és tapasztalatokat tudna gyűjteni nálunk vagy megosztani velünk,
                                esetleg látsz együttműködési lehetőségeket, keress minket!
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item container spacing={1}>
                        <Box sx={{ border: '2px solid #FDC623', padding: 2}}>
                            <Grid item xs={12}>
                                <Typography fontWeight='bold'>
                                    Elérhetőség:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Török Zsófia Sára</Typography>
                            </Grid>
                            <Grid item container spacing={1}>
                                <Grid item>
                                    <Typography>Email: {neighborhoodContent.volunteer.email}</Typography>
                                </Grid>
                                <Grid item>
                                    <CopyText
                                        text={neighborhoodContent.volunteer.email}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container spacing={1}>
                                <Grid item>
                                    <Typography>Telefon: {neighborhoodContent.volunteer.phone}</Typography>
                                </Grid>
                                <Grid item>
                                    <CopyText
                                        text={neighborhoodContent.volunteer.phone}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>
        </Layout>
    )}