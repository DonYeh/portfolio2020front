import React from "react";

import {
	makeStyles,
	responsiveFontSizes,
	createMuiTheme,
} from "@material-ui/core/styles";
import {
	Typography,
	Box,
	Paper,
	Grid,
	Link,
	CssBaseline,
	ThemeProvider,
} from "@material-ui/core";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

// import GetAppIcon from "@material-ui/icons/GetApp";

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
	mainContainer: {
		background: "#234darkMode ? classes.headingDark : ",
	},
	heading: {
		color: "rgba(4, 78, 80, 0.8)",

		padding: ".7rem",
		textTransform: "uppercase",
		[theme.breakpoints.up("sm")]: {
			paddingTop: "1rem",
		},
	},

	headingDark: {
		color: "rgba(244, 164, 96, 0.8)",

		padding: ".7rem",
		textTransform: "uppercase",
		[theme.breakpoints.up("sm")]: {
			paddingTop: "1rem",
		},
	},

	downloadResume: {
		backgroundColor: "rgba(122, 132, 142, 0.9)",
		display: "flex",
		color: "rgba(0,0,0,.6)",

		paddingTop: "4rem",

		[theme.breakpoints.up("sm")]: {
			padding: "1rem 0rem .5rem",
			marginTop: "13.3vh",

			alignItems: "flex-end",
		},
		[theme.breakpoints.up("md")]: {
			marginTop: "4.8vh", // minHeight: "8.5vh",
		},
	},

	downloadResumeDark: {
		backgroundColor: "rgba(27, 30, 30, 0.88)",
		display: "flex",
		color: "rgba(118, 147, 151, 0.8)",

		paddingTop: "4rem",

		[theme.breakpoints.up("sm")]: {
			padding: "1rem 0rem .5rem",
			marginTop: "13.3vh",

			alignItems: "flex-end",
		},
		[theme.breakpoints.up("md")]: {
			marginTop: "4.8vh",
		},
	},

	downloadResumeText: {
		color: "white",
	},
	downloadResumeButton: { backgroundColor: "rgba(179, 189, 191, 0.9)" },
	downloadResumeButtonDark: {
		padding: "",
		color: "rgba(118, 147, 151, 0.8)",
		backgroundColor: "rgba(25, 28, 28, 0.9)",
	},
	button: {
		margin: theme.spacing(1),
	},
	boxTechnologies: {
		margin: "0",

		background: "rgba(255, 255, 255, 0.77)",
		fontSize: "smaller",

		padding: ".5rem 0rem 1rem",
		[theme.breakpoints.up("md")]: {},
	},
	boxTechnologiesDark: {
		margin: "0",

		backgroundColor: "rgba(56, 55, 55, 0.81)",

		fontSize: "smaller",

		padding: ".5rem 0rem 1rem",
		[theme.breakpoints.up("md")]: {},
	},

	heading2Title: {
		color: "rgba(80, 100, 102, 0.9)",
		textTransform: "uppercase",
	},
	heading2TitleDark: {
		color: "rgba(120, 151, 155, .9)",
		textTransform: "uppercase",
	},

	subHeading2: {
		color: "rgba(90, 90, 90, 0.9)",
		padding: "0",
	},
	subHeading2Dark: {
		color: "rgba(255, 218, 185, 0.5882352941176471)",
	},
	subHeading: {
		color: "rgba(77, 81, 86, 0.93)",
		padding: "0",
		textTransform: "uppercase",
	},
	subHeadingDark: {
		color: "rgba(185, 185, 185, 0.88)",
		padding: "0",
		textTransform: "uppercase",
	},

	timeLineBox: {
		display: "flex",
		postion: "relative",
		width: "100vw",
		paddingBottom: "3.3vh",

		"&:before": {
			content: "''",
			position: "absolute",
			height: "25.6%",
			border: "1px solid rgba(82, 84, 84, 0.7)",
			right: "4vw",

			transform: "translate(0rem, 3.2rem)",
		},
		"&:after": {
			content: "''",
		},
		[theme.breakpoints.up("sm")]: {
			"&:before": {
				transform: "translate(0px, 5.5rem)",
				height: "50.5vh",
				left: "calc(50% - 1px)",
				right: "auto",
				maxHeight: "25.5%",
			},
		},
		[theme.breakpoints.up("md")]: {
			paddingBottom: ".5rem",
			"&:before": {
				transform: "translate(0px, 5.6rem)",
				height: "41.2vh",
				left: "calc(50% - 1px)",
				right: "auto",
				maxHeight: "28%",
			},
		},
	},
	timeLineBoxDark: {
		display: "flex",
		postion: "relative",
		width: "100vw",
		paddingBottom: "3.3vh",

		"&:before": {
			content: "''",
			position: "absolute",
			height: "25.6%",

			border: "1px solid lightgrey ",
			right: "4vw",

			transform: "translate(0rem, 3.2rem)",
		},
		"&:after": {
			content: "''",
		},
		[theme.breakpoints.up("sm")]: {
			"&:before": {
				transform: "translate(0px, 5.5rem)",
				height: "50.5vh",
				left: "calc(50% - 1px)",
				right: "auto",
				maxHeight: "84vh",
			},
		},
		[theme.breakpoints.up("md")]: {
			paddingBottom: ".5rem",
			"&:before": {
				transform: "translate(0px, 5.6rem)",
				height: "41.2vh",
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},

	timeLineItem: {
		padding: "1rem 1.2rem .5rem 1.2rem",
		position: "relative",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "2.0rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor:
				"rgba(244, 164, 96, 0.8) rgba(244, 164, 96, 0.8) transparent transparent",
			borderWidth: ".44rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("sm")]: {
			padding: "0rem 1rem ",
			width: "44%",
			margin: "-.5rem .5rem",
			"&:before": {
				content: "''",
				position: "absolute",
				// left: "15.3rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "sandybrown sandybrown transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
				right: "0rem",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				margin: ".8rem .2rem .8rem 1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: ".5rem",
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:before": {
				content: "''",
				position: "absolute",
				// left: "18.5rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "sandybrown sandybrown transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.1rem",
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
	},

	timeLineItemDark: {
		padding: "1rem 1.2rem .5rem 1.2rem",
		position: "relative",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "2.0rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor:
				"rgba(244, 164, 96, 0.8) rgba(244, 164, 96, 0.8) transparent transparent",
			borderWidth: ".44rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("sm")]: {
			padding: "0rem 1rem ",
			width: "44%",
			margin: "-.5rem .5rem",
			"&:before": {
				content: "''",
				position: "absolute",
				// left: "15.3rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "sandybrown sandybrown transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
				right: "0rem",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				margin: ".8rem .2rem .8rem 1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: ".5rem",
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:before": {
				content: "''",
				position: "absolute",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "sandybrown sandybrown transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.1rem",
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
	},

	timeLineYear: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 2.5rem 0 auto",
		fontSize: "1.1rem",
		fontWeight: "bold",
		background: "rgb(182, 187, 189)",
		color: "rgba(70, 70, 70, 0.71)",
		lineHeight: 0.5,
		padding: "0.5rem",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("sm")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	timeLineYearDark: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 2.5rem 0 auto",
		fontSize: "1.1rem",
		fontWeight: "bold",
		background: "rgba(29, 35, 39, 0.84)",
		color: "rgba(144, 144, 144, 0.61)",
		lineHeight: 0.5,
		padding: "0.5rem",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("sm")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},

	subHeading2E: {
		color: "rgba(99, 99, 99, 0.91)",
	},
	subHeading2EDark: {
		color: "rgba(143, 154, 173, 0.92)",
	},

	subHeadingE: {
		color: "sandybrown",
		padding: "0",
		textTransform: "uppercase",
	},
	subHeadingEDark: {
		color: "rgba(244, 164, 96, 0.7)",
		padding: "0",
		textTransform: "uppercase",
	},
	timeLineBoxE: {
		postion: "relative",
		width: "100vw",

		padding: "1.3rem",
		margin: "0 auto",
		"&:before": {
			content: "''",
			position: "absolute",
			border: "1px solid darkgrey ",

			height: "34.6%",

			[theme.breakpoints.up("sm")]: {
				height: "55vh",
				maxHeight: "26.2%",
			},

			[theme.breakpoints.up("md")]: {
				height: "48vh",
				left: "calc(50% - 1px)",
				right: "auto",
				maxHeight: "34%",
			},
		},
	},
	timeLineBoxEDark: {
		postion: "relative",
		width: "100vw",

		padding: "1.3rem",
		margin: "0 auto",
		"&:before": {
			content: "''",
			position: "absolute",
			border: "1px solid rgba(169, 169, 169, 0.3)",

			height: "34.6%",

			[theme.breakpoints.up("sm")]: {
				height: "55vh",
			},

			[theme.breakpoints.up("md")]: {
				height: "48vh",
				left: "calc(50% - 1px)",
				right: "auto",
				// zIndex: "-1",
			},
		},
	},

	timeLineItemE: {
		padding: "1rem 1rem 1rem 3rem",
		position: "relative",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			left: "1.2rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "cadetblue cadetblue transparent transparent",
			borderWidth: "0.44rem",
			transform: "rotate(225deg)",
		},
		[theme.breakpoints.up("md")]: {
			padding: "1rem 1.2rem 1rem 2.1rem",
			width: "48%",
			"&:before": {
				content: "''",
				position: "absolute",
				left: "28rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "cadetblue cadetblue transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				borderColor: "purple",
			},
			"&:nth-of-type(2n):before": {
				// left: "auto",
				left: ".4rem",
				borderColor: "transparent transparent cadetblue cadetblue",
			},
		},
	},
	timeLineItemEDark: {
		padding: "1rem 1rem 1rem 3rem",
		position: "relative",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			left: "1.2rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor:
				"rgba(95, 158, 160, 0.8) rgba(95, 158, 160, 0.8) transparent transparent",
			borderWidth: "0.44rem",
			transform: "rotate(225deg)",
		},
		[theme.breakpoints.up("md")]: {
			padding: "1rem 1.2rem 1rem 2.1rem",
			width: "48%",
			"&:before": {
				content: "''",
				position: "absolute",
				left: "28rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor:
					"rgba(95, 158, 160, 0.8) rgba(95, 158, 160, 0.8) transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				borderColor: "purple",
			},
			"&:nth-of-type(2n):before": {
				// left: "auto",
				left: ".4rem",
				borderColor:
					"transparent transparent rgba(95, 158, 160, 0.8) rgba(95, 158, 160, 0.8)",
			},
		},
	},

	timeLineYearE: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 auto 0 1.5rem",
		fontSize: "1.1rem",
		background: "rgb(182, 187, 189)",
		color: "rgba(49, 49, 49, 0.47)",
		lineHeight: 0.5,
		padding: ".5rem",
		fontWeight: "bold",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	timeLineYearEDark: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 auto 0 1.5rem",
		fontSize: "1.1rem",
		background: "#234",
		color: "rgba(211, 211, 211, 0.69)",
		lineHeight: 0.5,
		padding: ".5rem",
		fontWeight: "bold",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},

	papersGridContainer: {
		display: "flex",
		width: "100%",
		padding: "1.2em 1em 3em",
	},
	frontEndGridItem: {},
	backEndGridItem: {
		alignItems: "center",
	},
	toolsGridItem: {
		alignItems: "center",
	},
	paper: {
		color: "rgb(55, 94, 95)",
		backgroundColor: "rgba(229, 234, 236, 0.8)",
		fontSize: "1.1em",
		textAlign: "center",
		padding: ".5em",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
	paperDark: {
		// color: "rgba(23, 77, 130, 0.89)",
		color: "rgb(110, 141, 143)",
		backgroundColor: "rgba(29, 33, 33, 0.6)",
		fontSize: "1.1em",
		textAlign: "center",
		padding: ".5em",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
	experienceBox: {
		width: "100%",
		paddingTop: "1.2rem",
		backgroundColor: "rgba(251, 246, 239, 0.77)",
		color: "#234",

		[theme.breakpoints.up("md")]: {},
	},
	experienceBoxDark: {
		width: "100%",
		paddingTop: "1.2rem",
		backgroundColor: "rgba(29, 34, 39, 0.8)",
		color: "#234",

		[theme.breakpoints.up("md")]: {},
	},

	technologyGridItems: { color: "rgba(100, 131, 163, 0.99)" },
	technologyGridItemsDark: { color: "#b3835a" },

	location: {
		color: "rgba(2, 90, 80, 0.88)",
	},
	locationDark: {
		color: "rgba(163, 213, 212, 0.69)",
	},
	locationE: { color: "rgba(0, 95, 105, 0.8196078431372549)" },
	locationEDark: {
		color: "rgba(219, 189, 161, 0.7)",
	},

	jobDescription: { color: "rgba(88, 88, 88, 0.88)" },
	jobDescriptionDark: {
		color: "rgba(184, 184, 184, 0.68)",
	},

	techFE: { color: "rgba(95, 95, 95, 0.9)" },
	techFEDark: {
		color: "rgba(255,255,255,.55)",
	},
	eduDesc: { color: "rgba(80, 80, 80, 0.89)", padding: "0 1.5rem" },
	eduDescDark: { color: "#c8c8c8a3", padding: "0 1.5rem" },

	experienceTitle: {
		color: "rgba(85, 101, 99, 0.91)",
		textTransform: "uppercase",
	},
	experienceTitleDark: {
		color: "rgba(255, 223, 196, 0.61)",
		textTransform: "uppercase",
	},
}));

// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

const Resume = ({ darkMode }) => {
	const classes = useStyles();

	const mainPrimaryColor = darkMode ? grey[900] : orange[300];

	// const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];
	const mainSecondaryColor = darkMode ? orange[700] : teal[800];

	let darkTheme = responsiveFontSizes(
		createMuiTheme({
			overrides: {
				MuiPaper: {
					root: {
						backgroundColor: darkMode
							? "rgba(0,0,0,.6)"
							: "rgba(255,255,255,.6)",
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
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Paper className={classes.mainResumePaper}>
				<Grid
					container
					justify="center"
					className={classes.mainContainer}
				>
					<Grid
						item
						container
						className={
							darkMode
								? classes.downloadResumeDark
								: classes.downloadResume
						}
						justify="center"
						alignContent="flex-end"
					>
						<Grid item style={{ paddingBottom: ".5rem" }}>
							<Link
								href="https://drive.google.com/open?id=1o9VgNvrVhskDqi76UCsFQiByLeDUv0BZ"
								// onClick={preventDefault}
							>
								<Button
									variant="contained"
									// color="primary"
									size="small"
									// className={classes.button}
									startIcon={<SaveIcon />}
									className={
										darkMode
											? classes.downloadResumeButtonDark
											: classes.downloadResumeButton
									}
								>
									Download resume
								</Button>
							</Link>
						</Grid>
					</Grid>

					<Grid
						item
						container
						className={classes.timeLineBox}
						style={{
							backgroundColor: darkMode
								? "rgba(36, 41, 41, 0.9)"
								: "rgba(208, 219, 222, 0.9)",
						}}
					>
						<Grid item xs={12}>
							<Typography
								variant="h4"
								align="center"
								className={
									darkMode
										? classes.headingDark
										: classes.heading
								}
								style={{
									color: darkMode
										? "rgba(244, 164, 96, 0.8)"
										: "rgba(4, 78, 80, 0.8)",
								}}
							>
								Education
							</Typography>
							<Typography
								variant="h6"
								className={
									darkMode
										? `${classes.timeLineYearDark} ${classes.timeLineItemDark}`
										: `${classes.timeLineYear} ${classes.timeLineItem}`
								}
							>
								2019
							</Typography>

							<Box
								component="div"
								className={
									darkMode
										? classes.timeLineItemDark
										: classes.timeLineItem
								}
							>
								<Typography
									variant="h5"
									align="center"
									className={
										darkMode
											? classes.subHeadingDark
											: classes.subHeading
									}
								>
									Digital Crafts
								</Typography>
								<Typography
									variant="h6"
									align="center"
									className={
										darkMode
											? classes.subHeading2Dark
											: classes.subHeading2
									}
								>
									Web Development Bootcamp
								</Typography>
								<Typography
									variant="body1"
									align="center"
									className={
										darkMode
											? classes.locationDark
											: classes.location
									}
								>
									Atlanta, GA
								</Typography>

								<Typography
									variant="subtitle1"
									align="center"
									className={
										darkMode
											? classes.eduDescDark
											: classes.eduDesc
									}
								>
									Certificate in Full Stack software
									development
								</Typography>
							</Box>
							<Typography
								variant="h6"
								className={
									darkMode
										? `${classes.timeLineYearDark} ${classes.timeLineItemDark}`
										: `${classes.timeLineYear} ${classes.timeLineItem}`
								}
							>
								2013
							</Typography>
							<Box
								component="div"
								className={classes.timeLineItem}
							>
								<Typography
									variant="h5"
									align="center"
									className={
										darkMode
											? classes.subHeadingDark
											: classes.subHeading
									}
								>
									Georgia Institute of Technology
								</Typography>
								<Typography
									variant="h6"
									align="center"
									className={
										darkMode
											? classes.subHeading2Dark
											: classes.subHeading2
									}
								>
									Scheller College of Business
								</Typography>
								<Typography
									variant="body1"
									align="center"
									className={
										darkMode
											? classes.locationDark
											: classes.location
									}
								>
									Atlanta, GA
								</Typography>
								<Typography
									variant="subtitle1"
									align="center"
									className={
										darkMode
											? classes.eduDescDark
											: classes.eduDesc
									}
								>
									Master of Business Administration
								</Typography>
							</Box>
							<Typography
								variant="h6"
								className={
									darkMode
										? `${classes.timeLineYearDark} ${classes.timeLineItemDark}`
										: `${classes.timeLineYear} ${classes.timeLineItem}`
								}
							>
								2007
							</Typography>
							<Box
								component="div"
								className={classes.timeLineItem}
							>
								<Typography
									variant="h5"
									align="center"
									className={
										darkMode
											? classes.subHeadingDark
											: classes.subHeading
									}
								>
									Georgia Institute of Technology
								</Typography>

								<Typography
									variant="h6"
									align="center"
									className={
										darkMode
											? classes.subHeading2Dark
											: classes.subHeading2
									}
								>
									School of Electrical and Computer
									Engineering
								</Typography>

								<Typography
									variant="body1"
									align="center"
									className={
										darkMode
											? classes.locationDark
											: classes.location
									}
								>
									Atlanta, GA
								</Typography>

								<Typography
									variant="subtitle1"
									align="center"
									className={
										darkMode
											? classes.eduDescDark
											: classes.eduDesc
									}
								>
									Bachelor of Science in Electrical
									Engineering
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Grid
						item
						container
						spacing={2}
						justify="center"
						// alignItems="self-end"
						className={
							darkMode
								? classes.boxTechnologiesDark
								: classes.boxTechnologies
						}
					>
						<Grid item container justify="center">
							<Grid item xs={12}>
								<Typography
									variant="h4"
									align="center"
									className={
										darkMode
											? classes.heading2TitleDark
											: classes.heading2Title
									}
								>
									Technologies
								</Typography>
							</Grid>
						</Grid>
						<Grid
							item
							justify="center"
							container
							xs={12}
							sm={6}
							md={4}
							spacing={1}
							className={classes.frontEndGridItem}
						>
							<Grid item xs={12}>
								<Typography
									align="center"
									className={
										darkMode
											? classes.techFEDark
											: classes.techFE
									}
								>
									Front End
								</Typography>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								style={{
									color: darkMode
										? "rgba(255,255,255,.4)"
										: "rgba(0,0,0,.5)",
								}}
							>
								<Paper
									elevation={3}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									HTML5
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={3}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									CSS3
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									Javascript
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									Typescript
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									React
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									Material-UI
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									Angular
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									React Native
								</Paper>
							</Grid>
						</Grid>

						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							container
							spacing={1}
							justify="center"
							className={classes.backEndGridItem}
						>
							<Grid item xs={12}>
								<Typography
									align="center"
									className={
										darkMode
											? classes.techFEDark
											: classes.techFE
									}
								>
									Back End
								</Typography>
							</Grid>

							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									<div>Node</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									<div>Express</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									Python
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									PostgreSQL
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									SQL
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									GraphQL
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									WebSockets
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									NGINX
								</Paper>
							</Grid>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							container
							justify="center"
							spacing={1}
							className={classes.toolsGridItem}
						>
							<Grid item xs={12}>
								<Typography
									align="center"
									className={
										darkMode
											? classes.techFEDark
											: classes.techFE
									}
								>
									Tools
								</Typography>
							</Grid>

							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									VS Code
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									AWS
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									// className={classes.paper}
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									NPM
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									Git
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									GitHub
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									Jasmine
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									Mocha
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									Webpack
								</Paper>
							</Grid>
						</Grid>
					</Grid>

					<Grid
						item
						container
						className={
							darkMode
								? classes.experienceBoxDark
								: classes.experienceBox
						}
						justify="center"
					>
						<Grid item container justify="center">
							<Grid item>
								<Typography
									variant="h4"
									align="center"
									className={
										darkMode
											? classes.experienceTitleDark
											: classes.experienceTitle
									}
								>
									Experience
								</Typography>
							</Grid>

							<Grid
								item
								className={
									darkMode
										? classes.timeLineBoxEDark
										: classes.timeLineBoxE
								}
							>
								<Typography
									variant="h6"
									className={
										darkMode
											? `${classes.timeLineYearEDark} ${classes.timeLineItemEDark}`
											: `${classes.timeLineYearE} ${classes.timeLineItemE}`
									}
								>
									2020
								</Typography>
								<Box
									component="div"
									className={
										darkMode
											? classes.timeLineItemEDark
											: classes.timeLineItemE
									}
								>
									<Typography
										variant="h5"
										align="center"
										className={
											darkMode
												? classes.subHeadingEDark
												: classes.subHeadingE
										}
									>
										Ton Ton Ramen & Yakitori
									</Typography>
									<Typography
										variant="h6"
										align="center"
										className={
											darkMode
												? classes.subHeading2EDark
												: classes.subHeading2E
										}
									>
										Server
									</Typography>
									<Typography
										variant="body1"
										align="center"
										className={
											darkMode
												? classes.locationEDark
												: classes.locationE
										}
									>
										Atlanta, GA
									</Typography>

									<Typography
										variant="subtitle1"
										align="left"
										className={
											darkMode
												? classes.jobDescriptionDark
												: classes.jobDescription
										}
									>
										<div>
											• Filled in as manager when needed -
											responsibilities included resolving
											customer issues, entering shift
											reports, and taking inventory
										</div>
										<div>
											• Developed valuable soft skills,
											which included communication,
											teamwork, multitasking, and working
											under pressure
										</div>
										<div>
											• Trained new hires and created
											training materials along with a
											checklist of server side-duties
										</div>
									</Typography>
								</Box>
								<Typography
									variant="h6"
									className={`${classes.timeLineYearE} ${classes.timeLineItemE}`}
								>
									2018
								</Typography>
								<Box
									component="div"
									className={classes.timeLineItemE}
								>
									<Typography
										variant="h5"
										align="center"
										className={
											darkMode
												? classes.subHeadingEDark
												: classes.subHeadingE
										}
									>
										Elev8 Hire Solutions{" "}
									</Typography>
									<Typography
										variant="h6"
										align="center"
										className={
											darkMode
												? classes.subHeading2EDark
												: classes.subHeading2E
										}
									>
										IT Recruiter
									</Typography>
									<Typography
										variant="body1"
										align="center"
										className={
											darkMode
												? classes.locationEDark
												: classes.locationE
										}
									>
										Atlanta, GA
									</Typography>

									<Typography
										variant="subtitle1"
										align="left"
										className={
											darkMode
												? classes.jobDescriptionDark
												: classes.jobDescription
										}
									>
										<div>
											• Performed full sles recruiting
											lifecycle - from prospecting, job
											selling, screening, offer
											negotiation, and onboarding
										</div>
										<div>
											• Communicated with hiring managers
											to discover project requirements and
											ideal candidates
										</div>
										<div>
											• Maintained an accurate candidate
											tracking system
										</div>
									</Typography>
								</Box>
							</Grid>
						</Grid>
						{/* </Box> */}
					</Grid>
					{/* </Box> */}
				</Grid>
			</Paper>
		</ThemeProvider>
	);
};

export default Resume;
