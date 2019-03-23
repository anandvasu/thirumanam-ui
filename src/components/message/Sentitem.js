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


class Sentitems extends Component {

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
                        <Tab value="1" label="All" />
                        <Tab value="2" label="Awaiting Reply" />
                     </Tabs>
                </Paper>
                {this.state.selectedTab === '1' && 
                    <TabContainer>
                        <div>
                            This folder contains all the requests that you sent.
                            <hr />
                        </div>
                        <div>
                            <MessageProfiles 
                                status="S"
                            />
                        </div>
                    </TabContainer>
                }
                {this.state.selectedTab === '2' && 
                    <TabContainer>
                        <div>
                            This folder contains all the requests that you are waiting for reply.
                            <hr />
                        </div>
                        <div>
                            <MessageProfiles 
                                status="R"
                            />
                        </div>
                    </TabContainer>
                }                              
                </div>               
            </div>
        );
    }
}

Sentitems.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const sentitems = compose(
    withStyles(styles)
);

export default sentitems(Sentitems);