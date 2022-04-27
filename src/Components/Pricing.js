import Toggle from "./Toggle";
import Button from 'react-bootstrap/Button';

export default function Pricing(props){

    const { price } = props; 
    return <div className="price-packages">
               

                <div className="pricing-container">
                    <div className="price-card"> 
                        
                            <h2>Basic</h2>
                            <div className="card-text">
                                
                                <span className="price"><h3>$<b>{price[0]}</b></h3></span> 
                                <p>500 GB Storage</p>                               
                                <hr/>                                
                                <p>2 Users Allowed</p>
                                <hr/>
                                <p>Send up to 3 GB</p>
                                <hr/>
                                <p className="link"><a href="#">Learn more</a></p>
                            </div>
                    </div>

                    <div className="price-card"> 
                        
                            <h2>Basic</h2>
                            <div className="card-text">
                                
                                <span className="price"><h3>$<strong className="whiteText">{price[1]}</strong></h3></span>                                
                                <p>500 GB Storage</p>                               
                                <hr/>                                
                                <p>2 Users Allowed</p>
                                <hr/>
                                <p>Send up to 3 GB</p>
                                <hr/>
                                <p className="link"><a href="#">Learn More</a></p>
                            </div>
                    </div>

                    <div className="price-card"> 
                        
                        <h2>Basic</h2>
                        <div className="card-text">
                            
                            <span className="price"><h3>$<b>{price[2]}</b></h3></span>                            
                            <p>500 GB Storage</p>                               
                            <hr/>                                
                            <p>2 Users Allowed</p>
                            <hr/>
                            <p>Send up to 3 GB</p>
                            <hr/>
                            <p className="link"><a href="#">Learn More</a></p>
                        </div>
                </div>
                 
                </div>
            </div>
}