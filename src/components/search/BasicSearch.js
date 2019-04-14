import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Constant from '../utils/Constant';
import {populateArray} from '../utils/Util';
import Age from '../utils/Age';

class BasicSearch extends Component {

    constructor (props) {
        super(props);
        this.quickSearch = this.quickSearch.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.state = {
            searchClicked: false,
            gender:Constant.genderF,
            ageFrom:Constant.ageFrom,
            ageTo:Constant.ageTo,
            minHeight:Constant.minHeight,
            maxHeight:Constant.maxHeight,
            mStatus:"NM"
        }
    }

    ageFromChange(event) {
        this.setState({ageFrom:event.target.value});
    }

    ageToChange(event) {
        this.setState({ageTo:event.target.value});
    }

    genderChange(event) {
        this.setState({gender:event.target.value});
    }

    maritalStatusChange(event) {
        this.setState({mStatus:event.target.value});
    }
    

    quickSearch(event) {
        this.setState({searchClicked:true});
        console.log(this.state.searchClicked);
    }

    render () {
        if (this.state.searchClicked === true) {
            return <Redirect to= {{
                                    pathname:'/results',
                                    state:{
                                        gender:this.state.gender,
                                        ageFrom:this.state.ageFrom,
                                        ageTo:this.state.ageTo,
                                        minHeight:this.state.minHeight,
                                        maxHeight:this.state.maxHeight,
                                        mStatus:populateArray(this.state.mStatus)
                                    }
                                 }}/>
        }
        return (
            <form>
                <div>
                    <div className="fieldRow">
                        <div className='rdlabel'>
                                <label>Gender</label>
                        </div>                    
                        <div className='rdfield'>
                            <label>                              
                                <input type="radio" value="M" checked={this.state.gender === 'M'} onChange={this.genderChange}/>                                    
                                    Male
                            </label>

                            <label style={{paddingLeft:'5px'}}>                           
                                <input type="radio" value="F" checked={this.state.gender === 'F'} onChange={this.genderChange}/>                                    
                                    Female
                            </label>
                        </div> 
                    </div>  
                    <div className="fieldRow">
                        <div className='rdlabel'>
                            <label>Age:&nbsp;</label>
                        </div>    
                        <div className='rdfield'>
                            <Age 
                                ageFrom = {this.state.ageFrom}
                                ageTo = {this.state.ageTo}
                                ageFromChange={this.ageFromChange}
                                ageToChange={this.ageToChange}
                            />  
                        </div>  
                    </div>
                    <div className="fieldRow">            
                        <div className='rdlabel'>       
                            <label>Marital Status:&nbsp;</label>
                        </div>  
                        <div className='rdfield'>
                            <select onChange={this.maritalStatusChange}>
                                <option value="NM">Never Married</option>
                                <option value="WD">Widowed</option>  
                                <option value="DD">Divorced</option>
                                <option value="AD">Awaiting Divorce</option>              
                            </select>
                        </div> 
                    </div>
                    <div>                               
                        <button onClick={this.quickSearch}>Search</button>  
                    </div>
                </div>
            </form>
        );
    }
}

export default BasicSearch;