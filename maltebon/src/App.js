import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import Profile from "./components/UserPanel/Profile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function App() {
  const theme = useStyles();
  return (
    <div className="App">
      <Profile theme={theme} />
    </div>
  );
}

export default App;
