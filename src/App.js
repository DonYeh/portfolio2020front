import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";

import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Portfolio";
import Contact from "./components/Contact";

// import ResponsiveDrawer from "./ResponsiveDrawer";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";

import {
	createMuiTheme,
	ThemeProvider,
	responsiveFontSizes,
} from "@material-ui/core/styles";

import { Paper } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// import {
// 	AssignmentInd,
// 	Home,
// 	Apps,
// 	ContactMail,
// 	InfoOutlined,
// } from "@material-ui/icons";

import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";
import AppsTwoToneIcon from "@material-ui/icons/AppsTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";

// import { Brightness2 } from "@material-ui/icons";
import { Brightness7 } from "@material-ui/icons";
import Brightness4Icon from "@material-ui/icons/Brightness4";
// import Overlay from "./components/Overlay";

// import {
// 	orange,
// 	lightBlue,
// 	deepPurple,
// 	deepOrange,
// 	grey,
// 	blueGrey,
// 	green,
// 	teal,
// } from "@material-ui/core/colors";

// import HomePage2 from "./components/HomePage2";

const drawerWidth = 240;

const menuIcons = [
	{
		listIcon: <HomeTwoToneIcon />,
		listText: "Home",
		listPath: "/",
	},
	{
		listIcon: <InfoTwoToneIcon />,
		listText: "About me",
		listPath: "/about",
	},
	{
		listIcon: <AssignmentIndTwoToneIcon />,
		listText: "Resume",
		listPath: "/resume",
	},
	{
		listIcon: <AppsTwoToneIcon />,
		listText: "Projects",
		listPath: "/projects",
	},
	{
		listIcon: <ContactMailTwoToneIcon />,
		listText: "Contact",
		listPath: "/contact",
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		// display: "flex",
		// backdropFilter: "blur(3px)",
	},
	list: {
		width: 240,
	},

	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: "100%",
			// marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},

	// toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		// backgroundColor: "rgb(232, 244, 246)",
		// backgroundColor: "rgba(0,0,0,.5 )",
		// backgroundColor: "rgba(f,f,f,.5 )",
		// backgroundColor: "rgba(#424242db)",
		// backgroundColor: "rgba(66,66,66,.88)",
		// backgroundColor: "rgba(236, 236, 236, 0.76)",
		backgroundColor: "rgba(184, 198, 201, 0.95)",
		// filter: "blur(2px)",
	},
	drawerPaperDark: {
		width: drawerWidth,
		// backgroundColor: "rgb(232, 244, 246)",
		// backgroundColor: "rgba(0,0,0,.5 )",
		// backgroundColor: "rgba(f,f,f,.5 )",
		// backgroundColor: "rgba(#424242db)",
		backgroundColor: "rgba(18, 20, 21, 0.95)",
	},

	content: {
		// paddingTop: theme.mixins.toolbar,
		flexGrow: 1,
		// height: "100%",

		backdropFilter: "blur(5px)",
	},
	// toolbar: {
	// 	display: "flex",
	displayFlex: {
		display: "flex",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		[theme.breakpoints.up("sm")]: {
			// width: "100vw",
			flexShrink: 1,
		},
	},
	drawerHeader: {
		display: "flex",
		// alignItems: "center",
		height: "57px",
		// padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		// ...theme.mixins.toolbar,
		justifyContent: "flex-start",

		// backgroundColor: "rgba(92, 99, 101, 0.9)",
		backgroundColor: "rgba(92, 99, 101, 0.4)",
		// minHeight: "54px",
	},
	drawerHeaderDark: {
		display: "flex",
		// alignItems: "center",
		height: "57px",
		// padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		// ...theme.mixins.toolbar,
		justifyContent: "flex-start",
		backgroundColor: "rgba(4, 4, 5, .9)",
		// minHeight: "54px",
	},
	// topListText: {
	// 	color: "purple",
	// },
	mainAppPaper: {
		// backgroundColor: "rgba(0,0,0,.4)",
		backgroundColor: "rgba(255,255,255,.4)",
		// backdropFilter: "blur(5px)",

		// padding: "1rem",
		// margin: "1.2rem",
		[theme.breakpoints.up("sm")]: {
			// margin: "5rem",
		},
		[theme.breakpoints.up("md")]: {
			// margin: "5rem",
		},
	},
	topToolbar: {
		backgroundColor: "rgba(185, 198, 201, .9)",
	},
	topToolbarDark: {
		backgroundColor: "rgba(20, 23, 23, 0.8)",
	},

	topDrawer: {
		backgroundColor: "rgba(185,198,201,.9)",
		padding: "0rem 1rem 0rem 2.5rem",
	},
	// topDrawer: { backgroundColor: "rgba(181, 197, 200, 0.5)" },
	topDrawerDark: {
		backgroundColor: "rgba(20, 23, 23, 0.85)",
		color: "rgba(109, 109, 109, 0.85)",
		padding: "0rem 1rem 0rem 2.5rem",
	},
	topDrawerListItemText: { color: "rgba(70, 70, 70, 0.9)" },
	topDrawerListItemTextDark: { color: "rgba(255, 153, 49, 0.8)" },
	// topDrawerListItemIcon: { color: "rgba(95, 95, 95, 0.7)" },
	topDrawerListItemIcon: { color: "rgba(234, 137, 35, 0.7)" },
	topDrawerListItemIconDark: { color: "rgba(172,172,172,.6)" },
	// leftDrawer: { backgroundColor: "rgba(185,198,201,.9)" },
	leftDrawer: { backgroundColor: "", height: "100%" },
	leftDrawerDark: { backgroundColor: "rgba(20, 23, 23, 0.8)" },
}));

// const darkTheme = createMuiTheme({
// 	palette: {
// 		type: "dark",
// 	},
// });

// theme = responsiveFontSizes(darkTheme);
// theme = responsiveFontSizes(theme);

function App(props) {
	const { window } = props;
	const classes = useStyles();
	// const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);

	const [darkMode, setDarkMode] = useState(false);

	// const [themeMode, setThemeMode] = useState("light");
	// const [themeMode, setThemeMode] = React.useState("dark");

	// let theme = createMuiTheme({
	// 	palette: {
	// 		type: darkMode ? "dark" : "light",
	// 		primary: {
	// 			main: darkMode ? "#111" : "#fff",
	// 		},
	// 	},
	// });

	// const mainPrimaryColor = darkMode ? orange[500] : lightBlue[500];
	// const mainPrimaryColor = darkMode ? grey[900] : orange[300];
	// const mainPrimaryColor = darkMode ? black : white;
	// const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];
	// const mainSecondaryColor = darkMode ? orange[700] : orange[800];

	let darkTheme = responsiveFontSizes(
		createMuiTheme({
			overrides: {
				MuiPaper: {
					root: {
						backgroundColor: darkMode
							? "rgba(0,0,0,.6)"
							: "rgba(255,255,255,.6)",
						//   marginBottom: '10px'
					},
				},
				MuiAppBar: {
					colorPrimary: {
						backgroundColor: darkMode
							? "rgba(38, 41, 42, 0.9)"
							: "rgba(204, 216, 219, 0.9)",
					},
				},
			},
			palette: {
				type: darkMode ? "dark" : "light",
				// primary: {
				// 	main: mainPrimaryColor,
				// },
				// secondary: {
				// 	main: mainSecondaryColor,
				// },
			},
		})
	);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	// const handleLightMode = () => {
	// 	setThemeMode("light");
	// };
	// const handleDarkMode = () => {
	// 	setThemeMode("dark");
	// };

	const drawerL = (
		<div className={darkMode ? classes.leftDrawerDark : classes.leftDrawer}>
			{/* <div className={classes.toolbar} /> */}
			{/* <Divider /> */}
			<div
				className={
					darkMode ? classes.drawerHeaderDark : classes.drawerHeader
				}
			>
				<IconButton onClick={handleDrawerToggle}>
					{darkTheme.direction === "ltr" ? (
						<ChevronLeftIcon
							style={{
								// color: "sandybrown",
								color: darkMode
									? "rgba(236, 148, 90, 0.7)"
									: "rgba(204, 108, 0, 0.9)",
								// : "rgba(227, 136, 33, 0.85)",
								width: "1em",
								height: "1.2em",
							}}
						/>
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</div>
			<Divider />
			<List>
				{menuIcons.map((menuIcon, key) => (
					<ListItem
						button
						key={key}
						component={Link}
						to={menuIcon.listPath}
						onClick={handleDrawerToggle}
					>
						<ListItemIcon
							style={{
								// color: "#5f9ea0c7",
								color: darkMode
									? "rgba(137, 136, 136, 0.5)"
									: // : "rgba(102, 102, 102, 0.8)",
									  "rgba(226, 120, 10, 0.8)",

								paddingLeft: "6px",
							}}
						>
							{menuIcon.listIcon}
						</ListItemIcon>
						<ListItemText
							primary={menuIcon.listText}
							style={{
								color: darkMode
									? // ? "rgba(137, 136, 136, 0.98)"
									  "rgba(255, 153, 49, 0.8)"
									: "rgba(60, 60, 60, 0.85)",
								// color: "aliceblue",
								fontWeight: "bold",
								textDecoration: "none",
							}}
						/>
					</ListItem>
				))}
			</List>
		</div>
	);

	const drawerT = (
		// <div>
		<div className={darkMode ? classes.topDrawerDark : classes.topDrawer}>
			<List
				style={{
					display: "flex",
					// padding: "0 .5rem",
				}}
			>
				{menuIcons.map((menuIcon, key) => (
					<ListItem
						button
						key={key}
						component={Link}
						to={menuIcon.listPath}
						disableGutters
					>
						<ListItemIcon
							className={
								darkMode
									? classes.topDrawerListItemIconDark
									: classes.topDrawerListItemIcon
							}
						>
							{menuIcon.listIcon}
						</ListItemIcon>
						<ListItemText
							primary={menuIcon.listText}
							className={
								darkMode
									? classes.topDrawerListItemTextDark
									: classes.topDrawerListItemText
							}
						/>
					</ListItem>
				))}

				<div
					style={{
						flex: 1,
						display: "flex",
						justifyContent: "flex-end",
						padding: "0rem .5rem",
						// backgroundColor: "",
						// paddingRight: ".2vw",
					}}
				>
					{darkMode ? (
						<IconButton
							color="inherit"
							backgroundColor="inherit"
							onClick={() => setDarkMode(!darkMode)}
						>
							<Brightness7 style={{ color: "darkgrey" }} />
						</IconButton>
					) : (
						<IconButton
							color="inherit"
							backgroundColor="inherit"
							onClick={() => setDarkMode(!darkMode)}
						>
							<Brightness4Icon
								style={{
									color: "rgba(59, 59, 59, 0.92)",
								}}
							/>
						</IconButton>
					)}
				</div>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		// <div className="App">
		<StylesProvider injectFirst>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<BrowserRouter>
					{/* <div className={classes.root}> */}
					<Paper className={classes.mainAppPaper}>
						<AppBar
							position="fixed"
							className={classes.appBar}
							// style={{ backgroundColor: "rgba(255,255,255,.9)" }}
						>
							<Toolbar
								className={
									darkMode
										? classes.topToolbarDark
										: classes.topToolbar
								}
							>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									edge="start"
									onClick={handleDrawerToggle}
									className={classes.menuButton}
									style={{
										color: darkMode
											? "rgba(236, 148, 90, 0.7)"
											: "rgba(227, 136, 33, 0.85)",
										// color: "#e49059ed",
										// color: "sandybrown",
									}}
								>
									<MenuIcon />
								</IconButton>
								<Typography
									variant="h6"
									noWrap
									style={{
										color: darkMode
											? "rgba(211, 211, 211, 0.65)"
											: "rgba(40, 40, 40, 0.7)",
										fontWeight: "bold",
									}}
								>
									Portfolio
								</Typography>
								<div style={{ flex: 1 }} />

								<Hidden xsDown implementation="js">
									<Drawer
										className={classes.displayFlex}
										// variant="permanent"
										variant="persistent"
										anchor="top"
										open
										style={{
											width: "100%",
											// backgroundColor: "pink",
											// // color: "rgba(0,0,0,.5)",
										}}
									>
										{drawerT}
									</Drawer>
								</Hidden>
								<Hidden smUp>
									<div
										style={{
											flex: 1,
											display: "flex",
											justifyContent: "flex-end",
											// backgroundColor: darkMode
											// 	? "rgba(20, 23, 23, 0.8)"
											// 	: "rgb(185, 199, 202)",
											// // paddingRight: ".2vw",
										}}
									>
										{darkMode ? (
											<IconButton
												color="inherit"
												// backgroundColor="inherit"
												onClick={() =>
													setDarkMode(!darkMode)
												}
											>
												<Brightness7
													style={{
														color: "darkgrey",
													}}
												/>
											</IconButton>
										) : (
											<IconButton
												color="inherit"
												// backgroundColor="inherit"
												onClick={() =>
													setDarkMode(!darkMode)
												}
											>
												<Brightness4Icon
													style={{
														color:
															"rgba(59, 59, 59, 0.92)",
													}}
												/>
											</IconButton>
										)}
									</div>
								</Hidden>
							</Toolbar>
						</AppBar>
						<nav
							className={classes.drawer}
							aria-label="mailbox folders"
						>
							{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
							<Hidden smUp implementation="css">
								<Drawer
									container={container}
									variant="temporary"
									anchor={
										darkTheme.direction === "rtl"
											? "right"
											: "left"
									}
									open={mobileOpen}
									onClose={handleDrawerToggle}
									classes={{
										paper: darkMode
											? classes.drawerPaperDark
											: classes.drawerPaper,
									}}
									ModalProps={{
										keepMounted: true, // Better open performance on mobile.
									}}
								>
									{drawerL}
								</Drawer>
							</Hidden>
						</nav>
						<main className={classes.content}>
							<Routes>
								<Route
									path="/"
									// element={<HomePage darkMode={darkMode} />}
									element={<HomePage darkMode={darkMode} />}
								/>
								<Route
									path="about"
									element={<About darkMode={darkMode} />}
								/>
								<Route
									path="resume"
									element={<Resume darkMode={darkMode} />}
								/>
								<Route
									path="projects"
									element={<Projects darkMode={darkMode} />}
								/>
								<Route
									path="contact"
									element={<Contact darkMode={darkMode} />}
								/>
							</Routes>
						</main>
						{/* </div> */}
					</Paper>
				</BrowserRouter>
			</ThemeProvider>
		</StylesProvider>
		// {/* </div> */}
	);
}

App.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default App;
