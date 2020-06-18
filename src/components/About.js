import React, { useState, useEffect } from "react";

import {
	makeStyles,
	responsiveFontSizes,
	createMuiTheme,
} from "@material-ui/core/styles";
import {
	Typography,
	Paper,
	Grid,
	Avatar,
	ThemeProvider,
	CssBaseline,
} from "@material-ui/core";
import avatar from "../assets/IMG_1953.jpg";

import {
	orange,
	lightBlue,
	deepPurple,
	deepOrange,
	greyBlue,
	green,
	lightGreen,
	teal,
	grey,
} from "@material-ui/core/colors";

// import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles((theme, darkMode) => ({
	root: {
		// backgroundColor: "black",
	},
	mainContainer: {
		// flexDirection: "column",
		width: "100vw",
		// backgroundColor: "white",
		color: "rgba(255,255,255, .81)",
		padding: "42% 1% 1%",
		// paddingTop: "42%",
	},

	mainPaper: {
		// height: "100vh",
		height: "100vh",
		// height: "calc(100%)",
		// width: "100vw",
		// height: "calc(100% + 56px)",
		// padding: "1.5vh 0 1vh",
		// margin: "1.2rem",
		// padding: "1em 0 1em",
		// backgroundColor: " rgba(255,255,255,.2)",

		// backgroundColor: "rgba(0,0,0,.4)
		// height: "100vh",
		// padding: ".5em",
		// backgroundColor: "green",

		// backdropFilter: "blur(4px)",

		// transform: "translateY(9vh)",
		[theme.breakpoints.up("sm")]: {
			height: "91vh",
			marginTop: "9vh",
			padding: "5vh 0vw 0vh",
		},
		[theme.breakpoints.up("md")]: {
			marginTop: "4vh",
			padding: "2vh 4vw",
		},
	},

	gridContainer: {
		alignItems: "center",
		// paddingTop: "8vh",
		padding: "8.9vh 5vw 8vh",
		// paddingTop: "8vh",
		// padding: "4vh 4vw 1vh",
		// height: "100vh",
		// height: "100vh",
		width: "100vw",
		margin: "0",

		[theme.breakpoints.up("sm")]: {
			// width: "100vw",
			// height: "100vh",
			width: "100%",
			padding: "2vh 10vw",
			// padding: "2.5vh 4vw 2.5vh",
			justify: "center",
			alignItems: "center",
			fontSize: "10em",
			// padding: "",
			// transform: "scale(0.9,0.9)",
			// padding: "5vh",
			// marginTop: "4vh",
		},
		[theme.breakpoints.up("md")]: {
			// width: "100vw",

			// fontSize: "9em",
			// transform: "scale(0.9,0.9)",
			// padding: "9vh 9vh 9vh",
			padding: "8vw",
		},
	},
	gridItems: {
		padding: ".3rem .3rem .2rem",
	},
	gridItems1: {},
	paper: {
		color: "dimgrey",
		padding: ".8rem .5rem",
		backgroundColor: "rgba(255,255,255,.89)",
		// [theme.breakpoints.down("sm")]: {
		// 	padding: "1rem",
		// },
		[theme.breakpoints.up("sm")]: {
			padding: "1rem",
		},
	},
	paperDark: {
		color: "dimgrey",
		padding: ".8rem .5rem",
		backgroundColor: "rgba(33, 37, 38, 0.92)",
		[theme.breakpoints.up("sm")]: {
			padding: "1 3rem",
		},
	},
	avatarContainer: {
		// width: "100%",
		// margin: "auto",
		// width: theme.spacing(12),
		// height: "15vw",
		// margin:
		// backgroundColor: "white",
		// margin: "30px 0px 0px 0px",
		// backgroundColor: "red",
		// textAlign: "center",
		// maxWidth: "100%",
	},
	avatar: {
		width: theme.spacing(10),
		height: theme.spacing(10),

		[theme.breakpoints.up("sm")]: {
			width: "15vw",
			height: "15vw",
		},
	},

	titleAndAvatarGridContainer: {
		[theme.breakpoints.up("md")]: {
			// padding: "1rem 4rem",
		},
	},
	typographyText: {
		padding: "0 1.5rem",
		[theme.breakpoints.up("sm")]: {
			fontSize: "1.3rem",
			padding: "1rem 3rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "1.4rem",
			padding: "1rem 3.3rem",
		},
	},
	typographyTextAboutMe: {
		padding: "0 .2rem",
		textAlign: "center",
		// fontSize: "1.1rem",
		// [theme.breakpoints.down("xs")]: {
		// 	fontSize: "6vw",
		// },
		[theme.breakpoints.up("sm")]: {
			fontSize: "2.5rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "3rem",
		},
	},
	aboutMeGridContainer: {
		// backgroundColor: "rgba(184, 205, 213, 0.9)",
	},
	aboutMeGridContainerDark: {},
	avatarGridContainer: {
		[theme.breakpoints.up("sm")]: {
			justifyContent: "flex-end",
			paddingRight: "4vw",
			// transform: "translateX(30px)",
		},
		[theme.breakpoints.up("sm")]: {
			justifyContent: "flex-end",
			paddingRight: "5vw",
			// transform: "translateX(30px)",
		},
	},
	aboutAvatarPaperGridItemContainer: {
		// backgroundColor: "white",

		// height: "100vh",
		// backgroundColor: "rgba(0,0,0,.4)",
		// paddingTop: "9vh",
		padding: "9vh 0 1vh",

		[theme.breakpoints.up("sm")]: {
			// backgroundColor: "white",
		},
		[theme.breakpoints.up("md")]: { padding: "1rem 4rem" },
	},
	firstGridItem: {
		// padding: ".5rem 0 .6rem .75rem",
		// backgroundColor: "aliceblue",
		// justify: "space-evenly",
		// alignItems: "stretch",
	},
	firstInnerGridItem: {},
	innerPaper: {
		padding: ".4em",
		backgroundColor: "rgba(240, 249, 252, 0.8)",
		// backgroundColor: darkMode
		// 	? "rgba(121,121,121,.13)"
		// 	: "rgba(,255,255,.1)",
		// backgroundColor: darkMode ? "rgba(0,0,0,.3)" : "orange",

		// backgroundColor:
		padding: ".4rem",

		[theme.breakpoints.up("sm")]: {},
		[theme.breakpoints.up("md")]: {},
	},
	innerPaperDark: {
		padding: ".4em",
		backgroundColor: "rgba(37, 41, 42, 0.8)",
		padding: ".4rem",

		[theme.breakpoints.up("sm")]: {},
		[theme.breakpoints.up("md")]: {},
	},
	aboutPaper: {
		// backgroundColor: "rgba(227, 237, 240, 0.8)",
		backgroundColor: "rgba(231, 238, 240, 0.9)",
		padding: ".7rem",
	},
	aboutPaperDark: {
		padding: ".7rem",

		backgroundColor: "rgba(26, 28, 28, 0.88)",
	},
}));

// let theme = responsiveFontSizes(darkTheme);
// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);
// theme = responsiveFontSizes(darkTheme);

const About = ({ darkMode }) => {
	const [aboutDarkMode, setAboutDarkMode] = useState(darkMode);

	// const mainPrimaryColor = darkMode ? orange[500] : lightBlue[500];
	const mainPrimaryColor = darkMode ? orange[800] : lightBlue[500];
	// const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];
	const mainSecondaryColor = darkMode ? orange[700] : teal[800];

	// useEffect((themeMode) => setAboutThemeMode(themeMode), [abouteMode]);

	let darkTheme = createMuiTheme({
		overrides: {
			MuiPaper: {
				root: {
					backgroundColor: darkMode
						? "rgba(0,0,0,.6)"
						: "rgba(255,255,255,.6)",
					//   marginBottom: '10px'
				},
			},
		},
		palette: {
			type: darkMode ? "dark" : "light",
			primary: {
				main: mainPrimaryColor,
			},
			secondary: {
				main: mainSecondaryColor,
			},
		},
	});

	let theme = createMuiTheme({});
	// let theme = createMuiTheme({
	// 	palette: {
	// 		type: themeMode === "light" ? "light" : "dark",
	// 	},
	// });

	const classes = useStyles({ darkMode });

	return (
		// <ThemeProvider theme={darkTheme}>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Paper square className={classes.mainPaper} elevation={0}>
				<Grid
					container
					className={classes.gridContainer}
					spacing={2}
					justify="space-evenly"
				>
					<Grid
						item
						container
						justify="center"
						className={`${classes.titleAndAvatarGridContainer} ${classes.gridItems}`}
						// spacing={2}
						style={{ margin: "0" }}
					>
						<Paper
							style={{
								// width: "100%",
								// backgroundColor: "aliceblue",
								padding: "1rem",
								width: "100%",
							}}
							elevation={1}
						>
							<Grid
								item
								container
								justify="space-evenly"
								// alignItems="stretch"
								className={classes.firstGridItem}
								style={{
									// justifyContent: "center",
									width: "100%",
								}}
							>
								<Grid
									item
									container
									xs={6}
									// md={6}
									justify="center"
									alignItems="center"
									className={classes.firstInnerGridItem} // style={{ backgroundColor: "blue" }}
								>
									<Paper
										style={{
											backgroundColor: darkMode
												? "rgba(37, 41, 42, 0.8)"
												: "rgba(240, 249, 252, 0.8)",
											padding: ".4rem",
										}}
										className={classes.innerPaper}
									>
										<Grid
											item
											// direction="column"
											// justify="center"

											className={
												classes.aboutMeGridContainer
											}
											style={
												{
													// backgroundColor: "purple",
												}
											}
										>
											{/* <Grid item> */}
											<Paper
												elevation={3}
												square
												className={
													darkMode
														? classes.aboutPaperDark
														: classes.aboutPaper
												}
											>
												<Typography
													variant="h5"
													className={
														classes.typographyTextAboutMe
													}
													style={{
														color: darkMode
															? "rgba(191, 191, 191, 0.62)"
															: "rgba(100, 100, 100, 0.9)",
													}}
												>
													About Me
												</Typography>
											</Paper>
											{/* </Grid> */}
										</Grid>
									</Paper>
								</Grid>
								<Grid
									item
									container
									xs={6}
									justify="flex-end"
									alignItems="center"
									className={classes.avatarGridContainer}
								>
									{/* <Grid item> */}
									<Paper
										elevation={3}
										// style={{
										// 	backgroundColor: darkMode
										// 		? "rgba(0,0,0,.3)"
										// 		: "rgba(121,121,121,.15)",
										// 	padding: ".4rem",
										// }}
										className={
											darkMode
												? classes.innerPaperDark
												: classes.innerPaper
										}
									>
										<Grid
											item
											// direction="column"
											justify="flex-end"
											xs={12}
											className={
												classes.aboutMeGridContainer
											}
										>
											<Avatar
												src={avatar}
												alt="Donaldpicture"
												className={classes.avatar}
												variant="square"
											/>
										</Grid>
									</Paper>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					{/* </Grid> */}
					<Grid item className={classes.gridItems}>
						<Paper
							elevation={3}
							className={
								darkMode ? classes.paperDark : classes.paper
							}
						>
							<Typography
								variant="body1"
								className={classes.typographyText}
							>
								Hello. I’m a full-stack developer who is
								passionate about writing clean, efficient code
								and solving real world problems - making the
								world a better place, one line of code at a
								time.
							</Typography>
						</Paper>
					</Grid>
					<Grid item className={classes.gridItems}>
						<Paper
							elevation={3}
							className={
								darkMode ? classes.paperDark : classes.paper
							}
							style={{ color: "dimgrey" }}
						>
							<Typography
								variant="body1"
								className={classes.typographyText}
							>
								I enjoy turning complex problems into simple,
								beautiful and intuitive designs. I love to build
								things and I'm obsessed with making things
								better. I have a thirst for knowlede and coding
								really quenches my desire to learn.
							</Typography>
						</Paper>
					</Grid>
					<Grid
						item
						className={classes.gridItems}
						// style={{ paddingBottom: ".5em" }}
					>
						<Paper
							elevation={3}
							className={
								darkMode ? classes.paperDark : classes.paper
							}
							style={{ color: "dimgrey" }}
						>
							<Typography
								variant="body1"
								className={classes.typographyText}
								// style={{ paddingBottom: "0rem" }}
							>
								When Im not at the computer, you can find me
								cooking something fierce in the kitchen, out in
								the garden, or out walking my dogs.
							</Typography>
						</Paper>
					</Grid>
					{/* </Paper> */}
				</Grid>
			</Paper>
		</ThemeProvider>
	);
};

export default About;
