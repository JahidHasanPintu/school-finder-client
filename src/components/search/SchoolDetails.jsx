import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../api/baseURL";
import axios from "axios";
const SchoolDetails = () => {
    const location = useLocation();
    const school = location.state.school;

    const baseURL = getBaseURL();
    const [isLoading, setIsLoading] = useState(true);
    const [recSchools, setRecSchools] = useState([]);
    const eiin = school?.EIIN; 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const apiEndpoint = `${baseURL}/recommendation`;
          const response = await axios.post(apiEndpoint, { eiin });
          setRecSchools(response.data); 
        } catch (error) {
          console.error("Error fetching schools:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div class="mt-5 mx-10 w-8/12">
            <h3>{school.INSTITUTE_NAME_NEW}</h3>
        </div>
    );
};

export default SchoolDetails;
