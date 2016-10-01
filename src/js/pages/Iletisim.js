import React from "react";
import Photo from "../components/Photo";

export default class Settings extends React.Component {


  render() {
    var urun =[{name: null,
      photo:["./js/images/ss.png" ] }];
    const PhotoComponents = urun.map((foto,i) => {
      return <Photo key={i} {...foto} height="600" width="800"/>;
    });
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
          {PhotoComponents}

        </div>
    );
  }
}
