import React from "react";
import Photo from "../components/Photo";

export default class Settings extends React.Component {


  render() {
    var urun ={name: null,
      photo:["./js/images/ss.png" ] };

    return (
        <div>

          <h2>

            Kızılay Cad. No 27/A Seyhan Adana<br/>
            <br/>
            Telefon: 0322 351 1025  Faks: 0322 359 64 01<br/>
            <br/>
            Gsm : 0541 351 39 67<br/>
            <br/>
            Email:  info@celikdisli.com.tr<br/></h2>
          <br/>
          <Photo urun={urun} height="500" width="800"/>

        </div>
    );
  }
}
