import { makeStyles } from '@material-ui/styles';

export default makeStyles({
	//% Navbar
	navbar: {
		backgroundColor: '#13162D'
	},
	icon: {
		marginRight: '6px',
		fontSize: '2rem'
	},
	iconText: {
		fontSize: '1.1rem',
		marginBottom: '0'
	},
	navbarContainer: {
		minHeight: '40px'
	},

	//% Sidebar
	drawer: {
		overflowX: 'hidden'
	},
	sidebarHeader: {
		backgroundColor: '#13162D',
		padding: '12px 15px',
		minWidth: '340px',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '12px'
	},
	itemList: {
		height: '34px'
	}
});
