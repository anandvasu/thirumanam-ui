import React, {Component} from 'react';
import './Filter.css';
import Height from '../utils/Height';
import MaritalStatus from '../utils/MaritalStatus';
import Education from '../utils/Education';
import Occupation from '../utils/Occupation';
import BodyType from '../utils/BodyType';
import FoodHabit from '../utils/FoodHabit';

class Filter extends Component {

    constructor() {
        super();

        this.genderChange = this.genderChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
    }

    clearFilters() {
        alert("test");
    }

    ageFromChange(event) {       
        this.props.ageFromChange(event.target.value);       
    }

    ageToChange(event) {
        this.props.ageToChange(event.target.value);
    }

    genderChange(event) {
        this.setState({gender:event.target.value});
    }

    maritalStatusChange(mStatusValue) {
        this.props.maritalStatusChange(mStatusValue);
    }

    searchClicked() {
        this.setState({searchClicked:true});
    }    

    render () {

        return (
            <div className="filterParent">
                <div className="header2">
                    <div className="inlineLeft50Per"><label>Filter Profiles</label></div>
                    <div className="clearAllFilter">
                       <a href="#" onClick={this.clearFilters}>[Clear Filters]</a>&nbsp;&nbsp;
                    </div>
                </div>
                 <div className="header3Parent">
                                <div className="header3"><label>Age</label></div>
                                <div className="filterContent">
                                <select onChange={this.ageFromChange}>
                                    <option value="18" selected>18</option>
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
                                <select onChange={this.ageToChange}>
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
                                    <option value="35" selected>35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option> 
                                </select>  
                                </div>                             
                            </div>
                            <div className="header3Parent">
                                <Height />
                            </div>
                            <div className="header3Parent">
                                <Education />
                            </div>
                            <div className="header3Parent">
                                <MaritalStatus 
                                    maritalStatusChange = {this.maritalStatusChange}
                                />
                            </div>
                            <div className="header3Parent">
                                <Occupation />
                            </div>   
                            <div className="header3Parent">
                                <BodyType />
                            </div>   
                            <div>
                                <FoodHabit />
                            </div>                       
            </div>
        );
    }
}

export default Filter;