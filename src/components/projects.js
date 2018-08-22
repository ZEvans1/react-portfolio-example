import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}>React Project</CardTitle>
            <CardText>This is some card text that I am just filling in here instead of using lorem ipsum.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>Livedemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}>React Project</CardTitle>
            <CardText>This is some card text that I am just filling in here instead of using lorem ipsum.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>Livedemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
        
      )
    } else if(this.state.activeTab === 1) {
      return(
        <div>
          <h1>This is 1</h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div>
          <h1>This is 2</h1>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return(
        <div>
          <h1>This is 3</h1>
        </div>
      )
    } else {
      return(
        <div>
          <h1>This is 0</h1>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Vue.js</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;