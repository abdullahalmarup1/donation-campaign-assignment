/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const DonationDetails = () => {
    const { id } = useParams();
    const donations = useLoaderData();
    const singleDonation = donations.find((item => item.id == id));

    const
        { 
            image,
            title,
            category,
            theme,
            description,
            price } = singleDonation;


    const handleAdd = () => {
        const mySavedDonation = JSON.parse(localStorage.getItem("my-donation")) || [];

      const findData = mySavedDonation.find((item) => item.id == singleDonation.id);

      if (findData){
        toast.error("You have already donated for the site")
      } 
      else{
        mySavedDonation.push(singleDonation);
        // const convertToString = JSON.stringify(mySavedDonation);
        localStorage.setItem("my-donation", JSON.stringify(mySavedDonation));
        toast.success("Thank you for your donation")

      }



      
        
    }

    // console.log (singleDonation )
    if (singleDonation) {

        return (
            <>
                <section>

                    <div className="relative">
                        <img src={image}
                            className="w-full h-[400px] object-cover"
                            alt="img" />

                        <div className="button absolute bottom-0 p-10 bg-stone-700 bg-opacity-60 w-full ">
                            <button
                                onClick={handleAdd}
                                style={{ backgroundColor: theme }} className="btn text-white">
                                Donate ${price} 
                            </button>
                        </div>
                    </div>
                    <div
                        style={{ backgroundColor: theme + "25" }}
                        className="p-5 rounded-lg flex flex-col justify-between"
                    >
                        <div className="max-w-full">

                            <h2 style={{ color: theme }} className="card-title">
                                Good {category}
                            </h2>



                        </div>

                        <p className=" text-lg">
                            {description}
                        </p>

                        <div className="card-actions ">



                        </div>

                    </div>
                </section >
            </>
        );

    } else {
        return <h1>not found</h1>
    }

};

export default DonationDetails;