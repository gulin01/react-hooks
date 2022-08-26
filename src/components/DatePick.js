import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePick = () => {
  const [selectedDtate, setSelectedDate] = useState(null)
  return (
    <div>
      <DatePicker
        selected={selectedDtate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable={true}
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  )
}

export default DatePick
