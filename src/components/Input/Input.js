import { Collapse, Paper, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import React, {useState} from 'react'
import InputCard from './InputCard';

// donner un style via makeStyle aux tâches à rajouter. 
const useStyle = makeStyles((theme)=> ({
    inputDiv:{
        marginTop: theme.spacing(3)
    },
    input:{
        padding: theme.spacing(2),
        margin : theme.spacing(1),
        backgroundColor: "#c3c6b1"
    },
}))
export default function Input() {
    const classes = useStyle();
    const [open, setOpen] = useState(false)
    return (
        <div className={classes.inputDiv}>
            <Collapse in={true}>
                <InputCard setOpen={setOpen}/>
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.input} onClick={()=> setOpen(!open)}>
                    <Typography>
                    + Add a todo
                    </Typography>
                </Paper>
            </Collapse>
            
        </div>
    )
}
