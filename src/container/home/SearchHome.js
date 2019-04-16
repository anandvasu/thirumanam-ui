import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import Constant from '../../components/utils/Constant';
import TopMenu from '../../components/menu/TopMenu';
import SearchMenu from '../../components/search/SearchMenu';

class SearchContainer extends Component {

        constructor(props) {
                super(props);        
                this.refreshFooter = this.refreshFooter.bind(this);
        }

        refreshFooter() {
                this.setState({
                        refreshFooter:true
                })
        }

       
        render () {
                return (
                <div> 
                       <TopMenu
                           homePage="false"
                        /> 
                         <div className='hs20' />
                        <div className="homeFullSection">
                               <SearchMenu 
                                         refreshFooter={this.refreshFooter}
                               />
                        </div>                      
                        <Footer 
                                refreshFooter={this.refreshFooter}
                        />                       
                </div>                        
                );
        };
}

export default SearchContainer;