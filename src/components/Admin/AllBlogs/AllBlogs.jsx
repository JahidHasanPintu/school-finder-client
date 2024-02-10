import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../../api/baseURL";
import axios from "axios";
import Pagination from "../../Pagination/Pagination";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const AllBlogs = () => {
  const baseURL = getBaseURL();
  const [schools, setSchools] = useState([]);
  const [schoolData, setSchoolData] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterDivision, setFilterDivision] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const location = useLocation();
  const pathName = `${location.pathname}`;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const apiEndpoint = `${baseURL}/schools?page=${page}&limit=${limit}&search=${search}&filterType=${filterType}&filterDivision=${filterDivision}`;
    axios
      .get(apiEndpoint)
      .then((response) => {
        setSchools(response.data.schools);
        setSchoolData(response.data);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching schools:", error);
      });

    setIsLoading(false);
  }, [page, limit, search, filterType, filterDivision]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
  };
  const handleDelete = (schoolId) => {
    const apiEndpoint = `${baseURL}/schools/${schoolId}`;
    axios
      .delete(apiEndpoint)
      .then((response) => {
        toast.success(response.data.message);
        console.log(response.data);
        setSchools((prevSchools) =>
          prevSchools.filter((school) => school._id !== schoolId)
        );
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching schools:", error);
      });
  };

  const navigate = useNavigate();
  const handleEdit = (school) => {
    navigate(`/admin/edit-blogs`, { state: { school } });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="px-1 border-b">
          <Link to={"/admin/addblogs"}>
            <button className="mb-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
              Add Blog{" "}
            </button>
          </Link>
        </div>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">School Name</th>
              <th className="py-2 px-4 border-b">Contact</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Thana</th>

              <th className="py-2 px-4 border-b">District</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {schools.map((school, index) => (
              <tr key={school._id}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">
                  {school?.INSTITUTE_NAME_NEW}
                </td>
                <td className="py-2 px-4 border-b">{school?.MOBPHONE}</td>
                <td className="py-2 px-4 border-b">{school?.LOCATION}</td>
                <td className="py-2 px-4 border-b">{school?.THANA_NAME}</td>

                <td className="py-2 px-4 border-b">{school?.DISTRICT_NAME}</td>

                <td>
                  <div className="flex">
                    <div className="px-1 border-b">
                      <button
                        onClick={() => handleEdit(school)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                      >
                        Edit{" "}
                      </button>
                    </div>
                    <div className="px-1 border-b">
                      <button
                        onClick={() => handleDelete(school._id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                      >
                        Delete{" "}
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          path={pathName}
        />
      </div>
    </div>
  );
};

export default AllBlogs;
