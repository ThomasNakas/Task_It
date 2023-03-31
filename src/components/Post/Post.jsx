// react imports--------------
import {useState} from 'react';
// modules imports------------
import styles from './Post.module.css';
//icons imports--------------
import {FaCheck, FaEdit  ,FaTrash} from 'react-icons/fa';
// components imports--------------



const Post =({author,text})=>{
  const [deleted, setDeleted] = useState(true);
  const [completed, setCompleted] = useState(styles.post);
  const [isCompleted, setIsCompleted] = useState(false);
const toggleIsCompleted = (e) => {
    e.preventDefault();
    setIsCompleted(!isCompleted);
    setCompleted(isCompleted? styles.postC : styles.post);
    
}
const handleDelete =()=>setDeleted(false);


    return (
        <>
            {deleted&&(
                <li className={completed}>
                    {author.length>0&&<p className={styles.author}>{author}</p>}
                <div className={styles.tasksCont}>
                    <p className={styles.text}>{text}</p>
                    <div className={styles.actions}>
                        <button type="button"  onClick={handleDelete}><FaTrash /></button>
                        <button type="button" onClick={toggleIsCompleted}><FaCheck /></button>
                    </div>
                    
                </div> 
                </li>
             )} 
        </>
    );
    

}

export default Post;