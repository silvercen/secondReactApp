import { useState } from "react";

export default function EcomAddValidation() {
  const [gadgetData, setGadgetData] = useState({
    prodId: 0,
    prodName: "",
    prodCost: 0,
    prodImage: "",
  });

  const [gadgetErrorData, setGadgetErrorData] = useState({
    prodId: true,
    prodName: true,
    prodCost: true,
    prodImage: true,
  });

  function handleFormChange(event) {
    console.log(event);
    // setGadgetData({ ...gadgetData, prodName: e.target.value });
    // setGadgetData({ ...gadgetData, prodCost: e.target.value });
    // setGadgetData({ ...gadgetData, prodImage: e.target.value })

    setGadgetErrorData({
      ...gadgetErrorData,
      [event.target.name]: event.target.validity.valid,
    });

    setGadgetData({ ...gadgetData, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(gadgetData);
  }
  return (
    <>
      <div className="container m-5">
        <div className="card">
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="card-header bg-success text-light">
              <h3>ADD A NEW GADGET</h3>
            </div>
            <div className="card-body">
              <div className="form-control-group m-1">
                <label htmlFor="gName" className="form-label">
                  Gadget Name:
                </label>
                <input
                  type="text"
                  id="gName"
                  placeholder="Enter Gadget Name"
                  className="form-control"
                  required
                  name="prodName"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {gadgetErrorData.prodName ? "" : "Gadget Name is Required!"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="gCost" className="form-label">
                  Gadget Cost:
                </label>
                <input
                  type="text"
                  id="gCost"
                  placeholder="Enter Gadget Cost"
                  className="form-control"
                  required
                  name="prodCost"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {gadgetErrorData.prodCost ? "" : "Gadget Cost is Required!"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="gImage" className="form-label">
                  Gadget Image Url:
                </label>
                <input
                  type="text"
                  id="gImage"
                  placeholder="Enter Gadget Image Url"
                  className="form-control"
                  name="prodImage"
                  onChange={(e) => handleFormChange(e)}
                ></input>
              </div>
            </div>
            <div className="card-footer bg-success text-light">
              <button type="submit" className="btn btn-light text-success">
                ADD
              </button>
              <button type="reset" className="btn btn-light text-success mx-5">
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}