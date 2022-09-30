import "./App.css";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MuiNotification from "./Components/MuiNotification";
// import MuiDatePicker from "./Components/MuiDatePicker";
// import MuiModel from "./Components/MuiModel";
// import MuiTable from "./Components/MuiTable";
// import MuiAutocomplete from "./Components/MuiAutocomplete";
// import MuiRatting from "./Components/MuiRatting";
// import MuiSwitch from "./Components/MuiSwitch";
// import MuiCheckBOx from "./Components/MuiCheckbox";
// import MuiRadioButton from "./Components/MuiRadioButton";
// import MuiSelct from "./Components/MuiSelct";
// import MuiButton from "./Components/MuiButton";
// import MuiTextFiels from "./Components/MuiTextFiels";
// import MuiTypography from "./Components/MuiTypography";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextFiels /> */}
        {/* <MuiSelct /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckBOx /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRatting /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiTable /> */}
        {/* <MuiDatePicker /> */}
        {/* <MuiModel /> */}
        <MuiNotification />
      </div>
    </LocalizationProvider>
  );
}

export default App;
