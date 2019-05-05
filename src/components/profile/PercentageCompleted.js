import React, {Component} from 'react';
import './PercentageCompleted.css'

class PercentageCompleted extends Component {
 
    constructor(props) {
        super(props)
      }
      

    render () {
        return(
            <div style={{backgroundColor:'#FFFFFF', border: '1px solid #ccc'}}>
                <div> 
                    <div className="inlineBlock"> <b>Profile Completed&nbsp;&nbsp;  </b>
                    </div>  
                    <div className="inlineBlock" style={{paddingTop:'15px'}}>
                        <ProgressBar percentage={this.props.profileCompPercent} /> 
                    </div>  
                    <div className="inlineBlock"> 
                        <b>&nbsp;&nbsp;  {this.props.profileCompPercent}%.</b> 
                    </div>                  
                </div>
                <div className="hs20" />
                <div style={{width:'100%'}}>
                    <div className="inlineBlock" style={{width:'50%'}}> 
                        <button className="standard-button" style={{width:'200px'}}> Update Profile</button>
                    </div>
                    <div className="inlineBlock" style={{width:'50%'}}> 
                        <button className="standard-button" style={{width:'200px'}}> Add/Edit Photo</button>
                    </div>                    
                </div>
                <div className="hs10" />
            </div>
        ) ;
    }

}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }

export default PercentageCompleted;