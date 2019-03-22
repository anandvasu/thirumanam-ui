import React,{Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './MessageSummary.css';

class Inbox extends Component {

    constructor(props) {
        super(props);      
    }
      
    render() {
        return(
            <div>      
                <div>
                </div>          
                <div>
                    <Tabs>
                        <TabList>
                            <Tab><b>Pending</b></Tab>
                            <Tab><b>Accepted</b></Tab>
                            <Tab><b>Declined</b></Tab>
                        </TabList>

                        <TabPanel>
                            Pending
                        </TabPanel>
                        <TabPanel>
                            Accepted
                        </TabPanel>
                        <TabPanel>
                           Declined
                        </TabPanel>
                    </Tabs>
                </div>               
            </div>
        );
    }
}

export default Inbox;