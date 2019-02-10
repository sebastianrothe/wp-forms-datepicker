import { h, Component } from "preact";

import DatePicker from "react-datepicker";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import de from "date-fns/locale/de";

import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";

export default class MyDatePicker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      startDate: new Date()
    };

    this.handleChange = this.handleChange.bind(this);

    registerLocale('de', de);
    setDefaultLocale('de');
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
