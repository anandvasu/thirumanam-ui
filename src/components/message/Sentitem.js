import React,{Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './MessageSummary.css';

class Sentitems extends Component {

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
                            <Tab><b>All</b></Tab>
                            <Tab><b>Awaiting Reply</b></Tab>
                        </TabList>
                        <TabPanel>
                            Pending
                        </TabPanel>
                        <TabPanel>
                            Accepted
                        </TabPanel>                       
                    </Tabs>
                </div>               
            </div>
        );
    }
}

export default Sentitems;