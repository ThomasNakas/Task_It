// react-----------
import {useState} from 'react';
// import icons-----------
import { FaPlus} from 'react-icons/fa';

import styles from './NewPost.module.css';
const NewPost=({onC,onAP})=>{

    const [text,setText]= useState('');
    const [authorT,setAuthorT]= useState('');
  
  
   const changeBodyHandler=(e)=>{
      setText(e.target.value);
  }
    const changeAuthorHandler=(e)=>{
      setAuthorT(e.target.value);
    }

   const submitHandler=(e)=>{
    e.preventDefault();
    const postData = {t:text,a:authorT};
    onAP(postData);
    onC();
   }

    return(
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Title</label>
        <input type="text" id="name" placeholder='Title (Optional)'  onChange={changeAuthorHandler}/>
      </p>
      <p>
        <label htmlFor="body">Task</label>
        <textarea id="body" placeholder='Write your task'required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p className={styles.actions}>
          <button type='button' onClick={onC}>Cancel</button>
          <button type='submit'><FaPlus /></button>
      </p>
    </form>
    );
}

export default NewPost;