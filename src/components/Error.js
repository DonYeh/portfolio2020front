import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
	valid: {
		fontSize: ".8rem",
		paddingTop: "2px",
		color: "#4caf50",
	},
	invalid: {
		fontSize: ".8rem",
		paddingTop: "2px",
		color: "#f44336",
	},
});

const Error = ({ touched, message }) => {
	const classes = useStyles();

	if (!touched) {
		return <div>&nbsp;</div>;
	}
	if (message) {
		return (
			<div className="classes.invalid">
				<Typography
					variant="subtitle2"
					color="error"
					className={classes.invalid}
				>
					{message}
				</Typography>
			</div>
		);
	}
	return (
		<div className="classes.valid">
			<Typography variant="subtitle2" className={classes.valid}>
				all good
			</Typography>
		</div>
	);
};

export default Error;
