import { Box, Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";

const MuiDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [value, setVlue] = useState(null);

  console.log({
    selectedDate,
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
    selectedDateTime,
  });
  return (
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
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setVlue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>to</Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Stack>
  );
};

export default MuiDatePicker;
