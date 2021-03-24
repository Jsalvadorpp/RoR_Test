import React, { useState } from 'react';
import * as Ui from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import useStyles from './styles';

//components
import Sidebar from './sidebar';

export default function Navbar() {
	const classes = useStyles();
	const [ showSidebar, setShowSidebar ] = useState(false);

	return (
		<div>
			<Ui.AppBar position="static" className={classes.navbar}>
				<Ui.Toolbar className={classes.navbarContainer}>
					<div className="d-flex align-items-center justify-content-between w-100 flex-wrap">
						<div className="text-center w-sm-100">
							<Ui.IconButton edge="start" color="inherit" onClick={() => setShowSidebar(true)}>
								<Icon.Menu className={classes.icon} />
							</Ui.IconButton>
						</div>

						<div className="text-center w-sm-100">
							<strong>Restaurant Listing</strong>
						</div>
					</div>
				</Ui.Toolbar>
			</Ui.AppBar>

			{/* SideBar */}
			<Sidebar openSidebar={showSidebar} toggleSideBar={() => setShowSidebar(false)} />
		</div>
	);
}
