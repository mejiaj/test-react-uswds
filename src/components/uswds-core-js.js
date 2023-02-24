// * Works

// ? Absolute path

// * Works
// import isIosDevice from "/node_modules/@uswds/uswds/packages/uswds-core/src/js/utils/is-ios-device";

// ! Doesn't work
// import isIosDevice from "@uswds/uswds-core/js/utils/is-ios-device";
// import isIosDevice from "@uswds/uswds/packages/uswds-core/src/js/utils/is-ios-device";

// ? Doesn't work because utils aren't imported or exported as a package in entrypoint.
// import uswds from "@uswds/uswds";
// const { isIosDevice } = uswds;

// import isIosDevice from "@uswds/uswds/uswds-core/packages/src/js/utils/is-ios-device";

const UswdsCoreTest = () => {
  return (
    <section>
      <h1>Util scripts test</h1>

      <h2>Calling scripts from USWDS-Core</h2>
      <code>
        {/* isIosDevice from "@uswds/uswds-core/js/utils/is-ios-device": {isIosDevice().toString()} */}
      </code>
    </section>
  );
};

export default UswdsCoreTest;
