// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Clases",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/perfilclase",
    name: "Clase de Matematica",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: PerfilClase,
    layout: "/admin",
  },
  /*{
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color="inherit" />,
    component: RTLPage,
    layout: "/rtl",
  },*/
  {
    name: "Personal",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Mi cuenta",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Ingresar",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Registrarse",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
