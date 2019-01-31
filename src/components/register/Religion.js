import React, {Component} from 'react';

class Religion extends Component {

    constructor(props) {
        super(props);
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.heightInchChange = this.heightInchChange.bind(this);
        this.heightCmChange = this.heightCmChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.familyTypeChange = this.familyTypeChange.bind(this);
        this.familyValueChange = this.familyValueChange.bind(this);
        this.disablityChange = this.disablityChange.bind(this);
    }
 
    render () {
        return (
            <div>

                <div> 
                    <div className='header2allborder'>
                        <label>Religion</label>
                    </div>
                    <div className='rdfield'>

                    </div>
                </div>                   
                
                    <div className="hs10" />
            </div>
        );
    }
}

export default Religion;