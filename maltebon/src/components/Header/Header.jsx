import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as UiLink } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate } from "react-router-dom";
// import { cookie, makeURL } from "../Utils/Common";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Fade from "@material-ui/core/Fade";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
// import references from "../../assets/References.json";
import {
  createTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
// import PopupAccountBox from "../AccountBox/PopupAccountBox";
import { ThemeProvider } from "@material-ui/styles";
import { Menu } from "@material-ui/core";
import { theme } from "../Theme/theme";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "../Theme/theme";
import InputBase from "@material-ui/core/InputBase";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Hidden } from "@material-ui/core";
// import {
//   GetHeaderProfile,
//   Logout,
//   NotificationsCount,
// } from "../../Utils/Connection.js";
// import { GetCredit } from "../../Utils/Connection.js";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import axios from "axios";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { cookie } from "../../Connections/Common";
import { Logout } from "../../Connections/Connection";
function Header(props) {
  const [drawerAnchor, setDrawerAnchor] = useState(false);
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  const classes = useStyles(theme);
  const [isLoggedIn, setLoggedIn] = useState(props.isLoggedIn);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [NotifCount, SetNotifCount] = useState(null);
  useEffect(() =>
    // isLoggedIn &&
    // // NotificationsCount().then((data) => {
    // //   SetNotifCount(data);
    // // })
    {
      if (cookie.get("x-access-token") === undefined) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    }
  );
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const history = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <AppBar
          position="static"
          color="primary"
          // style={{ backgroundColor: "#40a9b3" }}
        >
          <Toolbar style={{ display: "inline-flex" }}>
            {isLoggedIn && (
              <Hidden mdUp>
                <IconButton
                  onClick={() => setDrawerAnchor(true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  <MenuIcon />
                </IconButton>

                <Drawer
                  anchor="left"
                  open={drawerAnchor}
                  onClose={() => setDrawerAnchor(false)}
                >
                  <List>
                    <div>
                      <ListItem
                        button
                        onClick={() => {
                          window.location.replace("/Profile");
                        }}
                      >
                        <ListItemIcon>
                          <PeopleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                      </ListItem>
                      {/* <ListItem
                        button
                        onClick={() => {
                          window.location.replace("/SomethingElse");
                        }}
                      >
                        <ListItemIcon>
                          <StorefrontIcon />
                        </ListItemIcon>
                        <ListItemText primary="SomethingElse" />
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => {
                          window.location.replace("/SomethingElseElse");
                        }}
                      >
                        <ListItemIcon>
                          <MonetizationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="SomethingElseElse" />
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => {
                          window.location.replace("/SomethingElseElseElse");
                        }}
                      >
                        <ListItemIcon>
                          <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="SomethingElseElseElse" />
                      </ListItem> */}
                    </div>
                  </List>
                </Drawer>
              </Hidden>
            )}

            <Typography
              href=""
              className={classes.typography}
              align="right"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, m: 2 }}
            >
              <Link
                className={classes.link}
                color="inherit"
                href="/"
                style={{
                  fontFamily: "Fredoka",
                  fontWeight: "bold",
                  fontSize: "4vw",
                }}
              >
                Maltebon
              </Link>
            </Typography>
            {isLoggedIn && (
              <div className={classes.searchBar}>{/* <Search></Search> */}</div>
            )}

            <div className={classes.grow} />

            {isLoggedIn ? (
              <div className={classes.icons}>
                {/* <IconButton
                  color="inherit"
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <Badge badgeContent={NotifCount} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton> */}
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper style={{ minWidth: "20vw" }}>
                        <ClickAwayListener onClickAway={handleClose2}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <div
                              style={{
                                margin: "auto",
                                borderBottom: "2px solid lightgrey",
                                height: "100%",
                                width: "80%",
                              }}
                            >
                              <Typography>Notifications</Typography>
                            </div>
                            <NotificationsList
                              classes={classes}
                              history={history}
                            />
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>

                {/* <Hidden xsDown>
                  <IconButton color="inherit">
                    <MonetizationOnIcon />
                  </IconButton>
                </Hidden> */}

                {/* <Hidden xsDown>
                  <IconButton color="inherit">
                    <ShoppingCartIcon />
                  </IconButton>
                </Hidden> */}
                <IconButton
                  edge="end"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem
                    onClick={() => {
                      window.location.replace("/profile");
                    }}
                  >
                    <AvatarCredit />
                    <Typography>Profile</Typography>
                  </MenuItem>
                  {/* <MenuItem
                    onClick={() => {
                      history.push(references.url_profile);
                    }}
                    className={classes.typography}
                  >
                    <li>
                      <Link to="/profile">حساب کاربری</Link>
                    </li>
                  </MenuItem> */}
                  {/* <MenuItem
                    onClick={() => {
                      window.location.replace("/profile/myCommunities");
                    }}
                  >
                    My Somethings
                  </MenuItem> */}
                  <MenuItem
                    // onClick={handleLogout}
                    className={classes.typography}
                    onClick={() => {
                      Logout();
                      window.location.replace("/");
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Hidden xsDown>
                <Button
                  onClick={() => window.location.replace("/login")}
                  variant="contained"
                  // color="secondary"
                  style={{
                    fontFamily: "Segoe UI",
                    backgroundColor: theme.palette.secondary.main,
                    margin: "2px",
                  }}
                  className={classes.sectionDesktop}
                >
                  {/* <AccountCircle /> */}
                  Login
                </Button>
                <Button
                  onClick={() => window.location.replace("/Register")}
                  variant="contained"
                  // color="secondary"
                  style={{
                    fontFamily: "Segoe UI",
                    backgroundColor: theme.palette.secondary.main,
                  }}
                  className={classes.sectionDesktop}
                >
                  {/* <AccountCircle /> */}
                  Register
                </Button>
              </Hidden>
            )}
            {!isLoggedIn && (
              <Hidden mdUp>
                <Button
                  onClick={() => window.location.replace("/login")}
                  variant="contained"
                  style={{
                    fontFamily: "Segoe UI",
                    backgroundColor: theme.palette.secondary.light,
                  }}
                >
                  {/* <AccountCircle /> */}
                  Login{" "}
                </Button>
                <Button
                  onClick={() => window.location.replace("/login")}
                  variant="contained"
                  style={{
                    fontFamily: "Segoe UI",
                    backgroundColor: theme.palette.secondary.light,
                  }}
                >
                  {/* <AccountCircle /> */}
                  Register{" "}
                </Button>
              </Hidden>
            )}
          </Toolbar>

          {/* <PopupAccountBox
            trigger={accountBoxTrigger}
            setTrigger={setAccountBoxTrigger}
            tt="Login"
          /> */}
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
class AvatarCredit extends React.Component {
  state = {
    avatarImage: null,
    creditAmount: null,
    accountName: null,
    creditText: null,
  };
  componentDidMount = async () => {
    // await GetCredit().then((res) => {
    //   this.setState({
    //     creditAmount: res,
    //   });
    //   this.setState({
    //     creditText: "اعتبار:" + this.state.creditAmount + "تومان",
    //   });
    // });
    // await GetHeaderProfile().then((res) => {
    //   this.setState({
    //     avatarImage: res.avatar,
    //     accountName: res.username,
    //     creditAmount: res.credit,
    //   });
    //   this.setState({
    //     creditText: "اعتبار: " + this.state.creditAmount + " تومان",
    //   });
    // });
  };
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Avatar />
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>{this.state.accountName}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{this.state.creditText}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
class NotificationsList extends React.Component {
  state = {
    Notifications: [],
  };

  // componentDidMount = async () => {
  //   await axios.get(makeURL(references.url_notifications)).then((res) => {
  //     this.setState({ Notifications: res.data[0] });
  //   });
  //   this.setState({ Notifications: this.state.Notifications.reverse() });
  //   this.setState({ Notifications: this.state.Notifications.slice(0, 5) });
  // };

  render() {
    return (
      <div>
        {this.state.Notifications.map((e) => {
          let link = "/profile/notifications";
          if (e.subject == "خوش امدگویی") {
            if (e.text.split(" ")[2] == "ی") link = "/profile/notifications";
            else link = "/community/" + e.related_info;
          } else if (e.subject.split(" ")[0] === "پاراگراف") {
            link = e.related_info;
          } else if (e.subject === "کتاب جدید اضافه شد") {
            link = e.related_info;
          }
          return (
            <MenuItem
              onClick={() => {
                window.location.replace(link);
              }}
            >
              <div>
                <Typography style={{ fontSize: 18 }}>{e.subject}</Typography>
                <Typography style={{ fontSize: 10 }}>
                  {/* {persianDate(e.date)} */}
                </Typography>
                <Typography style={{ fontSize: 15 }}>{e.text}</Typography>
              </div>
            </MenuItem>
          );
        })}
        <div style={{ margin: "auto", width: "90%" }}>
          <Typography style={{ fontSize: 16 }} component="div">
            <Link color="primary" href="/profile/notifications">
              View All
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Header;
