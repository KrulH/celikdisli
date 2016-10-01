import React from "react";

export default class Photo extends React.Component {
    render() {

        return (
            <div class="col-md-4">
                <p class="title">{this.props.name}</p>
                <p>{this.props.text}</p>
                <img src= {this.props.photo}
                     height={this.props.height}
                     width={this.props.width}
                     class="img-rounded pull-xs-left"
                    />
            </div>
        );
    }
}
