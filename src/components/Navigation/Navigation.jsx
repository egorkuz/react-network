import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {
componentDidMount() {
  this.props.getFirstThreeUsers()
}
render(){
  console.log(this.props)
return (<nav className={classes.nav}>
<ul>
  <li><NavLink to="/profile" className={classes.navigation} activeClassName={classes.active}>Профиль</NavLink></li>
  <li><NavLink to="/news" className={classes.navigation}>Новости</NavLink></li>
  {/*<li><NavLink to="/dialogs" className={classes.navigation} activeClassName={classes.active}>Сообщения</NavLink></li>*/}
  <li><NavLink to="" className={classes.navigation}>Документы</NavLink></li>
  <li><NavLink to="" className={classes.navigation}>Информация</NavLink></li>
  <li><NavLink to="/users" className={classes.navigation}>Пользователи</NavLink></li>
</ul>
<div className={classes.bestfriends}>
  <p>Друзья</p>
  <section className={classes.bestfriends_persons}>
        <NavLink to="">{}</NavLink>
        <span className={classes.bestfriend}>{1}</span>
        <span className={classes.bestfriend}>{2}</span>
        <span className={classes.bestfriend}> {3}</span>
  </section> 
</div>
</nav>)}}
export default Navigation;