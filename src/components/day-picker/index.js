import { h, Component } from "preact";

import DayPickerInput from 'react-day-picker/DayPickerInput';

import "react-day-picker/lib/style.css";

export default class MyDayPicker extends Component {
  render(props) {
    return (
      <div>
        <DayPickerInput onDayChange={day => console.log(day)} />
      </div>
    );
  }
}
