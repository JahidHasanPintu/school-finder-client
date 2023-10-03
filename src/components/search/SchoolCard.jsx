import React from 'react';

const SchoolCard = (props) => {
    // const [DIVISION_NAME, DISTRICT_NAME, THANA_NAME, TYP, LVL, EIIN, INSTITUTE_NAME_NEW, POST_OFFICE, LOCATION, MOBPHONE] = props.school || [];

   
    return (
        <div class="mt-5 mx-auto w-8/12 ">
               <div className='bg-gray-200 lg:flex'>
               <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
                <img class="mr-4" src="https://static.vecteezy.com/system/resources/previews/004/641/880/non_2x/illustration-of-high-school-building-school-building-free-vector.jpg" alt="school" />
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                        <p class="text-sm text-gray-600 flex items-center">
                            
                            EIIN: {props?.school?.EIIN || "NA"}
                        </p>
                        <div class="text-gray-900 font-bold text-xl mb-2">{props?.school?.INSTITUTE_NAME_NEW || "NA"}</div>
                        <p class="text-gray-700 text-base">
                            Division: {props?.school?.DIVISION_NAME || "NA"}  District: {props?.school?.DISTRICT_NAME || "NA"} Thana: {props?.school?.THANA_NAME || "NA"} Type: {props?.school?.TYP || "NA"} Level: {props?.school?.LVL || "NA"} Post: {props?.school?.POST_OFFICE || "NA"}: Location: {props?.school?.LOCATION || "NA"} Mobile: {props?.school?.MOBPHONE || "NA"}
                            </p>
                        
                    </div>
                    
                </div>
               </div>
            </div>
    );
};

export default SchoolCard;