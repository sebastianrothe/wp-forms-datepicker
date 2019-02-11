import { Component } from 'inferno';

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import deDe from "date-fns/locale/de";
import {isWeekend, isFriday} from 'date-fns'

import "react-datepicker/dist/react-datepicker.css";

import "./style.css";

registerLocale('de', deDe);
setDefaultLocale('de');

export default class MyDatePicker extends Component {
  constructor (props) {
    super(props)

    this.today = new Date()
    this.placeholder = "Bitte wähle ein Datum aus"
    this.dateFormat = "eee dd.MM.YYYY"
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      startDate: new Date()
    };
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  isGruselday(date) {
    return isWeekend(date) || isFriday(date)
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={this.today}
        dateFormat={this.dateFormat}
        filterDate={this.isGruselday}
        placeholderText={this.placeholder}
        showWeekNumbers
      />
    );
  }
}
