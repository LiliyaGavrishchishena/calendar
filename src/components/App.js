import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// configs
import routes from '../configs/routes';
import navItems from '../configs/nav';
// components
import Header from './Header/Header';
import AppNav from './AppNav/AppNav';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import InboxPage from '../pages/InboxPage';
import ProductsPage from '../pages/ProductsPage';
import InvoicesPage from '../pages/InvoicesPage';
import CustomersPage from '../pages/CustomersPage';
import ChatRoomPage from '../pages/ChatRoomPage';
import CalendarPage from '../pages/CalendarPage';
import HelpDeskPage from '../pages/HelpDeskPage';

// styles
import styles from './App.module.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.container}>
        <Header />

        <div className={styles.main}>
          <AppNav className={styles.nav} items={navItems} />

          <Switch className={styles.content}>
            <Route exact path={routes.HOME} component={HomePage} />
            <Route exact path={routes.DASHBOARD} component={DashboardPage} />
            <Route exact path={routes.INBOX} component={InboxPage} />
            <Route exact path={routes.PRODUCTS} component={ProductsPage} />
            <Route path={routes.INVOICES} component={InvoicesPage} />
            <Route exact path={routes.CUSTOMERS} component={CustomersPage} />
            <Route exact path={routes.CHAT_ROOM} component={ChatRoomPage} />
            <Route exact path={routes.CALENDAR} component={CalendarPage} />
            <Route path={routes.HELP_DESK} component={HelpDeskPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}
