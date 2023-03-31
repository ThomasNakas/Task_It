//------------react--------------------
import {useState} from 'react';
//------------componennts-------------
import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import Modal from '../Modal/Modal'
import style from './List.module.css';
const List=({posting,onStopPosting})=>{
   const [posts,setPosts]=useState([]);
   const addPostHandler=(post)=>{
    if(!post.t||/^\s*$/.test(post.t)){
      return;
    }
    setPosts((exP)=>[...exP,post].filter(x=>!(x.t.length==0)));
   }
  return(
    <>
     {posting&&<Modal onClose={onStopPosting}>
      <NewPost 
      onC={onStopPosting}
      onAP={addPostHandler}/>
      </Modal> 
      }
      {posts.length>0 &&(
      <ul className={style.posts}>
       {posts.map((p)=><Post key={p.id} author={p.a} text={p.t} />)}
      </ul> 
      )}
      {posts.length==0 && (<div className={style.noPost}><h2>No tasks yet.</h2> <p>Start adding some</p> </div>)}
     
    </>
  );
}
 export default List;