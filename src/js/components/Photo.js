import React from "react";

export default class Photo extends React.Component {
    render() {

        return (
            <div class="col-md-4">
                {this.props.urun.name}
                <p>{this.props.urun.text}</p>
                {this.props.urun.photo.map(
                    (photos,i) =>
                        <img key={i}
                             src= {photos}
                             height={this.props.height}
                             width={this.props.width}
                             class="img-rounded pull-xs-left"
                            /> )}
            </div>
        );
    }
}
