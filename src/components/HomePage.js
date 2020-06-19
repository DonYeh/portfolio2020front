import React from "react";
import {
	Typography,
	Grid,
	// CssBaseline,
	ThemeProvider,
	// StylesProvider,
} from "@material-ui/core/";
// import avatar from "../images/Boone.png";
import Typed from "react-typed";
import {
	makeStyles,
	createMuiTheme,
	responsiveFontSizes,
} from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

import {
	orange,
	lightBlue,
	deepPurple,
	deepOrange,
	grey,
} from "@material-ui/core/colors";

// import { ViewColumn } from "@material-ui/icons";
// import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
	mainGridContainer: {
		// paddingTop: "22vh",
		// backgroundColor: "rgba(255,255,255,.55)", //
		height: "100vh",
		// padding: "33% 0% 0%",
	},

	typedContainer: {
		// margin: theme.spacing(8),
		// paddingTop: "5rem",
		padding: "0 10vw",

		textAlign: "center",
		margin: "0",

		[theme.breakpoints.up("sm")]: {
			padding: "0rem",
		},

		[theme.breakpoints.up("md")]: {},

		// [theme.breakpoints.up("lg")]: {
		// 	fontSize: "9em",
		// },
	},
	typedItem: {},
	typedFont: {
		fontWeight: "bold",
		color: "rgba(51, 51, 51, 0.9)",
	},
	mainPaper: {
		height: "93vh",
		backgroundColor: "rgba(255,255,255,.55)", //dark
	},
	mainPaperDark: {
		height: "100vh",
		backgroundColor: "rgba(0,0,0,.2)",
	},
}));

const HomePage = ({ darkMode }) => {
	const classes = useStyles();

	const mainPrimaryColor = darkMode ? orange[500] : lightBlue[500];
	const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];

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

	// let theme = createMuiTheme({});

	return (
		<ThemeProvider theme={darkTheme}>
			{/* <CssBaseline /> */}
			{/* <StylesProvider injectFirst> */}
			<Paper
				square
				className={
					darkMode ? "classes.mainPaperDark" : "classes.mainPaper"
				}
				// classes={root: }
			>
				<Grid
					container
					justify="center"
					className={classes.mainGridContainer}
					// alignItems="center"
					// spacing={2}
				>
					<Grid item xs={12} />
					<Grid
						item
						sm={8}
						container
						justify="center"
						// alignItems="center"
						spacing={1}
						className={classes.typedContainer}
					>
						<Grid item xs={12} className={classes.typedItem}>
							<Typography
								variant="h3"
								className={classes.typedFont}
								style={{
									color: darkMode
										? "lightgray"
										: // : "rgba(95, 95, 95, 0.88)",
										  grey[700],
								}}
							>
								<Typed
									strings={["Hello^5", "Hi^4 👋"]}
									typeSpeed={26}
									startDelay={2500}
									showCursor={false}
								/>
							</Typography>
						</Grid>
						<Grid item xs={12} className={classes.typedItem}>
							<Typography
								variant="h3"
								className={classes.typedFont}
								style={{
									color: darkMode
										? "lightgray"
										: // : "rgba(95, 95, 95, 0.88)",
										  grey[700],
								}}
							>
								<Typed
									strings={["I'm Donald"]}
									typeSpeed={26}
									startDelay={4400}
									showCursor={false}
								/>
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							// sm={12}
							// lg={8}
							className={classes.typedItem}
						>
							<Typography
								variant="h3"
								className={classes.typedFont}
								style={{
									color: darkMode
										? "rgba(211, 211, 211, 0.9"
										: "rgba(95, 95, 95, 0.88)",
								}}
							>
								<Typed
									strings={[
										"I'm a full stack developer ⌨️ ^11800",
										"I'm a software engineer 💻 ^800",
										"I'm a coder ^800",
										"I'm a techie 👨🏻‍💻^800",
										"I'm a builder 👷🏼‍♂️^800",
										"I'm a problem solver 🔎^800",
										"I'm a dog dad 🐶🧔🏻",
									]}
									typeSpeed={14}
									startDelay={5400}
									backSpeed={22}
									smartBackspace
									random
									loop
									showCursor={false}
									// cursorChar={" ‎‎‎‎      "}
								/>
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							// sm={12}
							// lg={8}
							className={classes.typedItem}
						>
							<Typography
								variant="h3"
								className={classes.typedFont}
								style={{
									color: darkMode
										? "lightgray"
										: "rgba(95, 95, 95, 0.88)",
								}}
							>
								<Typed
									strings={["from^3"]}
									typeSpeed={18}
									startDelay={6200}
									showCursor={false}
								/>
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							// sm={12}
							// lg={8}
							className={classes.typedItem}
						>
							<Typography
								variant="h3"
								className={classes.typedFont}
								style={{
									color: darkMode
										? "lightgray"
										: // : "rgba(95, 95, 95, 0.88)",
										  grey[700],
								}}
							>
								<Typed
									strings={[
										"ATL^900",
										"A-Town^900",
										"the A^900",
										"Hotlanta^400...(please don't ever call it Hotlanta) 🙅🏻‍♂️^650",
										"Atlanta  ^1800",
									]}
									typeSpeed={11}
									startDelay={7000}
									backSpeed={15}
									backDelay={250}
									smartBackspace
									cursorChar={" ‎‎‎‎      "}
									showCursor={true}
									fadeOut
									loop
									random
								/>
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							// sm={12}
							// lg={8}
							className={classes.typedItem}
						>
							<Typography
								variant="h3"
								className={classes.typedFont}
								style={{
									color: darkMode
										? "rgba(1, 95, 15, 0.88)"
										: "rgba(9, 63, 56, 0.73)",
								}}
							>
								<Typed
									strings={["Georgia^60 🍑"]}
									typeSpeed={11}
									startDelay={15700}
									backSpeed={55}
									showCursor={false}
								/>
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} />
				</Grid>
			</Paper>
			{/* </StylesProvider> */}
		</ThemeProvider>
	);
};

export default HomePage;
