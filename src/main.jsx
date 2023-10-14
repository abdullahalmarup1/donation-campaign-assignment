import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layouts/Layout';
import HomePage from './Pages/HomePage';
// import DonationPage from './Pages/DonationPage';
import DonationDetails from './Pages/DonationDetails';
import MyDonation from './Pages/MyDonation/MyDonation';
import Statistics from './Pages/Statistics';
// import DonationContainer from './Components/DonationContainer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: '/donation',
        element: <MyDonation></MyDonation>
        // element: <DonationPage></DonationPage>
        // element: <DonationContainer></DonationContainer>

        // loader: () => fetch('/public/donation.json')
      },
      {
        path: '/donations/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/donation.json'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
