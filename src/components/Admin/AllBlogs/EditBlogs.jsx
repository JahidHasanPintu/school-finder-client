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
    title: "" || school.title,
    description: "" || school.description,
    image: "" || school.image,
    blogLink: "" || school.blogLink,
    category: "" || school.category,
    // EIIN: "" || school.EIIN,
    // INSTITUTE_NAME_NEW: "" || school.INSTITUTE_NAME_NEW,
    // POST_OFFICE: "" || school.POST_OFFICE,
    // LOCATION: "" || school.LOCATION,
    // MOBPHONE: "" || school.MOBPHONE,
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
        <h2 className="mx-5 py-3 text-lg font-semibold">Add a new school</h2>
        <div className="container mx-auto p-4">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto grid col-2">
            <div className="mb-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Blog title"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image Link"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="blogLink"
                value={formData.blogLink}
                onChange={handleChange}
                placeholder="blogLink"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="" disabled selected hidden>
                  Select Category
                </option>
                <option value="events">Events</option>
                <option value="blogs">Blogs</option>
              </select>
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
