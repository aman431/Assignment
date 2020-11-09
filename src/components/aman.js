import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PublishIcon from "@material-ui/icons/Publish";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttachmentIcon from '@material-ui/icons/Attachment';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    marginRight:200,
    flexGrow: 1,
    backgroundColor: "#f5f6fc",
    marginBottom: 40,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    fontWeight: 900,
  },
  papers: {
    padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
    fontWeight: 900,
    height: 50
  },
}));
export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div style={{marginRight: "50px"}}>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          Add New Course
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Course Name</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={{display:"flex", justifyContent:"space-between"}}>
            Add or choose catagory
            <ExpandMoreIcon/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><p><span className="loprem">loprem lpsum <HighlightOffIcon className="delete_icon" /></span><span className="add_tag">Add Tags</span></p></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Course Duration</Paper>
        </Grid>
        <Grid item xs={6} style={{display:"flex", justifyContent:"space-between",}}>
          <Paper className={classes.paper} style={{width:"540px",height:"60px",display:"flex", justifyContent:"space-between"}}>
            Upload or choose from library
            <PublishIcon  style={{fontSize: '28px', marginLeft:"59%"}}/>
          </Paper>
          <AddCircleRoundedIcon style={{fontSize:"35px"}}/>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.papers} style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"150px"}}>
            Course Description
            <AttachmentIcon />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={12}>
          Course Summery
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Title</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>7 Hours on demand video</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Certificate of completion</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.papers}>Title</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          Add Module
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Model Name</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Upload/File</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.papers}>Module Description</Paper>
        </Grid>
      </Grid>
    </div>
  );
}