import React, {Component} from 'react';
import './Contact.css';
import house from '../../assets/images/villupuram.jpg';
import Footer from '../footer/Footer';
import TopBar from '../menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';

class Contact extends Component {

    constructor(){
        super();
        this.state={
            contacts:[]
        };
    }

    componentDidMount() {
        fetch(ApiConstant.CONTACT_API)
        .then(function (response) {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            const contacts = data.map((contact) => {
                return (
                    <div>                       
                        <div className="contactParent">
                            <div className="containerChild" style={{verticalAlign:'top'}}>
                                <div className="image">
                                    <img src={house} alt='Not Available'></img>
                                </div>
                            </div>
                            <div className="containerChild " key={contact.id} style={{paddingLeft:'20px'}}>
                                        <div>
                                            <label><h2>{contact.name}</h2></label> 
                                        </div>
                                        <div>
                                        <label>{contact.doorNumber},</label> <label>{contact.addressLine1}</label>
                                        </div>
                                        <div>
                                            <label>{contact.addressLine2}</label>
                                        </div>
                                        <div>
                                            <label>{contact.city}</label>
                                        </div>
                                        <div>
                                            <label>{contact.state}</label>
                                        </div>
                                        <div>
                                            <label>{contact.country}</label>
                                        </div>
                            </div>    
                        </div>
                    </div>               
                );
            });
            this.setState({contacts:contacts});
           
        });          
    }

    render () {
        return (
            <div>
                <TopBar />
               <div className='hs50'></div>      
                <div className="addressContainer" key="contactContainer">                
                    {this.state.contacts}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;