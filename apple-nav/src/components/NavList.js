import React from "react";
import Nav from "./Nav"
import "./nav.css"


export default class NavList extends React.Component {
    constructor(props) {
        super(props);
        const headings = this.props.list.map(nav=>{
            return nav.heading;
        })

        const subheadings = this.props.list.map(nav=>{
            return nav.subheading;
        })


        this.state = {
            headings : headings,
            list : this.props.list,
            subheadings:subheadings
        }
        console.log("List " + this.state.list);
    }

    componentDidMount() {

    }



    render() {

        let subheading=[];
        console.log("List " + this.state.list);

        let i = this.state.headings.indexOf(this.props.match.params.id)
        subheading = this.state.subheadings[i];


        return <div className="navlist">

            {
                subheading.map(subHead => {
                      return <Nav sh = {subHead}/>
                    }

                )
            }


        </div>

    }
}

