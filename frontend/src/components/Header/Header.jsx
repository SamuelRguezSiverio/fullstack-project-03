import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Smartphones", "Carrito", "Log out"];

function DrawerAppBar(props) {
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('cart')
    navigate("/login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: "orange",
          textDecoration: "none",
          fontFamily: "Dela Gothic One",
        }}
      >
        triPHONE
      </Typography>
      <Divider />
      <List sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
      {navItems.map((item) => {
              if (item === "Log out") {
                return (
                  <Button
                    key={item}
                    sx={{
                      color: "black",
                      marginLeft: "10px",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "orange",
                      },
                      cursor: "pointer",
                    }}
                    onClick={handleLogout}
                  >
                    {item}
                  </Button>
                );
              } else {
                return (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    state={{ categoryName: item }}
                  >
                    <Button
                      key={item}
                      sx={{
                        color: "black",
                        marginBottom: '20px',
                        marginLeft: "10px",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "orange",
                        },
                      }}
                    >
                      {item}
                    </Button>
                  </Link>
                );
              }
            })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "white", color: "black" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "orange" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              to="/"
              style={{
                color: "orange",
                textDecoration: "none",
                fontFamily: "Dela Gothic One",
              }}
            >
              triPHONE

            </Link>
          </Typography>
          <SearchBar />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              if (item === "Log out") {
                return (
                  <Button
                    key={item}
                    sx={{
                      color: "black",
                      marginLeft: "10px",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "orange",
                      },
                      cursor: "pointer",
                    }}
                    onClick={handleLogout}
                  >
                    {item}
                  </Button>
                );
              } else {
                return (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    state={{ categoryName: item }}
                  >
                    <Button
                      key={item}
                      sx={{
                        color: "black",
                        marginLeft: "10px",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "orange",
                        },
                      }}
                    >
                      {item}
                    </Button>
                  </Link>
                );
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
