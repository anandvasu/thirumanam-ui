import React, {Component} from 'react';
import './QuickSearch.css';
import {Redirect} from "react-router-dom";
import Constant from '../../Constant';

class QuickSearch extends Component {

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
            mStatus:Constant.mStatus_NM
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
                                        mStatus:this.state.mStatus
                                    }
                                 }}/>
        }
        return (
            <form>
                <div className='quicksearch'>
                    <div className="qSearchInner">
                        <div className="qSearchFields">
                            <div className="radio">  
                                    <label>                              
                                    <input type="radio" value="M" checked={this.state.gender === 'M'} onChange={this.genderChange}/>                                    
                                        Male
                                    </label>
                                </div>
                            <div className="radio">    
                                    <label>                           
                                    <input type="radio" value="F" checked={this.state.gender === 'F'} onChange={this.genderChange}/>                                    
                                        Female
                                    </label>
                            </div>
                                
                            <div>
                                <label>Age:&nbsp;</label>
                                <select onChange={this.ageFromChange} defaultValue="18">
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>                                  
                                </select>
                                <label>&nbsp;to&nbsp;</label>
                                <select onChange={this.ageToChange} defaultValue="35">
                                    <option value="18" >18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option> 
                                </select>
                            </div>
                            <div>                   
                                <label>Marital Status:&nbsp;</label>
                                <select onChange={this.maritalStatusChange}>
                                    <option value="NM">Never Married</option>
                                    <option value="WD">Widowed</option>  
                                    <option value="DD">Divorced</option>
                                    <option value="AD">Awaiting Divorce</option>              
                                </select>
                            </div>
                            <div>                               
                                <button onClick={this.quickSearch}>Search</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default QuickSearch;