import React from 'react';
// components
import Calendar from '../components/Calendar/Calendar';
// styles
import styles from './CalendarPage.module.css';

const CalendarPage = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Calendar</h1>
    <Calendar />
  </div>
);

export default CalendarPage;
