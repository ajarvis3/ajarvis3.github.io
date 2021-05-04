import {
   ListItem,
   ListItemText,
   makeStyles,
   Drawer,
   List,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import menuState from "../recoil-state/MenuState";
import { useRecoilState } from "recoil";

const drawerWidth = 100;

const Menu = (props) => {
   const { className } = props;
   const [selectedState, setSelectedState] = useRecoilState(menuState);

   const handleListItemClick = (index, text) => {
      setSelectedState(index);
   };

   return (
      <Drawer variant="permanent" anchor="left" className={className}>
         <List className={className}>
            <ListItem>
               <ListItemText primary="Andrew Jarvis" />
            </ListItem>
            {["About Me", "Projects", "Future Projects"].map((text, index) => {
               return (
                  <ListItem
                     button
                     key={text}
                     selected={selectedState === index}
                     onClick={(_event) => handleListItemClick(index, text)}
                  >
                     <ListItemText primary={text} />
                  </ListItem>
               );
            })}
         </List>
      </Drawer>
   );
};

export default Menu;
