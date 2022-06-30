// * Works

// ? Absolute path
// import isIosDevice from "../../node_modules/@uswds/uswds-core/src/js/utils/is-ios-device"

// ? Utils export "./js/utils/*"
import isIosDevice from "@uswds/uswds-core/js/utils/is-ios-device";

const UswdsCoreTest = () => {
  return (
    <section>
      <h1>Util scripts test</h1>

      <h2>Calling scripts from USWDS-Core</h2>
      <code>
        isIosDevice from "@uswds/uswds-core/js/utils/is-ios-device": {isIosDevice().toString()}
      </code>
    </section>
  );
};

export default UswdsCoreTest;
