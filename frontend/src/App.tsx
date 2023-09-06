import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import StockPage from "./components/pages/StockPage";
import { useSelector } from "react-redux";
import { authSelector, relogin } from "./store/slices/authSlice";
import { useAppDispatch } from "./store/store";
import PublicRoutes from "./router/public.routes";
import ProtectedRoutes from "./router/protected.routes";
import ShopPage from "./components/pages/ShopPage";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const authReducer = useSelector(authSelector);
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(true);

  React.useEffect(()=>{
    // Called when component is created or dependencies are changed
    dispatch(relogin())
    
    return ()=>{
      // Called when component is destroyed
    }
  },[dispatch]);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Check if still loading
  if (authReducer.isAuthenticating){
    return <Box>Loading...</Box>
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Header */}
      {authReducer.isAuthented && (
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      )}
      {/* Menu */}
      {authReducer.isAuthented && (
        <Menu open={open} handleDrawerClose={handleDrawerClose} />
      )}
      {/* Body */}
      <Main open={open}>
        <DrawerHeader />
        {/* Page */}
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<PublicRoutes isAuthented={authReducer.isAuthented} />}>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />            
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>

           {/* Secure Route */}
           <Route path="/" element={<ProtectedRoutes isAuthented={authReducer.isAuthented} />}>            
            <Route path="/stock" element={<StockPage />} />            
            <Route path="/shop" element={<ShopPage />} />
          </Route>
        </Routes>
      </Main>
    </Box>
  );
}
