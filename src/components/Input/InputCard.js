import { Button, IconButton, InputBase, Paper } from '@material-ui/core'
import { fade, makeStyles } from "@material-ui/core/styles"
import ClearIcon from "@material-ui/icons/Clear"
import React,{useState} from 'react'

// donner un style via makeStyle à l'input ajouter une tâche. 
const useStyle = makeStyles((theme)=> ({
    card: {
        backgroundColor: "#c3c6b1",
        paddingBottom:theme.spacing(5),
        margin: theme.spacing(1),
        padding: theme.spacing(2)
        
    },
    btn:{
        backgroundColor: "#4b553a",
        color: "#ffff",
        margin: theme.spacing(2),
        '&hover':{
            background: fade("#4b553a", 0.55),
        }
    }
}))
export default function InputCard({setOpen}) {
    const classes= useStyle();
    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase mltiline fullWidth  onBlur={()=>setOpen(false)} placeholder="Enter a new todo"/>
                </Paper> 
            </div>
            <div>
                <Button className={classes.btn} onClick={()=> setOpen(false)}>Add a to do</Button>
                <IconButton onClick={()=> setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
            
        </div>
    )
}
