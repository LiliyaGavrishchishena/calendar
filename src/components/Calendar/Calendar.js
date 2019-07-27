import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// api
import api from '../../api/events';
// styles
import styles from './Calendar.module.css';

const localizer = momentLocalizer(moment);

const formatDate = (data = []) => {
  if (Array.isArray(data)) {
    const events = data.map(event => {
      const ev = {
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      };
      return ev;
    });
    return events;
  }
  const event = {
    ...data,
    start: new Date(data.start),
    end: new Date(data.end),
  };

  return event;
};

export default class MyCalendar extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    api.getAllEvents().then(events => {
      const ev = formatDate(events);
      this.setState({ events: ev });
    });
  }

  handleAddNewEvent = ({ start, end }) => {
    // const title = window.prompt('New Event name');
    let title;
    if (title)
      api.addEvent({ title, start, end }).then(event => {
        const { events } = this.state;
        const ev = formatDate(event.data);
        this.setState({
          events: [...events, ev],
        });
      });
  };

  render() {
    const { events } = this.state;
    return (
      <div className={styles.container}>
        <Calendar
          selectable
          popup
          localizer={localizer}
          events={events}
          defaultDate={new Date()}
          defaultView="month"
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          onSelectSlot={this.handleAddNewEvent}
        />
      </div>
    );
  }
}
