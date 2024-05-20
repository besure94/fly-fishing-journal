import React from "react";
import PropTypes from "prop-types";

function DestinationInfoFields(props) {
  const { tripType, formData, setFormData } = props;

  const destination = <input type="text" name="destination" placeholder="Destination" defaultValue={formData.destination ??= ''} onChange={(e) => setFormData({...formData, destination: e.target.value})}/>

  const destinationType =
  <select name="destinationType" defaultValue={formData.destinationType ??= ''} onChange={(e) => setFormData({...formData, destinationType: e.target.value})}>
    <option value="" disabled selected>Destination Type</option>
    <option value="domestic">Domestic</option>
    <option value="international">International</option>
  </select>

  const waterType =
  <select name="waterType" defaultValue={formData.waterType ??= ''} onChange={(e) => setFormData({...formData, waterType: e.target.value})}>
    <option value="" disabled selected>Water Type</option>
    <option value="freshwater">Freshwater</option>
    <option value="saltwater">Saltwater</option>
  </select>

  const waterBodyType =
  <select name="waterBodyType" defaultValue={formData.waterBodyType ??= ''} onChange={(e) => setFormData({...formData, waterBodyType: e.target.value})}>
    <option value="" disabled selected>Water Body Type</option>
    <option value="river">River</option>
    <option value="lake">Lake</option>
    <option value="ocean">Ocean</option>
    <option value="mix">Mix</option>
  </select>

  const species = <input type="text" name="species" placeholder="Fish Species" defaultValue={formData.species ??= ''} onChange={(e) => setFormData({...formData, species: e.target.value})}/>

  const season =
  <select name="season" defaultValue={formData.season ??= ''} onChange={(e) => setFormData({...formData, season: e.target.value})}>
    <option value="" disabled selected>Season</option>
    <option value="winter">Winter</option>
    <option value="spring">Spring</option>
    <option value="summer">Summer</option>
    <option value="fall">Fall</option>
  </select>

  const state = <input type="text" name="state" placeholder="State" defaultValue={formData.state ??= ''} onChange={(e) => setFormData({...formData, state: e.target.value})}/>

  const county = <input type="text" name="county" placeholder="County" defaultValue={formData.county ??= ''} onChange={(e) => setFormData({...formData, county: e.target.value})}/>

  const country = <input type="text" name="country" placeholder="Country" defaultValue={formData.country ??= ''} onChange={(e) => setFormData({...formData, country: e.target.value})}/>

  const climate = <input type="text" name="climate" placeholder="Climate" defaultValue={formData.climate ??= ''} onChange={(e) => setFormData({...formData, climate: e.target.value})}/>

  return (
    <React.Fragment>
      <h4>Destination Info</h4>
      {destination}
      <br/>
      {destinationType}
      <br/>
      {season}
      <br/>
      {waterType}
      <br/>
      {waterBodyType}
      <br/>
      {species}
      <br/>
      {tripType === "Past" && (
        <React.Fragment>
          {state}
          <br/>
          {county}
          <br/>
        </React.Fragment>
      )}
      {country}
      <br/>
      {tripType === "Future" && (
        <React.Fragment>
          {climate}
          <br/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

DestinationInfoFields.propTypes = {
  tripType: PropTypes.string,
  formData: PropTypes.object,
  setFormData: PropTypes.func
}

export default DestinationInfoFields;