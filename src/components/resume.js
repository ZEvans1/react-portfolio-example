import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

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
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>This is some filler text to go here. Yeah I really hate lorem ipsum that much.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p></p>
            <h5>Phone</h5>
            <p></p>
            <h5>Email</h5>
            <p></p>
            <h5>Web</h5>
            <p></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Oregon State University"
              schoolDescription="This is some description text about the university"
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;