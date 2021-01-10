// import React,{useState, useEffect} from 'react'
// import {Icon, Menu, Modal,Form,Grid, Segment, Header, Button, Message} from 'semantic-ui-react';
// import {connect} from 'react-redux';
// import firebase from '../../../server/firebase';
// import './Channel.css'

// const Channel = (props)  => {
//     const [modelOpenState, setModelOpenState]  = useState(false);
//     const [ChannelAddState, setChannelAddState] = useState({name:'', description:''})
//     const [isLoadingState, setLoadingState] = useState(false)
//     const [channelState, setchannelState] = useState([])

//     const channelsRef = firebase.database().ref('channels');

//     // useEffect(() => {
//     //     channelsRef.on('child_added', (snap) => {
//     //         setchannelState((currentState) => {
//     //             let updatedState = [...currentState];
//     //             updatedState.push(snap.val());               
//     //             return updatedState;
//     //         })
//     //     });

//     //     return () => channelsRef.off();
//     // }, [])

//     // useEffect(() => {
//     //     channelsRef.on('child_added', (snap) => {
//     //         setchannelState((currentState) => {
//     //             let updatedState = [...currentState];
//     //             updatedState.push(snap.val())
//     //             return updatedState;
//     //         })
//     //     })
//     // },[])

//     // console.log(ChannelAddState);

//     // const openModal = () => {
//     //     setModelOpenState(true);
//     // }

//     // const closeModal = () => {
//     //     setModelOpenState(false);
//     // }

//     // const checkFromValid = () => {
//     //     return ChannelAddState && ChannelAddState.name && ChannelAddState.description
//     // }

//     // const displayChannels = () => {
//     //     if(channelState.length > 0){
//     //         return channelState.map((channel) =>{
//     //             return <Menu.Item
//     //                 key={channel.id}
//     //                 name={channel.name}
//     //             >
//     //             </Menu.Item>
//     //         })
//     //     }
//     // }
//     // const onSubmit = () => {
//     //     if(!checkFromValid()){
//     //         return ;
//     //     }
//     //     const key = channelsRef.push().key;

//     //     const channel = {
//     //         id: key,
//     //         name: ChannelAddState.name,
//     //         description: ChannelAddState.description,
//     //         created_by: {
//     //             name: props.user.displayName,
//     //             avatar: props.user.photoURL
//     //         }
//     //     }
//     //     setLoadingState(true);
//     //     channelsRef.child(key)
//     //     .update(channel)
//     //     .then(() =>{
//     //         setChannelAddState({name: '', description: ''});
//     //         setLoadingState(false)
//     //         closeModal();
//     //     })
//     //     .catch((error) => {
//     //         console.log(error);
//     //     })
//     // }

//     // const handleInput = (e) => {
//     //     let target = e.target;
//     //     setChannelAddState((currentState) => {
//     //         let updateState = {...currentState};
//     //         updateState[target.name] = target.value;
//     //         return updateState;
//     //     })
//     // }

//     return (
//         <>
//             <Menu.Menu>
//                 <Menu.Item>
//                     <span>
//                         <Icon name="plus" /> Channels 
//                     </span>
//                      {/* ({channelState.length}) */}
//                 </Menu.Item>
//                 {/* {displayChannels()} */}
//                 <Menu.Item>
//                     <span className="clickable" > 
//                         <Icon name="add"/> ADD
//                     </span>
//                 </Menu.Item>
//             </Menu.Menu>
//             <Modal>
//                 <Modal.Header>
//                     Create Channels
//                 </Modal.Header>
//                 <Modal.Content>
//                     <Form >
//                         <Segment stacked>
//                             <Form.Input 
//                             name="name"
//                             // value={ChannelAddState.name}              
//                             type="text"
//                             placeholder = "Enter Channel Name"
//                             />
//                             <Form.Input 
//                             name="description"
//                             // value={ChannelAddState.description}
//                             type="text"
//                             placeholder = "Enter Channel Description"                           
//                             />
//                         </Segment>
//                     </Form>
//                 </Modal.Content>
//                 {/* <Modal.Actions>
//                     <Button loading={isLoadingState} onClick={onSubmit}>
//                         <Icon name="checkmark" />Save
//                     </Button>
//                     <Button onClick={closeModal}>
//                         <Icon name="checkmark" />Cancel
//                     </Button>
//                 </Modal.Actions> */}
//             </Modal>
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         user: state.user.currentUser
//     }
// }
// export default connect(mapStateToProps)(Channel); 