import { InputBase, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import MoreHorizonIcon from "@material-ui/icons/MoreHoriz"
import React, {useState} from 'react'

// donner un style via makeStyle aux titres. 
const useStyle = makeStyles((theme)=> ({
    title:{
        color: "#ffff",
        flexGrow:1,
    },
    titleDiv:{
        margin:theme.spacing(1),
        display:"flex",
    },
    input:{
        margin: theme.spacing(1),
        "&focus": {
            color: "f7e3d4"
        },
    },
}));

export default function Title() {
    const [open, setOpen] = useState(false)
    const classes = useStyle();
    return (
        // opération ternaire permettant que le titre par défaut soit ToDo mais qu'au click sur l'input on puisse le modifier  via le hooks useState.
        <div>
             {open ? (
            <div>
                {/* input permettant de changer le titre avec un background au focus */}
                <InputBase value="ToDo"
                inputProps={{className:classes.input,}} fullWidth onBlur={()=> setOpen(!open)}
                />
            </div>
            ) : (
            <div className={classes.titleDiv}>
                <Typography onClick ={()=> setOpen(!open)} className={classes.title}>Todo</Typography>
                <MoreHorizonIcon />
            </div>
            )}
        </div>
        
    );
}
