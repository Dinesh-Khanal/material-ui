import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";

const Course = (props) => {
  console.log(props.course);
  return (
    <div>
      {props.course ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={props.course.fields.image.fields.file.url}
            title={props.course.fields.title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.course.fields.title}
            </Typography>
            <Typography component="p">
              {props.course.fields.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={props.course.fields.url}
              target="_blank"
            >
              Go to course
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

export default Course;
