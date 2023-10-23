import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getBaseURL } from '../../../api/baseURL';
import axios from 'axios';
import Pagination from '../../Pagination/Pagination';
import Loading from '../../Loading/Loading';

const Dashboard = () => {

    const baseURL = getBaseURL();
    const [schools, setSchools] = useState([]);
    const [schoolData, setSchoolData] = useState();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterDivision, setFilterDivision] = useState("");
    const [totalPages, setTotalPages] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const apiEndpoint = `${baseURL}/schools?page=${page}&limit=${limit}&search=${search}&filterType=${filterType}&filterDivision=${filterDivision}`;
        axios.get(apiEndpoint)
            .then((response) => {
                setSchools(response.data.schools);
                setSchoolData(response.data);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                // Handle errors
                console.error('Error fetching schools:', error);
            });

            setIsLoading(false);
    }, [page, limit, search, filterType, filterDivision]);

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearch(searchText);


    }

    const location = useLocation();
    const pathName = `${location.pathname}`;



    // const [orders, totalPages, totalItem, loading] = useOrders(page, limit, sortBy, userID);
  

    let pendingCount = 0;
    let deliveredCount = 0;
    let unpaidCount = 0;
  if (isLoading) {
    console.log("loading worked");
        return <Loading />
    }


    return (
        <div>
            <div class="flex flex-col">

                <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                    <div class="shadow-lg bg-red-500 border-l-8 hover:bg-red-700 border-red-700 mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                                {schoolData?.totalSchools}
                               
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total School
                            </a>
                        </div>
                    </div>

                    <div class="shadow bg-blue-500 border-l-8 hover:bg-blue-700 border-blue-700 mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                               
                                8
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total Division
                            </a>
                        </div>
                    </div>

                    <div class="shadow bg-green-300 border-l-8 hover:bg-green-500 border-green-500 mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                              
                                64
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total District
                            </a>
                        </div>
                    </div>

                    <div class="shadow bg-orange-300 border-l-8 hover:bg-orange-400 border-orange-400 mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                              
                                9
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total Board
                            </a>
                        </div>
                    </div>
                </div>


                <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 w-full">



                    <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                        <div class="px-6 py-2 border-b border-grey-700">
                            <div class="font-bold text-xl">Popular Schools</div>
                        </div>
                        <div class="table-responsive">
                            <table className="min-w-full border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="py-2 px-4 border-b">#</th>
                                        <th className="py-2 px-4 border-b">School Name</th>
                                        <th className="py-2 px-4 border-b">Contact</th>
                                        <th className="py-2 px-4 border-b">Location</th>
                                        <th className="py-2 px-4 border-b">Thana</th>

                                        <th className="py-2 px-4 border-b">District</th>
                                        <th className="py-2 px-4 border-b">EIIN</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {schools.map((school, index) => (
                                        <tr key={school._id}>
                                            <td className="py-2 px-4 border-b">{index + 1}</td>
                                            <td className="py-2 px-4 border-b">{school?.INSTITUTE_NAME_NEW}</td>
                                            <td className="py-2 px-4 border-b">{school?.MOBPHONE}</td>
                                            <td className="py-2 px-4 border-b">{school?.LOCATION}</td>
                                            <td className="py-2 px-4 border-b">{school?.THANA_NAME}</td>

                                            <td className="py-2 px-4 border-b">{school?.DISTRICT_NAME}</td>

                                            <td className="py-2 px-4 border-b">{school?.EIIN}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>
                        
                    </div>


                </div>
                <Pagination page={page} totalPages={totalPages} setPage={setPage} path={pathName} />

            </div>
        </div>
    );
};

export default Dashboard;