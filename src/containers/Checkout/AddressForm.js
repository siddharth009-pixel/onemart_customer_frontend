import React, { useState } from "react";
import { MaterialInput } from "../../components/MaterialUI";

const AddressForm = (props) => {
  const initalData = props.initalData;
  const onSubmit = props.onSubmit;
  const onSubmitFormAndDeliever = props.onSubmitFormAndDeliever;
  const [name, setName] = useState(initalData ? initalData.name : "");
  const [mobileNumber, setMobileNumber] = useState(
    initalData ? initalData.mobileNumber : ""
  );
  const [pinCode, setPinCode] = useState(initalData ? initalData.pinCode : "");
  const [locality, setLocality] = useState(
    initalData ? initalData.locality : ""
  );
  const [address, setAddress] = useState(initalData ? initalData.address : "");
  const [cityDistrictTown, setCityDistrictTown] = useState(
    initalData ? initalData.cityDistrictTown : ""
  );
  const [state, setState] = useState(initalData ? initalData.state : "");
  const [landmark, setLandmark] = useState(
    initalData ? initalData.landmark : ""
  );
  const [alternatePhone, setAlternatePhone] = useState(
    initalData ? initalData.alternatePhone : ""
  );
  const [addressType, setAddressType] = useState(
    initalData ? initalData.addressType : ""
  );

  const onsubmitForm = () => {
    let payload = {};
    if (initalData) {
      payload = {
        id: props.initalData._id,
        address: {
          name,
          mobileNumber,
          pinCode,
          locality,
          address,
          cityDistrictTown,
          state,
          landmark,
          alternatePhone,
          addressType,
        },
      };
    } else {
      payload = {
        address: {
          name,
          mobileNumber,
          pinCode,
          locality,
          address,
          cityDistrictTown,
          state,
          landmark,
          alternatePhone,
          addressType,
        },
      };
    }

    onSubmit(payload);
  };

  const onSubmitAndDeliever = () => {
    let payload = {};
    if (initalData) {
      payload = {
        id: props.initalData._id,
        address: {
          name,
          mobileNumber,
          pinCode,
          locality,
          address,
          cityDistrictTown,
          state,
          landmark,
          alternatePhone,
          addressType,
        },
      };
    } else {
      payload = {
        address: {
          name,
          mobileNumber,
          pinCode,
          locality,
          address,
          cityDistrictTown,
          state,
          landmark,
          alternatePhone,
          addressType,
        },
      };
    }

    onSubmitFormAndDeliever(payload);
  };

  return (
    <>
      <div>
        <div className="addFormStep">
          <div className="flexRow">
            <div style={{ margin: "10px 15px", width: "100%" }}>
              <MaterialInput
                label="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div style={{ margin: "10px 15px", width: "100%" }}>
              <MaterialInput
                label="mobile number"
                type="text"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flexRow">
            <div style={{ margin: "10px 15px", width: "100%" }}>
              <MaterialInput
                label="address"
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flexRow">
            <div style={{ margin: "10px 15px", width: "100%" }}>
              <MaterialInput
                label="landmark"
                type="text"
                value={landmark}
                onChange={(e) => {
                  setLandmark(e.target.value);
                }}
              />
            </div>
            <div style={{ margin: "10px 15px", width: "100%" }}>
              <MaterialInput
                label="pincode"
                type="text"
                value={pinCode}
                onChange={(e) => {
                  setPinCode(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flexRow">
            <div style={{ margin: "10px 15px", width: "100%" }}>
              <MaterialInput
                label="city/district/town"
                type="text"
                value={cityDistrictTown}
                onChange={(e) => {
                  setCityDistrictTown(e.target.value);
                }}
              />
            </div>
            <div style={{ margin: "10px 15px", width: "100%" }}>
              <MaterialInput
                label="state"
                type="text"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flexRow">
            <div style={{ margin: "10px 15px", width: "100%" }}>
              <MaterialInput
                label="alternate phoneNumber"
                type="text"
                value={alternatePhone}
                onChange={(e) => {
                  setAlternatePhone(e.target.value);
                }}
              />
            </div>
            <div style={{ margin: "10px 15px", width: "100%" }}>
              <MaterialInput
                label="locality"
                type="text"
                value={locality}
                onChange={(e) => {
                  setLocality(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flexRow">
            <div
              className="flexRow"
              style={{ margin: "10px 15px", width: "50%", textAlign: "center" }}
            >
              <div>
                <span>Address type :</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="type"
                  value="home"
                  onClick={() => {
                    setAddressType("home");
                  }}
                />
                <label>home</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="type"
                  value="work"
                  onClick={() => {
                    setAddressType("work");
                  }}
                />
                <label>work</label>
              </div>
            </div>
          </div>

          <div>
            <>
              <div
                style={{
                  cursor: "pointer",
                  backgroundColor: "orange",
                  margin: "10px 10px 0px 0",
                  padding: "10px 10px",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <span
                  onClick={onsubmitForm}
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Add Address
                </span>
              </div>
              <div
                style={{
                  cursor: "pointer",
                  backgroundColor: "orange",
                  margin: "10px 10px 0px 0",
                  padding: "10px 10px",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <span
                  onClick={onSubmitAndDeliever}
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  save and deliever here
                </span>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
