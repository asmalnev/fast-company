import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./layouts/Login";
import Users from "./layouts/Users";
import NavBar from "./components/ui/NavBar";
import { ToastContainer } from "react-toastify";
import ProfessionsProvider from "./hooks/useProfessions";
import QualitiesProvider from "./hooks/useQualities";

const App = () => {
  return (
    <>
      <NavBar />
      <QualitiesProvider>
        <ProfessionsProvider>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login/:type?" component={Login} />
            <Route path="/users/:userId?/:edit?" component={Users} />
            <Redirect to="/" />
          </Switch>
        </ProfessionsProvider>
      </QualitiesProvider>

      <ToastContainer />
    </>
  );
};

export default App;
