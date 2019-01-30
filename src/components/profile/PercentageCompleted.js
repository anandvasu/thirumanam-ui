import React, {Component} from 'react';
import './PercentageCompleted.css'

class PercentageCompleted extends Component {
 
    constructor(props) {
        super(props)
      }
      

    render () {
        return(

            <div style={{backgroundColor:'#FFFFFF', height:'40px',border: '1px solid #ccc'}}>               

                <div className="inlineBlock"> <b>Profile Completed&nbsp;&nbsp;  </b>
                </div>  
                <div className="inlineBlock" style={{paddingTop:'15px'}}>
                    <ProgressBar percentage={this.props.profileCompPercent} /> 
                </div>  
                <div className="inlineBlock"> 
                    <b>&nbsp;&nbsp;  {this.props.profileCompPercent}%.</b> 
                </div>
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