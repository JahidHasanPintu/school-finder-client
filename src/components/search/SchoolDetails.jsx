import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const SchoolDetails = () => {
    const location = useLocation();
    const school = location.state.school;

    // const [DIVISION_NAME, DISTRICT_NAME, THANA_NAME, TYP, LVL, EIIN, INSTITUTE_NAME_NEW, POST_OFFICE, LOCATION, MOBPHONE] = props.school || [];

    return (
        <div class="mt-5 mx-10 w-8/12">
            <h3>{school.INSTITUTE_NAME_NEW}</h3>
        </div>
    );
};

export default SchoolDetails;
