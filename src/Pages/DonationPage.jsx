import { useLoaderData } from "react-router-dom";
import DonationContainer from "../Components/DonationContainer";

const DonationPage = () => {
    const donations = useLoaderData();
    
    return (
        <section>
        <DonationContainer donations = {donations}></DonationContainer>
        </section>
    );
};

export default DonationPage;