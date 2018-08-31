import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Zach Evans</h2>
            <img src="" alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Here is some filler text that I am using instead of lorem ipsum. I dont like using it all the time so here is this text</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Quicksand'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  503-784-0039
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Quicksand'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  zte.zachary@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact ;