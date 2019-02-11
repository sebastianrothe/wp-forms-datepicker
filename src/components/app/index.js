import { Component } from 'inferno';

import MyDatePicker from "../datepicker";
import MyDayPicker from "../day-picker";

export default class App extends Component {
    render(props) {
      return (
        <div>
          <MyDatePicker />
          <br />
          <MyDayPicker />
        </div>
      );
    }
  }
  