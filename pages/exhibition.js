import React from "react";
import Layout from "../components/Layout";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {exhibitionContent} from "../utils/pageContents";
import Image from "next/image";
import Box from '@mui/material/Box'

export default function Workshops() {
    return (
        <Layout
            title='Kiállítás'
        >
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <Image
                        src={exhibitionContent.img}
                        alt='esemény cover fotója'
                        priority={true}
                        style={{maxWidth: '100%', height: 'auto'}}
                    >
                    </Image>
                </Grid>
                <Grid item container margin={3}>
                    <Typography>
                        <Box component="span" fontWeight='bold'>2023. szeptember 3-án</Box> nyílik a
                        <Box component="span" fontWeight='bold'> Dobozi 21</Box>-ben és a Gólyában az
                        <Box component="span" fontWeight='bold'> Azt beszélik az Orczyn…</Box> című kiállítás,
                        amelynek alapját a negyed lakóival készült kutatás és egy részvételi művészeti programsorozat képezi.
                        A két folyamat a kiállításban összegződik azzal a céllal, hogy  kihangosítsa az itt élők negyedről alkotott véleményét,
                        ezzel árnyalva a kerületrész máig fennmaradt rossz társadalmi megítélését. <br/>
                        Az Orczy negyed az elmúlt évek során sok szempontból megváltozott.
                        A változás egyik motorja az a tágabb ingatlanpiaci folyamat, amelynek során az eredeti
                        lakosság helyett egyre több fiatalabb és jobb társadalmi helyzetű lakó költözik a kerület
                        ezen részébe is. A kiállítás egy olyan pillanatképet mutat ebből a folyamatból, amelyben egyszerre
                        van jelen a régi és az új Orczy negyed. <br/>
                        A kiállítás alapjául szolgáló 71 interjúból
                        álló kutatás célja az volt, hogy feltérképezze, kik azok,
                        akik az Orczy negyedben élnek, mik a történeteik, és mit gondolnak azokról a folyamatokról,
                        amelyek a kerületben zajlanak. Az Orczy negyed lakói különbözőféleképpen beszélik el a negyedről,
                        a környékről és a kerületről alkotott benyomásaikat, amelyeket a kiállítás párhuzamosan, egymás mellett mutat be. <br/>
                        A kutatást egy részvételi folyamat követte, amelynek keretében nyitott foglalkozásokon vettek részt
                        az Orczy negyedben, vagy a nyolcadik kerületben élő lakók. A különböző foglalkozásokban közös eszköz
                        volt a rajzolás, amely iskolázottságtól és kortól függetlenül hozzáférhető, közvetlenebb kifejezési mód.
                        A részvételi folyamat másik célja a közösségépítés volt. A kutatás és a részvételi folyamat szervezői szerették volna,
                        hogy megmaradjon a kapcsolat az interjúzás során megismert, arra nyitottabb lakókkal, ismeretség alakuljon ki a szomszédsággal.
                        <br/>
                        A Gólyának és a Kazán Közösségi Háznak otthont adó Orczy út 46-48.
                        szám alatti épület használóinak kiemelt célja, hogy egyre inkább a szomszédság számára is elérhető,
                        helyi kezdeményezéseket befogadó hely legyen. A kutatás ezt a célt azzal szolgálja, hogy kiindulópontot ad a
                        közös problémák megtalálásához, és reményeink szerint önszerveződő, helyi közösségek kialakulásához is. <br/>
                        <br/>
                        Projektkoordinátor: Hajdu Csilla, Poór Dorottya <br/>
                        Részvételi művészeti gyakorlatok: Poór Dorottya <br/>
                        Grafika: Máté Dániel <br/>
                        Kurátorok: Deák Szonja, Horváth Mátyás <br/>
                        A kiállításban közreműködött: Deák Szonja, Drótos Dominika, Hajdu Csilla, Horváth Mátyás, Jelinek Csaba, Őze Eszter, Máté Dániel, Poór Dorottya <br/>
                        <Box component="span" fontWeight='bold'>Megnyitó:</Box> 2023. szeptember 3. 19:00 <br/>
                        <br/>
                        <Box component="span" fontWeight='bold'>Nyitvatartás:</Box> szeptember 3-24-ig Cs-Szo 14:00-18:00 az utolsó héten rendhagyó nyitvatartással (kedd, szerda, szombat vasárnap) <br/>
                        <Box component="span" fontWeight='bold'>Helyszín:</Box> Dobozi21, Budapest, 1086, Dobozi u. 21 <br/>
                        Gólya, Budapest, Orczy út 46-48, 1089 <br/>
                    </Typography>
                </Grid>

            </Grid>

        </Layout>
    )
}