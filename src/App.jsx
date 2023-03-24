import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentSpace from "./pages/StudentSpace";
{  /* super admin and admin view paths */ }
import SuperAdminSpace from "./pages/SuperAdminSpace";
import CreationAnnouncement from "./components/SuperAdminSpace/CreationAnnouncement";
import UsersTable from "./components/SuperAdminSpace/UsersTable";
import Statistics from "./components/SuperAdminSpace/Statistics";
import CreationAdmin from "./components/SuperAdminSpace/CreationAdmin";
import AdminSpace from "./pages/AdminSpace";
{  /* Import form paths */ }
import Register from "./pages/Register";
import Student from "./components/Form/Student";
import Social from "./components/Form/Social";
import Residence from "./components/Form/Residence";
import Guardian from "./components/Form/Guardian";
import Vocation from "./components/Form/Vocation";
import Motivation from "./components/Form/Motivation";
import Logic from "./components/Form/Logic";
import EmailVerificationWindow from "./components/EmailVerificationWindow ";
import UnauthorizedWindow from "./components/UnauthorizedWindow ";
import Auth from "./middlewares/Auth"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/Login" element={<Login />} exact></Route>
          <Route path="/Singup" element={<Signup />} exact></Route>

          {/* super admin and admin view paths */}
          <Route
            path="/Superadminspace"
            element={
              <Auth profile="SuperAdmin">
                <SuperAdminSpace />
              </Auth>
            }
          >
            <Route
              index
              exact
              path="/Superadminspace/CreationAnnouncement"
              element={<CreationAnnouncement />}
            ></Route>
            <Route
              exact
              path="/Superadminspace/UsersTable"
              element={<UsersTable />}
            ></Route>
            <Route
              exact
              path="/Superadminspace/Statistics"
              element={<Statistics />}
            ></Route>
            <Route
              exact
              path="/Superadminspace/CreationAdmin"
              element={<CreationAdmin />}
            ></Route>
          </Route>

          <Route
            path="/Adminspace"
            element={
              <Auth profile="Admin">
                <AdminSpace />
              </Auth>
            }
          >
            <Route
              index
              exact
              path="/Adminspace/CreationAnnouncement"
              element={<CreationAnnouncement />}
            ></Route>
            <Route
              exact
              path="/Adminspace/UsersTable"
              element={<UsersTable />}
            ></Route>
            <Route
              exact
              path="/Adminspace/Statistics"
              element={<Statistics />}
            ></Route>
            <Route
              exact
              path="/Adminspace/CreationAdmin"
              element={<CreationAdmin />}
            ></Route>
          </Route>

          {/* Student paths */}
          <Route
            path="/Studentspace"
            element={
              <Auth profile="Student">
                <StudentSpace />
              </Auth>
            }
          >
            {/*Here should be the routes or components related to Student space Outlet*/}
          </Route>

          {/* Form paths */}
          <Route
            path="/Register"
            element={
              <Auth profile="Student">
                <Register />
              </Auth>
            }
          >
            <Route
              index
              exact
              path="/Register/Student"
              element={<Student />}
            ></Route>
            <Route exact path="/Register/Social" element={<Social />}></Route>
            <Route
              exact
              path="/Register/Residence"
              element={<Residence />}
            ></Route>
            <Route
              exact
              path="/Register/Guardian"
              element={<Guardian />}
            ></Route>
            <Route
              exact
              path="/Register/Vocation"
              element={<Vocation />}
            ></Route>
            <Route
              exact
              path="/Register/Motivation"
              element={<Motivation />}
            ></Route>
            <Route exact path="/Register/Logic" element={<Logic />}></Route>
          </Route>

          {/* Email verification */}
          <Route
            path="/Emailverificationwindow"
            element={<EmailVerificationWindow />}
            exact
          ></Route>
          {/* Authorized */}
          <Route
            path="/Unauthorizedwindow"
            element={<UnauthorizedWindow />}
            exact
          ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
