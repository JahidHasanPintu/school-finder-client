import React, { useEffect, useState } from 'react';
import SchoolCard from './SchoolCard';
import { getBaseURL } from '../../api/baseURL';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const Search = () => {
    const location = useLocation();
    const { searchTex } = location.state || {};
    const baseURL = getBaseURL();
    const [schools, setSchools] = useState([]);
    const [schoolData, setSchoolData] = useState();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [search, setSearch] = useState(searchTex || "");
    const [filterType, setFilterType] = useState("");
    const [filterDivision, setFilterDivision] = useState("");
    const [totalPages, setTotalPages] = useState("");;
    const pathName = `${location.pathname}`;




    useEffect(() => {
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


    }, [page, limit, search, filterType, filterDivision]);

    useEffect(() => {
        const setSearchValue = () => {
            if (searchTex) {
                setSearch(searchTex);
            }
        }
        setSearchValue();

    }, [searchTex]);

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearch(searchText);


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        


    }

    return (
        <div className='my-5 mx-2'>
            <form className='mx-10'>
                <label for="default-search" class="m-10 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        onChange={handleSearch}
                        defaultValue={searchTex || ""}
                        type="search"
                        id="default-search"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search School, Location..." required />
                    <button onClick={handleSubmit} class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
                <h2 className='m-2'>Showing {schoolData?.schoolsOnCurrentPage} out of {schoolData?.totalSchools} schools</h2>
            </form>
            {schools.map((school) => (
                <SchoolCard key={school._id} school={school} />
            ))}
            <Pagination page={page} totalPages={totalPages} setPage={setPage} path={pathName} />
        </div>
    );
};

export default Search;