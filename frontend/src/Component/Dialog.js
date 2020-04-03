import React from "react";
import { Grid } from "@material-ui/core";
export default function dialog(prop) {
  let name = prop.name;
  let message = prop.message;
  return (
    <Grid container justify="space-between" className="line">
      <Grid item>
        <Grid container>
          <Grid xs={7}>
            <img alt="" src="https://i.picsum.photos/id/866/50/50.jpg" />
          </Grid>
          <Grid xs={4}>
              <div>
              {name}
              </div>
            {message}
           
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={1}>date</Grid>
    </Grid>
  );
}
