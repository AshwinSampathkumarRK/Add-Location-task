import { useEffect, useState } from "react";
import Card from "../Components/card";
import InputField from "../Components/input";
import Button from "../Components/button";
import Alert from "../Components/alert";
import { connect } from "react-redux";
import {
  getLocationData,
  updateLocationData,
  createLocationData,
} from "../Store/actions/locationAction";
import { bindActionCreators } from "redux";

const Home = (props) => {
  const [selectedLocationData, setSelectedLocationData] = useState({});
  const [businessName, setBusinessName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [showForm, toggleForm] = useState(false);
  const [isEdit, toggleEdit] = useState(false);
  const [showAlert, toggleAlertShow] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isEditing, toggleIsEditing] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let payload = [
      "V",
      "1",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    props.getLocationData(payload);
  };

  const updateData = async (value) => {
    toggleIsEditing(value);
    let payload = [
      "U",
      "1",
      locationName,
      null,
      addressLine,
      null,
      city,
      state,
      postalCode,
      null,
      null,
      null,
      null,
      null,
      null,
      country,
      selectedLocationData.lid,
      null,
    ];
    await props.updateLocationData(payload);
  };

  useEffect(() => {
    if (props.updateLocationResponse) {
      if (props.updateLocationResponse.success) {
        getData();
        if (!isEditing) {
          toggleEdit(false);
          toggleForm(false);
          toggleAlertShow(true);
          setAlertType("Success");
          setAlertMessage("Business has been updated successfully");
        }
      } else {
        toggleEdit(false);
        toggleForm(false);
        toggleAlertShow(true);
        setAlertType("Error");
        setAlertMessage("Something went wrong. Please try again later.");
      }
    }
  }, [props.updateLocationResponse]);

  useEffect(() => {
    if (props.createLocationResponse) {
      if (props.createLocationResponse.success) {
        getData();
        toggleEdit(false);
        toggleForm(false);
        toggleAlertShow(true);
        setAlertType("Success");
        setAlertMessage("Business has been added successfully");
      } else {
        toggleEdit(false);
        toggleForm(false);
        toggleAlertShow(true);
        setAlertType("Error");
        setAlertMessage("Something went wrong. Please try again later.");
      }
    }
  }, [props.createLocationResponse]);

  const createData = async () => {
    let payload = [
      "I",
      "1",
      locationName,
      null,
      addressLine,
      null,
      city,
      state,
      postalCode,
      null,
      null,
      null,
      null,
      null,
      null,
      country,
      null,
      null,
    ];
    await props.createLocationData(payload);
  };

  const setFormData = (data) => {
    setSelectedLocationData(data);
    setBusinessName(data.businessName ? data.businessName : "");
    setLocationName(data.locationame ? data.locationame : "");
    setAddressLine(data.add1 ? data.add1 : "");
    setCountry(data.country ? data.country : "");
    setPostalCode(data.pc ? data.pc : "");
    setState(data.st ? data.st : "");
    setCity(data.city ? data.city : "");
  };

  return (
    <>
      <div className="home-head">
        <h1 className="list-title">List of Locations</h1>
        <Button
          button-class="add-new-btn"
          label="Add new location"
          onClick={() => {
            setFormData({});
            toggleEdit(false);
            toggleForm(true);
          }}
        />
      </div>
      <div>
        {props.locationDataArray?.length
          ? props.locationDataArray.map((item, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setFormData(item);
                    toggleEdit(true);
                    toggleForm(true);
                  }}
                >
                  <Card
                    id={item.lid}
                    title={item.locationame}
                    desc={item.add1 ? item.add1 : "No address"}
                  />
                </div>
              );
            })
          : "No data"}
      </div>
      {showForm ? (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                getData();
                toggleEdit(false);
                toggleForm(false);
              }}
            >
              &times;
            </span>
            <h1 className="modal-label">
              Business Details - {isEdit ? "Update" : "Create"} Details
            </h1>

            <div className="form-content">
              <InputField
                label="Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                onBlur={() => {
                  isEdit ? updateData(true) : null;
                }}
              />
              <InputField
                label="Location Name"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                onBlur={() => {
                  isEdit ? updateData(true) : null;
                }}
              />
              <InputField
                label="Address Line 1"
                value={addressLine}
                onChange={(e) => setAddressLine(e.target.value)}
                onBlur={() => {
                  isEdit ? updateData(true) : null;
                }}
              />
              <InputField
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                onBlur={() => {
                  isEdit ? updateData(true) : null;
                }}
              />
              <InputField
                label="PostalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                onBlur={() => {
                  isEdit ? updateData(true) : null;
                }}
              />
              <InputField
                label="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                onBlur={() => {
                  isEdit ? updateData(true) : null;
                }}
              />
              <InputField
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onBlur={() => {
                  isEdit ? updateData(true) : null;
                }}
              />
              <Button
                onClick={() => (isEdit ? updateData(false) : createData())}
                label="Save"
              />
            </div>
          </div>
        </div>
      ) : null}
      <Alert
        show={showAlert}
        title={alertType}
        message={alertMessage}
        onChange={(e) => toggleAlertShow(e)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  locationDataArray: state.locationReducer.locationData,
  createLocationResponse: state.locationReducer.createLocationResponse,
  updateLocationResponse: state.locationReducer.updateLocationResponse,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getLocationData, updateLocationData, createLocationData },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
