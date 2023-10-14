import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import DonationContainer from "../Components/DonationContainer";
import { useState } from "react";


const HomePage = () => {

    const [donations, setDonations] = useState(useLoaderData())
    // console.log(donations)




    return (
        <>
            <section>
                <Banner setDonations={setDonations}></Banner>
            </section>
            <section>
                <DonationContainer donations={donations}></DonationContainer>
            </section>
        </>

    );
};

export default HomePage;