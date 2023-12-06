import './globals.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import TopNav from '@/components/TopNav';

export const metadata = {
	title: 'Nextcom',
	description: 'Ecommerce app using NextJs Full Stack',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<TopNav />
				{children}
			</body>
		</html>
	);
}
