import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";

export const GridPageSection = ({content}) => {

    return (
        <Grid container direction='column'>

            <Grid item>
                <Typography variant='h5' fontWeight='bold'>{content}</Typography>
            </Grid>

            <Grid item container spacing={3} sx={{marginBottom: '40px'}}>
                <Grid item lg={6}>
                    <Image
                        src={content}
                        alt='kép a projekttagokról'
                        style={{maxWidth: '100%', height: 'auto'}}
                    >
                    </Image>
                </Grid>
                <Grid item container lg={6}>
                    <Typography style={{whiteSpace: 'pre-line'}}>{content}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )

}