import React from "react";
import {
	makeStyles,
	ThemeProvider,
	responsiveFontSizes,
	createMuiTheme,
} from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import {
	Typography,
	Box,
	Paper,
	Grid,
	Card,
	// CssBaseline,
} from "@material-ui/core";
// import { FullscreenExit } from "@material-ui/icons";

import portfolioImg from "../assets/donaldyehportoflioheader.png";

import ChatrisImg from "../assets/tetris-game-retro-arcade-512.png";
import movieExplorerGif from "../assets/newMovieGIFedited.gif";

import {
	orange,
	// lightBlue,
	// deepPurple,
	// deepOrange,
	// greyBlue,
	// green,
	// lightGreen,
	teal,
	grey,
} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		// background: "white",
	},

	mainPaper: {
		height: "93vh",
		backgroundColor: "rgba(255,255,255,.55)", //dark
	},
	mainPaperDark: {
		height: "100vh",
		backgroundColor: "rgba(0,0,0,.2)",
	},

	mainGridContainer: {
		padding: "16% 10% 8%",

		[theme.breakpoints.up("sm")]: {
			padding: "10% 5%",
		},
	},
	media: {
		// height: "0",
		// padding: "29rem 40rem",
	},

	proj1: {},
	projectsGridContainer: {
		// padding: ".5rem",
		margin: "0",
		paddingTop: "2vh",
		[theme.breakpoints.up("sm")]: {
			paddingTop: "9vh",
		},
		[theme.breakpoints.up("md")]: {
			paddingTop: "3vh",
		},
	},
	projDescription: {
		fontSize: "1rem",
		padding: ".5rem 1rem 0",

		[theme.breakpoints.up("sm")]: {
			fontSize: "1.2rem",
		},
		[theme.breakpoints.up("md")]: {},
	},
	projDescriptionDark: {
		fontSize: "1rem",
		padding: ".5rem 1rem 0",
		backgroundColor: "rgba(23, 26, 26, 0.8)",
		[theme.breakpoints.up("sm")]: {
			fontSize: "1.2rem",
		},
		[theme.breakpoints.up("md")]: {},
	},

	projectDescription: {
		padding: "2.5vh 6vw .1vh",
	},
	githubLink: {
		color: "rgba(251, 119, 9, 0.8)",
	},
	githubLinkDark: {
		// color: "rgba(245, 140, 53, 0.72)",
		color: "rgba(255, 141, 46, 0.8)",
	},

	myCardContent: {
		// backgroundColor: "rgba(0, 0, 0, 0.5)",
		backgroundColor: "rgba(218, 228, 230, 0.8)",
	},
	myCardContentDark: {
		// backgroundColor: "rgba(0, 0, 0, 0.5)",
		backgroundColor: "rgba(33, 37, 37, 0.9)",
	},
	projTitles: {
		color: "rgba(45, 45, 45, 0.8)",
	},
	projTitlesDark: {
		color: "rgba(251, 183, 83, 0.7)",
	},
}));

// const darkTheme = createMuiTheme({
// 	palette: {
// 		type: "dark",
// 	},
// });

// et theme = createMuiTheme();
// // theme = responsiveFontSizes(darkTheme);
// theme = responsiveFontSizes(theme);l

export default function Portfolio({ darkMode }) {
	const classes = useStyles();

	const mainPrimaryColor = darkMode ? grey[900] : orange[300];

	// const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];
	const mainSecondaryColor = darkMode ? orange[700] : teal[800];

	// useEffect((themeMode) => setAboutThemeMode(themeMode), [abouteMode]);

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
		})
	);

	return (
		<>
			<ThemeProvider theme={darkTheme}>
				{/* <CssBaseline /> */}
				<Paper
					className={
						darkMode ? "classes.mainPaperDark" : "classes.mainPaper"
					}
					// style={{ backdropFilter: "blur(5px)" }}
				>
					<Grid
						className={classes.mainGridContainer}
						container
						justify="center"
						alignContent="center"
					>
						<Grid
							container
							item
							justify="space-evenly"
							spacing={5}
							className={classes.projectsGridContainer}
						>
							<Grid item>
								<Box className="proj1">
									<Card className={classes.root} raised>
										<CardActionArea>
											<CardMedia
												component="img"
												alt="donaldyeh.dev"
												height="280rem"
												src={portfolioImg}
												title="donaldyeh.dev"
												className="classes.media"
											/>
											<CardContent
												className={
													darkMode
														? classes.myCardContentDark
														: classes.myCardContent
												}
											>
												<Typography
													gutterBottom
													align="center"
													variant="h4"
													className={
														darkMode
															? classes.projTitlesDark
															: classes.projTitles
													}
												>
													donaldyeh.dev
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
													className={
														classes.projDescription
													}
													style={{
														color: darkMode
															? "rgba(255, 255, 255, 0.46)"
															: "rgba(0, 0, 0, 0.54)",
													}}
												>
													This portfolio site is a
													full stack Javascript app.
													The front end is written in
													React and leverages
													Material-UI responsive
													design. The back end
													consists of Node, Express,
													and Nodemailer, which is
													used to send an email from
													the contact form.
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Grid container justify="flex-end">
												<Grid item>
													<Button
														size="small"
														className={
															darkMode
																? classes.githubLinkDark
																: classes.githubLink
														}
													>
														<Typography
															align="right"
															className={
																classes.githubLink
															}
														>
															Github
														</Typography>
													</Button>
												</Grid>
											</Grid>
										</CardActions>
									</Card>
								</Box>
							</Grid>

							<Grid item>
								<Box className="proj2">
									<Card className={classes.root} raised>
										<CardActionArea>
											<CardMedia
												component="img"
												alt="puzzle blocks"
												height="280rem"
												src={ChatrisImg}
												title="Video Chat + Tetris = Chatris"
												className="classes.media"
											/>
											<CardContent
												className={
													darkMode
														? classes.myCardContentDark
														: classes.myCardContent
												}
											>
												<Typography
													gutterBottom
													variant="h4"
													align="center"
													className={
														darkMode
															? classes.projTitlesDark
															: classes.projTitles
													}
												>
													Chatris
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
													className={
														classes.projDescription
													}
												>
													Chatris is a cross-platform,
													full-stack mobile app that
													allows you to enjoy a puzzle
													game classic while
													connecting with your friends
													over live video and voice
													chat. Chatris is built using
													React Native, PostgreSQL,
													Node, Express, and Socket.io
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											{/* <Button></Button> */}
											<Grid container justify="flex-end">
												<Grid item>
													<Button
														size="small"
														// color="primary"
														// style={{
														// 	color:
														// 		"rgba(9, 63, 56, 0.92)",
														// 	display: "flex",
														// }}
														className={
															darkMode
																? classes.githubLinkDark
																: classes.githubLink
														}
													>
														<Typography
															align="right"
															className={
																classes.githubLink
															}
															// style={{
															// 	color: darkMode
															// 		? "rgba(1, 131, 80, 0.86)"
															// 		: "rgba(15, 92, 62, 0.8)",
															// }}
														>
															Github
														</Typography>
													</Button>
												</Grid>
											</Grid>
										</CardActions>
									</Card>
								</Box>
							</Grid>

							<Grid item>
								<Box className="proj3">
									<Card
										className={classes.root}
										raised
										// variant="outlined"
									>
										<CardActionArea>
											<CardMedia
												component="img"
												alt="Movie Explorer gif"
												height="280"
												src={movieExplorerGif}
												title="Movie Explorer"
												className="classes.media"
											/>
											<CardContent
												className={
													darkMode
														? classes.myCardContentDark
														: classes.myCardContent
												}
											>
												<Typography
													gutterBottom
													variant="h4"
													align="center"
													// style={{
													// 	color: darkMode
													// 		? "rgba(255, 255, 255, 0.6)"
													// 		: "rgba(45, 45, 45, 0.8)",
													// }}
													className={
														darkMode
															? classes.projTitlesDark
															: classes.projTitles
													}
												>
													Movie Explorer
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
													className={
														classes.projDescription
													}
												>
													Movie Explorer allows you to
													browse and discover movies.
													It uses a responsive,
													mobile-first design
													featuring advanced filtering
													and search functionality. It
													is built with Javascript,
													HTML, CSS and it calls the
													OMDB and TMDB APIs for
													up-to-date movie information
													and trailers.
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Grid container justify="flex-end">
												<Grid item>
													<Button
														size="small"
														// color="primary"
														// style={{
														// 	color:
														// 		"rgba(9, 63, 56, 0.92)",
														// 	display: "flex",
														// }}
														className={
															darkMode
																? classes.githubLinkDark
																: classes.githubLink
														}
													>
														<Typography align="right">
															Github
														</Typography>
													</Button>
												</Grid>
											</Grid>
										</CardActions>
									</Card>
								</Box>
							</Grid>
						</Grid>
						{/* </Paper> */}
					</Grid>
				</Paper>
			</ThemeProvider>
		</>
	);
}

// const useStyles = makeStyles((theme) => ({
// 	mainContaitner: {
// 		backgroundColor: "white",
// 		width: "100vw",
// 		height: "100vh",
// 	},
// }));

// const Portfolio = () => {
// 	const classes = useStyles();

// 	return (
// 		<>
// 			<Navbar />
// 			<Box className={classes.mainContaitner}>
// 				<div>Portfolio here - tsx</div>
// 				<Card>Card goes here</Card>
// 			</Box>
// 		</>
// 	);
// };

// export default Portfolio;
