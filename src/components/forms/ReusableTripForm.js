import React, { useState } from "react";
import PropTypes from "prop-types";
import DestinationInfoFields from "./DestinationInfoFields";
import GearRequirementsFields from "./GearRequirementsFields";
import MiscellaneousFields from "./MiscellaneousFields";
import TripCostsFields from "./TripCostsFields";
import TripNotesFields from "./TripNotesFields";

function ReusableTripForm(props) {
  const { trip } = props;
  const [tripType, setTripType] = useState('');

  // button which renders when a trip type is selected //

  const createButton = <button type="submit">{props.buttonText}</button>

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select defaultValue="" name="tripType" onChange={(event) => setTripType(event.target.value)}>
          <option value="" disabled selected>Trip Type</option>
          <option value="Past">Past</option>
          <option value="Future">Future</option>
        </select>
        <br/>
        {tripType && (
          <DestinationInfoFields trip={trip} tripType={tripType}/>
        )}

        {tripType === "Past" && (
          <TripNotesFields/>
        )}

        {tripType === "Future" && (
          <React.Fragment>
            <TripCostsFields/>
            <GearRequirementsFields/>
          </React.Fragment>
        )}

        {tripType && (
          <MiscellaneousFields tripType={tripType}/>
        )}

        {tripType && (
          <React.Fragment>
            <br/>
            {createButton}
          </React.Fragment>
        )}
      </form>
      <br/>
    </React.Fragment>
  )
}

ReusableTripForm.propTypes = {
  trip: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableTripForm;