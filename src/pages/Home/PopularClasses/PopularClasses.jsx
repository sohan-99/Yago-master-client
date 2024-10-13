/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';

import { useEffect, useState } from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import Card from "./Card";

const PopularClasses = () => {
  const axiosFetch = useAxiosFetch();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await axiosFetch.get('/classes');
      setClasses(response.data);
    }

    fetchClasses();
  }, []);

  console.log(classes);

  return (
    <div className='md:w-[80%] mx-auto my-36'>
      <div>
        <h1 className='text-5xl font-bold text-center'>
          Our <span className='text-secondary'>Popular</span> Classes
        </h1>
        <div className='w-[40%] text-center mx-auto my-4'>
          <p className='text-gray-500 font-semibold dark:text-white'>
            Explore our Popular Classes. Here are some popular classes based on how many students are enrolled.
          </p>


        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.slice(0,6).map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
