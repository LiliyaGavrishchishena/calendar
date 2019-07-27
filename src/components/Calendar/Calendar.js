import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// components
import Modal from './Modal';
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
    modal: false,
    eventEditor: {},
  };

  componentDidMount() {
    api.getAllEvents().then(events => {
      const ev = formatDate(events);
      this.setState({ events: ev });
    });
  }

  handleCloseModal = () => {
    this.setState({
      modal: false,
    });
  };

  handleAddNewEvent = ({ start, end }) => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
      eventEditor: {
        start,
        end,
      },
    });
  };

  submitEvent = data => {
    api.addEvent(data).then(event => {
      const { events } = this.state;
      const ev = formatDate(event.data);
      this.setState({
        events: [...events, ev],
      });
    });
  };

  render() {
    const { events, modal, eventEditor } = this.state;
    return (
      <div className={styles.container}>
        {modal && (
          <Modal
            data={eventEditor}
            close={this.handleCloseModal}
            submit={this.submitEvent}
          />
        )}
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
