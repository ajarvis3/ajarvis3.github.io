import "./App.css";
import { RecoilRoot } from "recoil";
import Menu from "./menu/Menu";
import Content from "./content/Content";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 160;

const useStyles = makeStyles({
   drawer: {
      width: drawerWidth,
   },
   content: {
      marginTop: 20,
      marginLeft: drawerWidth,
   },
});

function App() {
   const classes = useStyles();
   return (
      <RecoilRoot>
         <Menu className={classes.drawer} />
         <Content className={classes.content} />
      </RecoilRoot>
   );
}

export default App;
