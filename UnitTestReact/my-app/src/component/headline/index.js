import React, {Component} from 'react';
import Header from '../header';
import PropType from 'prop-types'
import './styles.css';


class Headline extends Component{
    render(){
        const {header, desc}=this.props;
    

    if(!header){
        return null;
    }

    return (
        <div className = "wrap" data-test = "headlineComponent">
           <h1 data-test='header'>{header}</h1>
           <p data-test='desc'>
           {desc}
           </p>
        </div>
    )

    }

}

Headline.propTypes = {
    header: PropType.string,
    desc: PropType.string
}
export default Headline;