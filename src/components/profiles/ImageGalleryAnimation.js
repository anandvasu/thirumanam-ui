import React from 'react';
import './ImageGalleryAnimation.css';
import axios from 'axios';
import ApiConstant from '../../components/utils/ApiConstant';
import FeaturedProfile from '../../components/profiles/FeaturedProfile';
import Modal from '../../components/modal/Modal';

let pics1Temp = [{"image":"Loading", "profileId":"1234"},{"image":"Loading", "profileId":"1234"},{"image":"Loading", "profileId":"1234"},{"image":"Loading", "profileId":"1234"}]

class ImageGalleryAnimation extends React.Component {
    constructor(props) {
      super(props);

      this.imageClick = this.imageClick.bind(this);
      this.closeProfileHandler = this.closeProfileHandler.bind(this);  

      const idxStart = 0;
      this.state = {
        index: idxStart,
        next: this.getNextIndex(idxStart),
        move: false,
        pics1 : pics1Temp,
        pics2 : pics1Temp,
        pics3 : pics1Temp,
        pics4 : pics1Temp,
        pics5 : pics1Temp,
        pics6 : pics1Temp,
        pics7 : pics1Temp,
        pics8 : pics1Temp,
        profileId:"",
        firstName:"",
        lastName:"",
        dob:"",
        gender:"",
        age:"",
        city:"",
        education:"",
        bDay:0,
        bMonth:0,
        bYear:0,
        image:"",
        featureProfileClick: false
      };
    }

    componentWillUnmount(){

    }

    imageClick(imageNo, indexValue) {        
        let picArray = [];
        if(imageNo === 1) {
            picArray[0] = this.state.pics1[indexValue];           
        } else if(imageNo === 2) {
            picArray[0] = this.state.pics2[indexValue];
        }  else if(imageNo === 3) {
            picArray[0] = this.state.pics3[indexValue];
        }  else if(imageNo === 4) {
            picArray[0] = this.state.pics4[indexValue];
        }  else if(imageNo === 5) {
            picArray[0] = this.state.pics5[indexValue];
        }  else if(imageNo === 6) {
            picArray[0] = this.state.pics6[indexValue];
        }  else if(imageNo === 7) {
            picArray[0] = this.state.pics7[indexValue];
        }  else if(imageNo === 8) {
            picArray[0] = this.state.pics8[indexValue];
        }
        this.setState({
            profileId: picArray[0].profileId,
            firstName : picArray[0].firstName,
            lastName : picArray[0].lastName,
            age : picArray[0].age,
            city : picArray[0].city,
            gender:picArray[0].gender,
            education : picArray[0].education,
            image : picArray[0].image,
            bDay:picArray[0].bDay,
            bMonth:picArray[0].bMonth,
            bYear:picArray[0].bYear,            
            featureProfileClick:true
        });
    }
  
    getNextIndex(idx) {
      if (idx >= 4 - 1) {
        return 0;
      }
      return idx + 1;
    }
  
    setIndexes(idx) {
      this.setState({
        index: idx,
        next: this.getNextIndex(idx)
      });
    }
  
    componentDidMount() {      
        
        console.log("componentDidMount called");
        
        var pics1 = [];
        var pics2 = [];
        var pics3 = [];
        var pics4 = [];
        var pics5 = [];
        var pics6 = [];
        var pics7 = [];
        var pics8 = [];

        axios.get(ApiConstant.PROFILE_LIST_API)
        .then(res => {
            return res.data; 
        }).then(data => {
            console.log(data);
            console.log(data.length);
            data.map((dataObject, i) => {
                console.log("1 =" + i);
                if(i===0 || i===8 || i === 16 || i === 24 || i===32) {
                    pics1.push(dataObject);
                }
                if(i===1 || i===9 || i === 17 || i === 25 || i===33) {
                    pics2.push(dataObject);
                }
                if(i===2 || i===10 || i === 18 || i === 26 || i===34) {
                    pics3.push(dataObject);
                }
                if(i===3 || i===11 || i === 19 || i === 27 || i===35) {
                    pics4.push(dataObject);
                }
                if(i===4 || i===12 || i === 20 || i === 28 || i===36) {
                    pics5.push(dataObject);
                }
                if(i===5 || i===13 || i === 21 || i === 29 || i===37) {
                    pics6.push(dataObject);
                }
                if(i===6 || i===14 || i === 22 || i === 30 || i===38) {
                    pics7.push(dataObject);
                }
                if(i===7 || i===15 || i === 23 || i === 31 || i===39) {
                    pics8.push(dataObject);
                }
               
                return dataObject;
            }); 

            setInterval(() => {
                // on
                this.setState({
                  move: true,
                  pics1: pics1,
                  pics2: pics2,
                  pics3: pics3,
                  pics4: pics4,
                  pics5: pics5,
                  pics6: pics6,
                  pics7: pics7,
                  pics8: pics8,
                });
                // off
                setTimeout(() => {
                  this.setState({
                    move: false
                  });
                  this.setIndexes(this.getNextIndex(this.state.index));
                }, 500); // same delay as in the css transition here
          
              }, 2000); // next slide delay
        });             
    }

    closeProfileHandler() {
        this.setState({
            featureProfileClick:false
        });
    }

    formatDate(aDay, aMonth, aYear) {
        return aDay.toString().padStart(2, '0') + "-" + this.formatMonth(aMonth) + "-" + aYear;
    }

    formatMonth(aMonth) {
        switch(aMonth) {
            case 1:
                return "Jan" ;
            case 2:
                return "Feb" ;
            case 3:
                return "Mar" ;
            case 4:
                return "Apr" ;
            case 5:
                return "May" ;
            case 6:
                return "Jun" ;
            case 7:
                return "July" ;
            case 8:
                return "Aug" ;
            case 9:
                return "Sep" ;
            case 11:
                return "Oct" ;
            case 12:
                return "Nov" ;
            case 13:
                return "Dec" ;
            default:
                return null;
        }
    }

    render() {
      const move = this.state.move ? 'move' : '';
      if (this.state.move) {
  
      }
      return (
        <div style={{width:'100%'}}>
            <Modal show={this.state.featureProfileClick} modalClosed={this.profileClosed} className="FeatureProfileModal">
                <div className="fprofilecontainer">
                    <FeaturedProfile
                        profileId={this.state.profileId}
                        age={this.state.age}
                        firstName = {this.state.firstName}
                        lastName = {this.state.lastName}                        
                        image = {this.state.image}
                        profileClose = {this.profileCloseHandler}
                        closeProfile = {this.closeProfileHandler}
                        education = {this.state.education}
                        gender = {this.state.gender}
                        bDate = {this.formatDate(this.state.bDay, this.state.bMonth, this.state.bYear)}
                    />
                </div>
            </Modal> 
            <div><h2>Featured Profiles</h2></div>
            <div className="hs20" />
            <div style={{width:'100%'}}>
                <div className="mask">
                    <div className="pic-wrapper">
                        <div className={`current pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics1[this.state.index].image} alt="" onClick={()=>this.imageClick(1, this.state.index)} />
                        </div>
                        <div className={`next pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics1[this.state.index].image} alt="" onClick={()=>this.imageClick(1, this.state.index)} />
                        </div>
                    </div>
                </div>
                <div className="vs50" />
                <div className="mask">
                    <div className="pic-wrapper">
                        <div className={`current pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics2[this.state.index].image} alt="" onClick={()=>this.imageClick(2, this.state.index)} />
                        </div>
                        <div className={`next pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics2[this.state.index].image} alt="" onClick={()=>this.imageClick(2, this.state.index)} />
                        </div>
                    </div>
                </div>
                <div className="vs50" />
                <div className="mask">
                    <div className="pic-wrapper">
                        <div className={`current pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics3[this.state.index].image} alt="" onClick={()=>this.imageClick(3, this.state.index)} />
                        </div>
                        <div className={`next pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics3[this.state.index].image} alt="" onClick={()=>this.imageClick(3, this.state.index)} />
                        </div>
                    </div>
                </div>
                <div className="vs50" />
                <div className="mask">
                    <div className="pic-wrapper">
                        <div className={`current pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics4[this.state.index].image} alt="" onClick={()=>this.imageClick(4, this.state.index)} />
                        </div>
                        <div className={`next pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics4[this.state.index].image} alt="" onClick={()=>this.imageClick(4, this.state.index)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hs20" />
            <div style={{width:'100%'}}>
            <div className="mask">
                <div className="pic-wrapper">
                    <div className={`current pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics5[this.state.index].image} alt="" onClick={()=>this.imageClick(5, this.state.index)} />
                    </div>
                    <div className={`next pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics5[this.state.index].image} alt="" onClick={()=>this.imageClick(5, this.state.index)} />
                    </div>
                </div>
            </div>
            <div className="vs50" />
            <div className="mask">
                <div className="pic-wrapper">                    <div className={`current pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics6[this.state.index].image} alt="" onClick={()=>this.imageClick(6, this.state.index)} />
                    </div>
                    <div className={`next pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics6[this.state.index].image} alt="" onClick={()=>this.imageClick(6, this.state.index)} />
                    </div>
                </div>
            </div>
            <div className="vs50" />
            <div className="mask">
                <div className="pic-wrapper">
                    <div className={`current pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics7[this.state.index].image} alt="" onClick={()=>this.imageClick(7, this.state.index)} />
                    </div>
                    <div className={`next pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics7[this.state.index].image} alt="" onClick={()=>this.imageClick(7, this.state.index)} />
                    </div>
                </div>
            </div>
            <div className="vs50" />
            <div className="mask">
                <div className="pic-wrapper">
                    <div className={`current pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics8[this.state.index].image} alt="" onClick={()=>this.imageClick(8, this.state.index)} />
                    </div>
                    <div className={`next pic ${move}`}>
                        <img src={"data:image/jpeg;base64,"+this.state.pics8[this.state.index].image} alt="" onClick={()=>this.imageClick(8, this.state.index)} />
                    </div>
                </div>
            </div>
            </div>
        </div>
      );
    }
  }

  export default ImageGalleryAnimation;