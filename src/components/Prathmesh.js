import React , {useState} from "react";
import axios from 'axios'; 
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PublishIcon from "@material-ui/icons/Publish";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import PhotoIcon from "@material-ui/icons/Photo";
import AttachmentIcon from "@material-ui/icons/Attachment";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import TextField from "@material-ui/core/TextField";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LinkIcon from '@material-ui/icons/Link';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

var UploadFile1 = false;
var UploadFile2 = false
const useStyles = makeStyles((theme) => ({
  main:{
    margin: 40
  },
  root: {
    flexGrow: 1,
    backgroundColor: "#f5f6fc",
    padding: 12,
    marginBottom: 40
  },
  rootEnd: {
    backgroundColor: "#f5f6fc",
  },
  paper: {
    padding: theme.spacing(2),
    fontWeight: 900,
  },
  paperr: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    fontWeight: 900,
  },
  icons: {
    position: "relative",
    bottom: 30,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize:22,
    cursor:"pointer"
    // fontWeight: 100
  },
  papers: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: 100,
  },
  delete: {
    position: "relative",
    bottom: 30,
    color: "red",
  },
  button: {
    marginTop: 20,
    backgroundColor: "orange",
    width: 150,
    border: "none",
    height: 30,
    borderRadius: 50,
    cursor:"pointer"
  },
  input: {
    background: "white",
    width: "100%",
    color:"black"
  },
  inputs: {
    padding: theme.spacing(2),
    background: "white",
    width: "100%",
    heigth: 100,
  },
  adj: {
    position: "relative",
    bottom: 45,
    fontSize: 25,
  }
}));

const FullWidthGrid = () => {

  const selectedFile = null;
  const [File, setStateFile] = useState(selectedFile);
  const [chosenEmoji, setChosenEmoji] = useState(null);

 const onFileChange = (event) => {
    setStateFile({ selectedFile: event.target.files[0] });
    console.log(event.target.files[0]);
  }

	const onFileUpload = () => {
    const formData = new FormData();
    formData.append("myFile", File, File.name);
    axios.post("api/uploadfile", formData); 
  };

  const fileData = () => {
    if (File && UploadFile1) {
      UploadFile1 = false;
      // console.log("How UploadFile1 is set to false",UploadFile1)
      const input = document.getElementById("outlined-basic1");
      // console.log(input);
      input.value = File.selectedFile.name + " " +File.selectedFile.type
    } else if(File && UploadFile2){
      UploadFile2 = false;
      // console.log("Now it's set to be a false", UploadFile2);
      const input = document.getElementById("outlined-basic2");
      // console.log(input);
      input.value = File.selectedFile.name + " " +File.selectedFile.type
      // console.log("Working")
    }
  }

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    console.log("working");
  }


  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          Add New Course
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Course Name"
            variant="outlined"
            className={classes.input}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Add or choose catagory"
            variant="outlined"
            className={classes.input}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Add Tags"
            variant="outlined"
            className={classes.input}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Course Duaration"
            variant="outlined"
            className={classes.input}
          />
        </Grid>
        <Grid container spacing={3} className={ classes.root}>
          <Grid item xs={5}>
            <TextField
              id="outlined-basic1"
              placeholder="Upload or Choose from gallery"
              variant="outlined"
              disabled="true"
              className={ classes.input}
              style={{color:"black", fontWeight:"700px"}}
            />
            <Grid container direction="row-reverse" className={classes.adj}>
              <PublishIcon fontSize="large" style={{cursor:"pointer"}} onClick={() => {
                  document.getElementById('file').click();
                  UploadFile1 = true;        
              }}                        
              />
              <input
                type="file"
                id="file"
                onChange={onFileChange}
                style={{ display: "none" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <AddCircleRoundedIcon fontSize="large" />
            {fileData()}
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-multiline-static"
              label="Course Description"
              multiline
              rows={6}
              variant="outlined"
              className={classes.input}
            />
            <Grid item className={classes.icons}>
              <AttachFileIcon  />
              <EmojiEmotionsOutlinedIcon />
              <PhotoIcon />
              <AttachmentIcon />
              <FormatColorTextIcon />
              <LinkIcon /> 
              {/* <InsertEmoticonIcon clasName={classes.icon} /> */}
              <Grid container className={classes.delete} justify="flex-end">
                <DeleteIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={12}>
          Course Summery
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            className={classes.input}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="7 Hours on demand video"
            variant="outlined"
            className={classes.input}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Certificate of completion"
            variant="outlined"
            className={classes.input}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-multiline-static"
            label="Course Description"
            multiline
            rows={6}
            variant="outlined"
            className={classes.input}
          />
          <Grid item className={classes.icons}>
            <AttachFileIcon />
            <EmojiEmotionsOutlinedIcon />
            <PhotoIcon />
            <AttachmentIcon />
            <FormatColorTextIcon clasName={classes.icon}/>
              <LinkIcon clasName={classes.icon} /> 
              {/* <InsertEmoticonIcon clasName={classes.icon} /> */}
            <Grid container className={classes.delete} justify="flex-end">
              <DeleteIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.rootEnd}>
        <Grid item xs={12}>
          Add Module
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Model Name"
            variant="outlined"
            className={classes.input}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic2"
            placeholder="Upload or choose from gallery"
            variant="outlined"
            disabled="true"
            className={classes.input}
          />
          <Grid container direction="row-reverse" className={classes.adj}>
            <PublishIcon fontSize="large" style={{cursor:"pointer"}}
              onClick={() => {
                document.getElementById('file').click();
                UploadFile2 = true;
                console.log("Now it's true", UploadFile2);         
              }}                        
            />
          <input
            type="file"
            id="file"
            onChange={onFileChange}
            style={{ display: "none" }}
          />
          {/* {fileData()} */}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <AddCircleRoundedIcon fontSize="large" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-multiline-static"
            label="Model Description"
            multiline
            rows={6}
            variant="outlined"
            className={classes.input}
          />
          <Grid item className={classes.icons}>
            <AttachFileIcon />
            <EmojiEmotionsOutlinedIcon />
            <PhotoIcon />
            <AttachmentIcon />
            <FormatColorTextIcon clasName={classes.icon}/>
              <LinkIcon clasName={classes.icon} /> 
              {/* <InsertEmoticonIcon clasName={classes.icon} /> */}
            <Grid container className={classes.delete} justify="flex-end">
              <DeleteIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="flex-end" style={{marginTop:"25px"}}>
        Add more modules
      </Grid>
      <Grid container justify="flex-end">
        <button className={classes.button}>Add</button>
      </Grid>
    </div>
  );
}

export default FullWidthGrid;