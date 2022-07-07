import "./styles.scss";
import UswdsCoreTest from "./components/uswds-core-js";
import UswdsCoreStyles from "./components/uswds-core-styles";
import UsaAccordion from "./components/usa-accordion";

function App() {
  return (
    <div className="container">
      <UswdsCoreTest />
      <hr />
      <UswdsCoreStyles />
      <hr />
      <h1>Accordion component example</h1>
      <UsaAccordion />
    </div>
  );
}

export default App;
