import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AboutUsPage from './pages/AboutUsPage';
import LoanServicesPage from './pages/LoanServicesPage';



const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
				
			},
			{
				path:'loan-services',
				element:<LoanServicesPage/>
			},
			{
				path:'about-us',
				element:<AboutUsPage/>
			},
			
			{
				path:'privacy-policy',
				element:<PrivacyPolicyPage/>
			},
			{
				path:'contact-us',
				element:<ContactUsPage/>
			},
			
		],
	},
]);

export default router;
