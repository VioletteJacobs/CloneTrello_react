import { CssBaseline, Paper, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import React from 'react'
import Title from "./Title"
import Card from "../Card/Card"

// donner un style via makeStyle à nos listes. 
const useStyle = makeStyles((theme)=> ({
    root: {
        width: "400px",
        backgroundColor: "#c58b2a",
        marginLeft:theme.spacing(1)
        
    },
}))
export default function List() {
    const classes = useStyle();
    return (
        <div>
            <Paper className= {classes.root}>
                <CssBaseline />
                <Title/>
                <Card />
                <Card />
                <Card />
                <Card />

            </Paper>
        </div>
    )
}
