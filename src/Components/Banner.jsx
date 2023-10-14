/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


const Banner = ({ setDonations }) => {
    const allData = useLoaderData();
    const searchRef = useRef();
    const handleSubmit = () => {
        const search = searchRef?.current?.value.toLowerCase();

        const filterData = allData.filter((item) => item.category.toLowerCase().includes(search));

        if (filterData.length > 0) {
            toast.success(`total ${filterData.length} found`);

            console.log(filterData)
            setDonations(filterData)
        }
        else {
            toast.error("invalid Search")
        }
        // console.log(allData)
    }

    return (
        <div
            className="hero min-h-screen bg-top"
            style={{
                backgroundImage: 'url(https://i.ibb.co/d2yXZfw/Rectangle-4287.png)'
            }}>
            <div className="hero-overlay bg-opacity-80 bg-white"></div>
            <div className="hero-content text-center ">
                <div className="max-w-10/12 ">
                    <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>

                    <div className="relative">
                        <input
                            ref={searchRef}
                            defaultValue={""}

                            type="text"
                            placeholder="Search here...." className="input input-bordered w-full pr-16" />
                        <button
                            onClick={handleSubmit}
                            className= "btn btn-primary absolute top-0 right-0 rounded-l-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
