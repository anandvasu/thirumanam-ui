import React,{Component} from 'react';
import './MessageSummary.css';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MessageProfiles from './MessageProfiles';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });


class Inbox extends Component {

    constructor(props) {
        super(props);      

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            selectedTab:"1"
        }
    }

    handleChange(event, value) {
        this.setState({ selectedTab:value });
    };
      
    render() {

        const { classes } = this.props;

        return(
            <div>      
                <div>
                </div>          
                <div style={{backgroundColor:'white'}}>
                    <Paper square className={classes.root}>
                        <Tabs value={this.state.selectedTab} 
                            onChange={this.handleChange} 
                            indicatorColor="primary"  
                            textColor="primary"
                            variant="fullWidth" 
                        >
                            <Tab value="1" label="Pending" />
                            <Tab value="2" label="Accepted" />
                            <Tab value="3" label="Declined" />
                        </Tabs>
                    </Paper>
                    {this.state.selectedTab === '1' && 
                        <TabContainer>
                            <div>
                                This folder contains all the requests that you haven't responded.
                                <hr />
                            </div>
                            <div>
                                <MessageProfiles 
                                    status="P"
                                />
                            </div>
                        </TabContainer>
                    }
                    {this.state.selectedTab === '2' && 
                        <TabContainer>
                            <div>
                                This folder contains all the requests that you accepted.
                                <hr />
                            </div>
                            <div>
                                <MessageProfiles 
                                    status="A"
                                />
                            </div>
                        </TabContainer>
                    }     
                    {this.state.selectedTab === '3' && 
                        <TabContainer>
                             <div>
                                This folder contains all the requests that you denied.
                                <hr />
                            </div>
                            <div>
                                <MessageProfiles 
                                     status="D"
                                />
                            </div>
                        </TabContainer>
                    }          
                </div>               
            </div>
        );
    }
}

Inbox.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const inboxComp = compose(
    withStyles(styles)
);

export default inboxComp(Inbox);