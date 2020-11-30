import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Forms = lazy(() => import("./Forms/Forms"));
const FormikForm = lazy(() => import("./Formik-Form/FormikForm"));
const ReactHookForm = lazy(() => import("./ReactHookForm/ReactHookForm"));

function App() {
  return (
    <Router>
      <div className="container-fluid m-0 p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              Form
            </Link>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/formik">
                  Formik
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/react-hook-form">
                  React Hook Form
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto">
          <div className="row mt-3">
            <div className="col border py-3">
              <Suspense fallback={<div>Form is loading ...</div>}>
                <Switch>
                  <Route path="/react-hook-form">
                    <ReactHookForm />
                  </Route>
                  <Route path="/formik">
                    <FormikForm />
                  </Route>
                  <Route path="/">
                    <Forms />
                  </Route>
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
