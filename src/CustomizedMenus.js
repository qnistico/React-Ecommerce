import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import "./Sass/Nav.scss";
import { Link } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="dropdown-button"
      >
        Product Categories
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link
            to="/category/cat_RqEv5xnGewZz4j"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <ListItemText primary="Sound & Audio" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            to="/category/cat_LvJjoPb3Ele0nO"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <ListItemText primary="Computers & Monitors" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            to="category/cat_8XxzoBz1NoPQAZ"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <ListItemText primary="Mice & Keyboards" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            to="category/cat_VKXmwDejDorgDA"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <ListItemText primary="Tablets & Phones" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            to="category/cat_eN1ql9G8Yoz3ym"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <ListItemText primary="Accessories & Lighting" />
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
