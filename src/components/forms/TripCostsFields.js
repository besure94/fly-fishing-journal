import React from "react";
import PropTypes from "prop-types";

function TripCostsFields(props) {
  const { formData, setFormData } = props;

  const travelCosts = <input type="text" className="form-control" name="travelCosts" placeholder="Air Travel Costs" defaultValue={formData.travelCosts ??= ''} onChange={(e) => setFormData({...formData, travelCosts: e.target.value})}/>

  const travelDocs =
  <select name="travelDocs" className="form-select" defaultValue={formData.travelDocs ??= ''} onChange={(e) => setFormData({...formData, travelDocs: e.target.value})}>
    <option value="" disabled>Travel Documents*</option>
    <option value="Passport">Passport</option>
    <option value="Visa">Visa</option>
  </select>

  const tripExpenses = <input type="text" className="form-control" name="tripExpenses" placeholder="Fishing & Lodging Expenses*" defaultValue={formData.tripExpenses ??= ''} onChange={(e) => setFormData({...formData, tripExpenses: e.target.value})}/>

  const depositTerms = <input type="text" className="form-control" name="depositTerms" placeholder="Deposit Payment Terms*" defaultValue={formData.depositTerms ??= ''} onChange={(e) => setFormData({...formData, depositTerms: e.target.value})}/>

  const cancellationPolicy = <input type="text" className="form-control" name="cancellationPolicy" placeholder="Refund Cancellation Policy*" defaultValue={formData.cancellationPolicy ??= ''} onChange={(e) => setFormData({...formData, cancellationPolicy: e.target.value})}/>

  const baggageLuggage = <input type="text" className="form-control" name="baggageLuggage" placeholder="Baggage and Luggage Policy" defaultValue={formData.baggageLuggage ??= ''} onChange={(e) => setFormData({...formData, baggageLuggage: e.target.value})}/>

  const tripInsurance = <input type="text" className="form-control" name="tripInsurance" placeholder="Trip Insurance*" defaultValue={formData.tripInsurance ??= ''} onChange={(e) => setFormData({...formData, tripInsurance: e.target.value})}/>

  const evacInsurance = <input type="text" className="form-control" name="evacInsurance" placeholder="Medical Evacuation Insurance*" defaultValue={formData.evacInsurance ??= ''} onChange={(e) => setFormData({...formData, evacInsurance: e.target.value})}/>

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Trip Costs</h4>
      <p className="required-msg">* indicates a required field</p>
      {travelDocs}
      <br/>
      {travelCosts}
      <br/>
      {tripExpenses}
      <br/>
      {depositTerms}
      <br/>
      {tripInsurance}
      <br/>
      {evacInsurance}
      <br/>
      {cancellationPolicy}
      <br/>
      {baggageLuggage}
      <br/>
    </React.Fragment>
  )
}

TripCostsFields.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func
}

export default TripCostsFields;