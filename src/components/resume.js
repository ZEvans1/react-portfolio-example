import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src=""
                alt="Avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Zach Evans</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
          </Cell>
          <Cell className="resume-right-col" col={8}>Right Side</Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;