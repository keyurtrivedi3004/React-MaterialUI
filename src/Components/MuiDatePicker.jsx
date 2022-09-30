import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { DateRangePicker } from "rsuite";
import { addDays, subDays } from "rsuite/esm/utils/dateUtils";

const MuiDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  console.log({
    selectedDate,
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
    selectedDateTime,
  });
  return (
    <>
      <Stack spacing={4} sx={{ width: "250px" }}>
        <DatePicker
          label="Date Picker"
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time Picker"
          value={selectedTime}
          onChange={(newValue) => {
            setSelectedTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Date Time Picker"
          value={selectedDateTime}
          onChange={(newValue) => {
            setSelectedDateTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
      <Stack spacing={2} sx={{ width: "250px" }}>
        <p>Date Time Range</p>
        <DateRangePicker
          format="yyyy-MM-dd HH:mm:ss"
          defaultCalendarValue={[
            new Date("2022-02-01 00:00:00"),
            new Date("2022-03-01 23:59:59"),
          ]}
        />
        <p>Time Range</p>
        <DateRangePicker
          format="HH:mm:ss"
          ranges={[]}
          defaultCalendarValue={[
            new Date("2022-02-01 00:00:00"),
            new Date("2022-03-01 23:59:59"),
          ]}
        />
        <p>Meridian format</p>
        <DateRangePicker
          format="yyyy-MM-dd hh:mm aa"
          showMeridian
          defaultCalendarValue={[
            new Date("2022-02-01 00:00:00"),
            new Date("2022-03-01 23:59:59"),
          ]}
        />
        <DateRangePicker
          appearance="default"
          placeholder="default"
          style={{ width: 230 }}
        />
        <hr />
        <DateRangePicker
          appearance="subtle"
          placeholder="subtle"
          style={{ width: 230 }}
        />
      </Stack>
      <Stack>
        <p>Month Hover</p>
        <DateRangePicker hoverRange={"month"} />
        <p>Week Hover</p>
        <DateRangePicker hoverRange={"week"} />
        <p>Custom Select</p>
        <DateRangePicker
          ranges={[]}
          hoverRange={(date) => [subDays(date, 1), addDays(date, 1)]}
        />
        <p>SHow Week Numbers</p>

        <DateRangePicker showWeekNumbers />
      </Stack>
    </>
  );
};

export default MuiDatePicker;
