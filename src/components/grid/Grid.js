import Card from '../card/Card';
import React, { Component } from "react";
import StackGrid from "react-stack-grid";

/*
const List = (props) => (
    
        {
            props.items.map((item, i) => {
                return (

        <Card 
          key={i} 
          site="CHR" 
          title=""
          excerpt="" 
          img="{post.img}"
        /> );


            })
        }
    </StackGrid>
);
*/

class MyComponent extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    

    componentDidMount() {
        fetch('https://resumenlocal.com:3001/messages', {method: 'GET'})
        .then(result=>result.json())
        .then(items=>this.setState({items}));

    }

    render() {
        this.state.items.sort((a, b) => (a.order > b.order) ? 1 : -1 );

        return(
            <StackGrid className="cards-container" columnWidth={345}>
                    {this.state.items.map( (item,i) => 
                     
                    <Card 
                    key={i}           
                    site={item.source} 
                    title={item.title}
                    excerpt={item.title} 
                    img={item.image_url}
                    link={item.link}
                    date={item.date}
                    />
                    
        )}
            </StackGrid>
        )
    }
}

export default MyComponent

