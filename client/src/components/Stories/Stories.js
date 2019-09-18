import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Stories(props) {
  return (
    <div className="storiesPage">
      <div className="container">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6 articleSection">
            <h1 className="artTitle">Over the past 10 years, at least 82 journalists have been killed in Mexico for exercising their profession. Miroslava Breach was one of them.</h1>
            <h10 className="artBody">At 7 a.m. on March 23, 2017, Miroslava Breach, a well-known journalist in Mexico, got in her car outside her home in Chihuahua City in Northern Mexico, to drive her 14-year-old son to school. A man appeared – his face hidden by a hat – and opened fire. The journalist did not survive the attack.

Breach was known for her exemplary and fearless investigative work. She worked for the newspapers La Jornada and El Norte de Ciudad Juarez, reporting on organized crime and corrupt local authorities in Chihuahua, her native state which also happens to be one of the most violent in the country. During the last months of her life, she devoted her work to “narco-politicians,” members of drug cartels who have infiltrated the country’s political sphere to consolidate their control.

More than two years after the murder, investigations by both local and federal authorities have left many loose ends. None of them have established any link between this murder and climinal groups or politicians despite Miroslava’s investigations on the subject, and despite the threats she had received from them.

This is why the Mexican journalists grouped in El Colectivo 23 de marzo, in collaboration with international jouranlists from Forbidden Stories, Bellingcat andthe Latin American Center for Investigative Journalism (CLIP) exposed the shortcomings of this investigation – which was meant to be a “model” – and shed light on the climate of fear imposed by cartels in the region.

This is why the Mexican journalists grouped in El Colectivo 23 de marzo, in collaboration with international jouranlists from Forbidden Stories, Bellingcat andthe Latin American Center for Investigative Journalism (CLIP) joined forces to investigate under the name “Project Miroslava.” </h10>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Stories;
