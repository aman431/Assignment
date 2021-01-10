import React from 'react';
import SideBar from './components/SideBar/SideBar.js';
import Chat from './components/Chat/chat';
function App() {
  return (
    <div>
      <SideBar />
      <div style={{ paddingLeft: '250px' }}>
        <Chat />
      </div>
    </div>
  );
}
export default App;
