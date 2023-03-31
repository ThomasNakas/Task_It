import {FaList, FaLayerGroup, FaPlus } from 'react-icons/fa';

import styles from './MainHeader.module.css';

const MainHeader=({ onCreatePost })=>{
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <FaList />
        T<span className={styles.s_letters}>ask</span>I<span className={styles.s_letters}>t</span>
      </h1>
      <p>
        <button className={styles.button} onClick={onCreatePost}>
          <FaLayerGroup size={15} />
          <FaPlus className={styles.plusIcon} />
          <p>New Task</p>
        </button>
      </p>
    </header>
  );
}

export default MainHeader;