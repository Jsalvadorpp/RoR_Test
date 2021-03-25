import { makeStyles } from '@material-ui/styles';

export default makeStyles({
	wrapper: {
		margin: '20px 60px'
	},
	logo: {
		width: '100%',
		maxWidth: '200px'
	},
	description: {
		color: '#655d5b'
	},
	primaryText: {
		color: '#F7931E'
	},
	galleryPhoto: {
		width: '100%',
		maxHeight: '280px',
		marginBottom: '10px'
	},
	divider: {
		height: '1px',
		backgroundColor: '#80808066',
		width: '100%',
		margin: '20px 0'
	},
	label: {
		color: '#F7931E'
	},
	sendBtn: {
		backgroundColor: '#F7931E',
		'&:hover': {
			backgroundColor: '#F7931E',
			opacity: '0.8'
		}
	}
});
