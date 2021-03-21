import {makeStyles} from "@material-ui/core";
import {ApplicationBar} from "./components/ApplicationBar"
import {MainBlock} from "./components/MainBlock"
import {AboutCompany} from "./components/AboutCompany"

const styles = makeStyles(() => ({
    root: {
    },
}))

function App() {
    const classes = styles();
  return (
      <div className={classes.root}>
          <ApplicationBar />
          <main>
             <MainBlock />
             <AboutCompany/>
          </main>
      </div>
  );
}

export default App;
