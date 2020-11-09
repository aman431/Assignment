import React from 'react'
import {Container, Grid, Card} from '@material-ui/core';
import './admin.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PublishIcon from '@material-ui/icons/Publish';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
export default function admin() {
    return (
        <div>
            <h3 className="heading">Add New Course</h3>
            {/* <div className="container1"> */}
            <Container className="container">
                <div className="main">
                    <Grid className="grid" style={{height:"300px"}}>
                        <div className="grid1_card1">
                            <div className="card1">
                                <Card className="card11">Course Name</Card> 
                                <Card className="card11"><p><span className="loprem">loprem lpsum <HighlightOffIcon className="delete_icon" /></span><span className="add_tag">Add Tags</span></p></Card>
                                <div className="add" style={{display:"flex", justifyContent:"space-between"}}>
                                    <Card className="card11" style={{width:"500px"}}>Upload or choose from the library <PublishIcon style={{fontSize: '28px', marginLeft:"50%"}}className="publish_icon" /></Card>
                                    <AddCircleRoundedIcon className="add_icons" style={{fontSize:"35px"}}/>
                                </div>
                            </div>
                            <div className="card1">
                                <Card className="card11">Add or choose category</Card> 
                                <Card className="card11">Course Duration</Card>          
                                <Card className="card11" style={{height:"150px"}}>Course Description</Card>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="grid">
                    <div className="grid1_card1">
                            <div className="card1">
                                <Card className="card11">Title</Card> 
                                {/* <Card className="card11"><p><span className="loprem">loprem lpsum <HighlightOffIcon className="delete_icon" /></span><span className="add_tag">Add Tags</span></p></Card> */}
                                <Card className="card11">Certification of Compeletions</Card>
                            </div>
                            <div className="card1">
                                <Card className="card11">Course Name</Card> 
                                <Card className="card11"><p><span className="loprem">loprem lpsum <HighlightOffIcon className="delete_icon" /></span><span className="add_tag">Add Tags</span></p></Card>          
                                <Card className="card11">Upload or choose from the library <PublishIcon style={{fontSize: '28px'}}className="publish_icon" /></Card>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="grid">
                    <div className="grid1_card1">
                            <div className="card1">
                                <Card className="card11">Course Name</Card> 
                                <Card className="card11"><p><span className="loprem">loprem lpsum <HighlightOffIcon className="delete_icon" /></span><span className="add_tag">Add Tags</span></p></Card>
                                <Card className="card11">Upload or choose from the library <PublishIcon style={{fontSize: '28px'}}className="publish_icon" /></Card>
                            </div>
                            <div className="card1">
                                <Card className="card11">Course Name</Card> 
                                <Card className="card11"><p><span className="loprem">loprem lpsum <HighlightOffIcon className="delete_icon" /></span><span className="add_tag">Add Tags</span></p></Card>          
                                <Card className="card11">Upload or choose from the library <PublishIcon style={{fontSize: '28px'}}className="publish_icon" /></Card>
                            </div>
                        </div>
                    </Grid>
                </div>
                {/* <div className="container1">
                    <Grid className="box" spacing={7}>
                    <div className="grid11" style={{display: "flex"}}>
                        <div className="grid1_card1" >
                            <Card className="card1">Course Name</Card> 
                            <Card className="card1"><p><span className="loprem">loprem lpsum <HighlightOffIcon className="delete_icon" /></span><span className="add_tag">Add Tags</span></p></Card>
                            <div className="upload">          
                                <Card className="card1">Upload or choose from the library <PublishIcon style={{fontSize: '28px'}}className="publish_icon" /></Card>
                            </div>
                        </div>
                        <div className="grid1_card1" >
                            <Card className="card1">Course Name</Card> 
                            <Card className="card1"><p><span className="loprem">loprem lpsum <HighlightOffIcon className="delete_icon" /></span><span className="add_tag">Add Tags</span></p></Card>
                            <div className="upload">          
                                <Card className="card1">Upload or choose from the library <PublishIcon style={{fontSize: '28px'}}className="publish_icon" /></Card>
                            </div>
                        </div>
                    </div>
                    </Grid>
                    <Grid className="box" spacing={3}>
                        <Card className="card">Hello World</Card>
                    </Grid> 
                </div> */}
            </Container>
        </div>
    )
}
