import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
// styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {
    title: '',
    startDate: null,
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({
      startDate: data.start,
    });
  }

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  handleChangeStartDate = date => {
    const { data } = this.props;
    if (date < data.start) {
      alert('Past date!');
      return;
    }

    this.setState({
      startDate: date,
    });
  };

  handleEventSubmit = () => {
    const { title, startDate } = this.state;
    const { data, submit, close } = this.props;

    const event = {
      title,
      start: data.start,
      end: startDate,
    };

    if (title) {
      submit(event);
      close();
    }
  };

  render() {
    const { title, startDate } = this.state;
    const { close } = this.props;
    return (
      <div className={styles.modal}>
        <form className={styles.form}>
          <button type="button" className={styles.close} onClick={close}>
            X
          </button>
          <label htmlFor={this.textInputId}>
            <input
              className={styles.input}
              type="text"
              name="title"
              value={title}
              id={this.textInputId}
              placeholder="Enter title"
              onChange={this.onChange}
            />
          </label>
          <div className={styles.container}>
            <DatePicker
              selected={startDate}
              onChange={this.handleChangeStartDate}
              className={styles.picker}
            />
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.cancel} onClick={close}>
              Cancel
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={this.handleEventSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
