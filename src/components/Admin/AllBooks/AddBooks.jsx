import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../../api/baseURL";
import { toast } from "react-toastify";

const AddBooks = () => {
  const baseURL = getBaseURL();
  const navigate = useNavigate();
  const API_URL = `${baseURL}/books/create`; 
  const [formData, setFormData] = useState({
    name: "",
    authorName: "",
    category: "",
    image: "",
    pdf: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your API with formData
      const response = await axios.post(API_URL, formData);
      toast.success("Book Added successfully");
      console.log("Data successfully submitted:", response.data);
      navigate("/admin/allbooks");
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("failed !", error);
    }
  };

  return (
    <div class="card bg-white">
      <div class="card-body">
        <h2 className="mx-5 py-3 text-lg font-semibold">Add a new book</h2>
        <div className="container mx-auto p-4">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto grid col-2">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
                placeholder="Author Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
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
                name="pdf"
                value={formData.pdf}
                onChange={handleChange}
                placeholder="Pdf Link"
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
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="" disabled selected hidden>
                  Select category
                </option>
                <option value="islamic">Islamic</option>
                <option value="children">Children</option>
                <option value="programming">Programming</option>
                <option value="sports">Sports</option>
                <option value="story">Story</option>
                <option value="cook">Cook</option>
                <option value="poetry">poetry</option>
              </select>
            </div>

            <button
              type="submit"
              className="mb-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
