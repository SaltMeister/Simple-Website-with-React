import * as React from 'react';
import '../CSS/Header.css';
class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(this.props.homeTitle);
        this.state = 
        {
            homeTitle: this.props.homeTitle,
            productTitle: this.props.productTitle,
            downloadTitle: this.props.downloadTitle,
            contactTitle: this.props.contactTitle,
        }
    }

    render()
    {
        return(
            <div id="Header">
                <ul id="HeaderList">
                    <li class ="HeaderItem">{this.state.homeTitle}</li>
                    <li class ="HeaderItem">{this.state.productTitle}</li>
                    <li class ="HeaderItem">{this.state.downloadTitle}</li>
                    <li class ="HeaderItem">{this.state.contactTitle}</li>
                </ul>
            </div>    
        
        );
    }
}

export default Header;