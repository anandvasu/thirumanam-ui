import React,{Component} from 'react';
import {
    withRouter
  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from 'axios';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import BasicSearch from './BasicSearch';
import AdvancedSearch from './AdvancedSearch';
import ProfileIdSearch from './ProfileIdSearch';

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

class SearchMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acceptedCount:0,
            pendingCount:0,
            awitingReplyCount:0,
            sentItemsCount:0,
            selectedTab:"1"
        }
        this.goToMessageHome = this.goToMessageHome.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ selectedTab:value });
      };

    goToMessageHome(status) {
        this.props.history.push({
            pathname:"/messageHome",
            state:{
                status : status              
            }  
        });
    }

    componentDidMount() {
        axios.get(ApiConstant.MESSAGE_API+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"/summary")
        .then(res => {
            console.log(res);
            this.setState({
                acceptedCount:res.data.acceptedCount,
                pendingCount:res.data.pendingCount,
                awitingReplyCount:res.data.awitingReplyCount,
                sentItemsCount:res.data.sentItemsCount,
            });
            
        });
    }

    render() {
        const { classes } = this.props;
        return(
            <div style={{border:"1px solid darkgrey"}}>
               <div style={{backgroundColor:"#FFFFFF"}}>
                <Paper square className={classes.root}>
                    <Tabs value={this.state.selectedTab} 
                        onChange={this.handleChange} 
                        indicatorColor="primary"  
                        textColor="primary"
                        variant="fullWidth" 
                    >
                        <Tab value="1" label="Basic Search"/>
                        <Tab value="2" label="Advanced Search" />
                        <Tab value="3" label="Search By ID" />
                    </Tabs>
                </Paper>
                {this.state.selectedTab === '1' && 
                    <TabContainer>
                       <BasicSearch />
                    </TabContainer>
                }
                {this.state.selectedTab === '2' && 
                <TabContainer>
                    <AdvancedSearch />
                </TabContainer>
                }     
                 {this.state.selectedTab === '3' && 
                <TabContainer>
                     <div style={{width:'100%',paddingBottom:'5px'}}> 
                        <div className="rdlabel">
                            <label>Profile ID</label>
                        </div>
                        <div className="rdfield">
                           <input type="text" />
                        </div>  
                    </div> 
                    <div>                               
                        <button onClick={this.quickSearch}>Search</button>  
                    </div>
                </TabContainer>
                }               
                </div>               
            </div>
        );
    }
}

SearchMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const searchMenuComp = compose(
    withRouter,
    withStyles(styles)
);

export default searchMenuComp(SearchMenu);