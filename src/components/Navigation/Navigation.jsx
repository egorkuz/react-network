import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
import NavigationContain from './NavigationContain'

const Navigation = (props) => {
return (<nav className={classes.nav}>
<ul>
  <li><NavLink to="/profile" className={classes.navigation} activeClassName={classes.active}>Профиль</NavLink></li>
  <li><NavLink to="/dialogs" className={classes.navigation} activeClassName={classes.active}>Сообщения</NavLink></li>
  <li><NavLink to="" className={classes.navigation}>Документы</NavLink></li>
  <li><NavLink to="" className={classes.navigation}>Информация</NavLink></li>
  <li><NavLink to="/users" className={classes.navigation}>Пользователи</NavLink></li>
</ul>
<div className={classes.bestfriends}>
  <p>Друзья</p>
  <section className={classes.bestfriends_persons}>
      <div className={classes.bestfriends_person}>
        <div className={classes.bestfriends_person_avatar}></div>
        <span>{props.bestFriends[0].name}</span>
      </div>
      <div className={classes.bestfriends_person}>
        <div className={classes.bestfriends_person_avatar}></div>
        <span>{props.bestFriends[1].name}</span>
      </div>
      <div className={classes.bestfriends_person}>
        <div className={classes.bestfriends_person_avatar}></div>
        <span>{props.bestFriends[2].name}</span>
      </div>
  </section> 
</div>
</nav>)}
export default Navigation;