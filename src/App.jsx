
// -------react imports --------------------------------
import {useState} from 'react';
// -------components imports --------------------------------
import List from "./components/List/List";
import MainHeader from "./components/MainHeader/MainHeader";
const App=()=>{
  
  const [visible,setVisible]= useState(false);

  const showModalHandler=()=>{

    setVisible(true);
  }

  const hideModalHandler=()=>{
    setVisible(false);
  
   }

   
  return (
<>  
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
        <List posting={visible} onStopPosting={hideModalHandler}/>   
    </main>
</>


  );
  
}

export default App;
