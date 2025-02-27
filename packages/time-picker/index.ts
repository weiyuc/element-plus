import { App } from 'vue'
import TimePicker from './src/time-picker'
import CommonPicker from './src/common/picker.vue'
import TimePickPanel from './src/time-picker-com/panel-time-pick.vue'
export * from './src/common/date-utils'

TimePicker.install = (app: App): void => {
  app.component(TimePicker.name, TimePicker)
}

export { CommonPicker, TimePickPanel }
export default TimePicker
