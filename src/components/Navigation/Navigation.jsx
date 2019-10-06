import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {
  componentWillMount() {
  this.props.getFirstThreeUsers()
}
render(){

return (<nav className={classes.nav}>
<ul>
  <li><NavLink to="/profile" className={classes.navigation} activeClassName={classes.active}>Профиль</NavLink></li>
  <li><NavLink to="/news" className={classes.navigation}>Новости</NavLink></li>
  <li><NavLink to="/dialogs" className={classes.navigation} activeClassName={classes.active}>Сообщения</NavLink></li>
  <li><NavLink to="" className={classes.navigation}>Документы</NavLink></li>
  <li><NavLink to="" className={classes.navigation}>Информация</NavLink></li>
  <li><NavLink to="/users" className={classes.navigation}>Пользователи</NavLink></li>
</ul>
</nav>)}}
export default Navigation;