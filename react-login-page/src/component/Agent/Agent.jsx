import "./Agent.css";
import React, {  useState } from "react";

import { useNavigate } from "react-router-dom";

import { useRef } from "react";


const Agent = () => {
const navigate = useNavigate();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    newsTitle: "",
    newsDesc: "",
    newsStartDate: "",
    newsEndDate: "",
    thumbNail: null,
    sourceUrl: "",
  });

  const newsList = (data) => {
    navigate("/news-list");
  }
  const handleFileUpload = (e) => {
    let banner = e.target.files[0];
    setFormData({ ...formData, thumbNail: banner });
  };
  const handleAddNewsData = () => {
   

    setTimeout(() => {
      resetForm();
    }, 3000);
    
   
  };



  const handleAddNews = (e) => {
    e.preventDefault();
    handleAddNewsData();
    setTimeout(() => {
      resetForm();
    }, 3000);
    
    // setFormData("");
    
  };

  const resetForm = () => {
    setFormData({
      newsTitle: "",
      newsDesc: "",
      newsStartDate: "",
      newsEndDate: "",
      thumbNail: null,
      sourceUrl: "",
    });
    formRef.current.reset();
  }
  





  return (
    <>
     
      <div className="add-news py-3 d-flex justify-content-center align-items-center">
        <form className="form-container" onSubmit={handleAddNews} ref={formRef}>
          <div className="section-heading mb-5">
            <h3 className="mt-0 ">Add Agent</h3>
            <hr />
          </div>

          <div id="course-creation-form">
            <div className="row">
              {/* new Title */}
              <div className="col">
                <div className="form-group">
                  <input
                    type="text"
                    name="newsTitle"
                    id="newsTitle"
                    placeholder="Enter First Name"
                    className="form-control"
                    value={formData?.newsTitle}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, newsTitle: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {/* new Title */}
              <div className="col">
                <div className="form-group">
                  <input
                    type="text"
                    name="newsTitle"
                    id="newsTitle"
                    placeholder="Enter Last Name"
                    className="form-control"
                    value={formData?.newsTitle}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, newsTitle: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {/* new Title */}
              <div className="col">
                <div className="form-group">
                  <input
                    type="text"
                    name="newsTitle"
                    id="newsTitle"
                    placeholder="Enter Email"
                    className="form-control"
                    value={formData?.newsTitle}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, newsTitle: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {/* new Title */}
              <div className="col">
                <div className="form-group">
                  <input
                    type="text"
                    name="newsTitle"
                    id="newsTitle"
                    placeholder="Enter Phone No"
                    className="form-control"
                    value={formData?.newsTitle}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, newsTitle: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            
            <div className="row">
              {/* start date */}
              <div className="col">
                <div className="form-group">
                  <label className="me-3">Start Date</label>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    style={{ width: "auto" }}
                    value={formData?.newsStartDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) =>
                      setFormData({ ...formData, newsStartDate: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              {/* end date */}
              <div className="col">
                <div className="form-group">
                  <label className="me-3">End Date</label>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    style={{ width: "auto" }}
                    value={formData?.newsEndDate}
                    min={formData.newsStartDate}
                    onChange={(e) =>
                      setFormData({ ...formData, newsEndDate: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row"></div>
            <div className="row">
              {/* buttons */}
              <div className="col">
                <div className="form-group d-flex justify-content-end align-items-center">
                  <button type="button" onClick={() => newsList(true)} className="btn btn-outline-warning" >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary " >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Agent;


// Cookies.remove();
