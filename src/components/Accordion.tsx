import { useEffect } from "react";
// [@ts-ignore]
import accordion from "@uswds/uswds/js/usa-accordion";
// import "@uswds/usa-accordion/sass";

function UsaAccordion() {
  const ref = document.body;

  useEffect(() => {
    // initialize accordion
    accordion.on(ref);

    return () => {
      accordion.off();
    }
  });

  return(
    <div className="usa-accordion">
      <h4 className="usa-accordion__heading">
        <button
          className="usa-accordion__button"
          aria-expanded="true"
          aria-controls="a1">
            First amendment
        </button>
      </h4>
      <div id="a1"className="usa-accordion__content usa-prose">
        <p>
          Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
        </p>
      </div>
      <h4 className="usa-accordion__heading">
        <button
          className="usa-accordion__button"
          aria-expanded="true"
          aria-controls="a2">
            Second amendment
        </button>
      </h4>
      <div id="a2"className="usa-accordion__content usa-prose">
        <p>
          A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
        </p>
      </div>
    </div>
  )
}

export default UsaAccordion;
