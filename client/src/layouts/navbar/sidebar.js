import React from 'react';
import { Link } from 'react-router-dom';
import * as Ui from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import useStyles from './styles';

function SidebarItem(props) {
	const { title, linkTo } = props;
	const classes = useStyles();

	return (
		<Ui.ListItem button className={classes.itemList} component={Link} to={linkTo}>
			<Ui.ListItemText primary={title} />
			<Ui.IconButton edge="end">
				<Icon.ChevronRight />
			</Ui.IconButton>
		</Ui.ListItem>
	);
}

export default function Sidebar(props) {
	const { openSidebar, toggleSideBar } = props;
	const classes = useStyles();

	return (
		<Ui.Drawer open={openSidebar} onClose={toggleSideBar} anchor="left" className={classes.drawer}>
			<div style={{ overflowX: 'hidden' }}>
				<div className={classes.sidebarHeader}>
					<div className="d-flex align-items-center">
						<p className="mb-0 ms-1" style={{ color: 'white' }}>
							<strong>Hello , User</strong>
						</p>
					</div>
					<Ui.IconButton edge="start" style={{ color: 'white' }} className="p-0" onClick={toggleSideBar}>
						<Icon.Close />
					</Ui.IconButton>
				</div>

				{/* link list */}
				<Ui.List>
					<SidebarItem title="Home" linkTo="/" />
				</Ui.List>
			</div>
		</Ui.Drawer>
	);
}
