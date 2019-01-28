import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from 'semantic-ui-react'


export default function ShowMoreButton({
  onClick,
}) {
  return (
    <div className="show-more-button">
      <Grid
        columns={1}
        centered={true}
        padded={true}
      >
        <Grid.Row>
          <Button
            onClick={onClick}
            color="teal"
          >
            Show more
          </Button>
        </Grid.Row>
      </Grid>
    </div>
  )
}

ShowMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}