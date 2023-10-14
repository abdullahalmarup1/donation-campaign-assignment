/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const DonationCard = ({ donation }) => {

    // console.log(Object.keys(donation).join(","))
    const
        { id,
            image,
            title,
            category,
            theme,
            // eslint-disable-next-line no-unused-vars
            description,
            // eslint-disable-next-line no-unused-vars
            price } = donation;


    return (
        <Link
            to={`/donations/${id}`}
            style={{ bgColor: theme + "20" }}
            className="card shadow-xl"
        >

            <figure>
                <img src={image} alt="img" />

            </figure>

            <div className="card-body">
                <h2 style={{ color: theme }} className="card-title">
                    {category}
                </h2>

                <div style={{ backgroundColor: theme + "80" }}
                    className="badge badge-secondary"
                >
                    {title}
                </div>
            </div>
        </Link >
    );
};

export default DonationCard;