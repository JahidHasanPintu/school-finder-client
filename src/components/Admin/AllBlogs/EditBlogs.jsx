import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../../api/baseURL";
import { toast } from "react-toastify";
const EditBlogs = () => {
  const location = useLocation();
  const { school } = location.state || {};
  const schoolId = school?._id;
  console.log(school);
  const baseURL = getBaseURL();
  const navigate = useNavigate();
  const API_URL = `${baseURL}/schools/${schoolId}`; // Replace with your API URL
  const [formData, setFormData] = useState({
    DIVISION_NAME: "" || school.DIVISION_NAME,
    DISTRICT_NAME: "" || school.DISTRICT_NAME,
    THANA_NAME: "" || school.THANA_NAME,
    TYP: "" || school.TYP,
    LVL: "" || school.LVL,
    EIIN: "" || school.EIIN,
    INSTITUTE_NAME_NEW: "" || school.INSTITUTE_NAME_NEW,
    POST_OFFICE: "" || school.POST_OFFICE,
    LOCATION: "" || school.LOCATION,
    MOBPHONE: "" || school.MOBPHONE,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to  API with formData
      const response = await axios.put(API_URL, formData);
      toast.success(response.data.message);
      console.log("Data successfully submitted:", response.data);
      navigate("/admin/allschool");
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("failed !", error);
    }
  };

  return (
    <div class="card bg-white">
      <div class="card-body">
        <h2 className="mx-5 py-3 text-lg font-semibold">Edit school data</h2>
        <div className="container mx-auto p-4">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto grid col-2">
            <div className="mb-4">
              <input
                type="text"
                name="INSTITUTE_NAME_NEW"
                value={formData.INSTITUTE_NAME_NEW}
                onChange={handleChange}
                placeholder="Institute Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="MOBPHONE"
                value={formData.MOBPHONE}
                onChange={handleChange}
                placeholder="Mobile number"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="EIIN"
                value={formData.EIIN}
                onChange={handleChange}
                placeholder="EIIN"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="TYP"
                value={formData.TYP}
                onChange={handleChange}
                placeholder="Type (e.g., SCHOOL AND COLLEGE)"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="LVL"
                value={formData.LVL}
                onChange={handleChange}
                placeholder="Level (e.g., Higher Secondary)"
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="POST_OFFICE"
                value={formData.POST_OFFICE}
                onChange={handleChange}
                placeholder="Post Office"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="LOCATION"
                value={formData.LOCATION}
                onChange={handleChange}
                placeholder="Location"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="THANA_NAME"
                value={formData.THANA_NAME}
                onChange={handleChange}
                placeholder="Thana Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="DISTRICT_NAME"
                value={formData.DISTRICT_NAME}
                onChange={handleChange}
                placeholder="District Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="DIVISION_NAME"
                value={formData.DIVISION_NAME}
                onChange={handleChange}
                placeholder="Division Name"
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="mb-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlogs;
