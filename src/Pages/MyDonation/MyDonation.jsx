import DonationContainer from "../../Components/DonationContainer";

const MyDonation = () => {
    const donations = JSON.parse(localStorage.getItem("my-donation")) || [];
    return (
        <>
            <DonationContainer
                donations={donations}>
            </DonationContainer>
        </>
    );
};

export default MyDonation;