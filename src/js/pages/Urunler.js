import React from "react";
import Photo from "../components/Photo";


export default class Urunler extends React.Component {
  render() {

    var urun = [{name: "Fag rulman",
      photo:["../js/images/fag-rulman.jpg",
       ],
      text: "Sanayi, İğneli, Lineer ve Otomotiv rulman serileri"}
      ,{name: "Hitachi Zincir",
        photo:["../js/images/hitachi.JPG",],
        text: "Asa, Bs , Ziraai zincir grupları" }
      ,{name: "Tsubaki Zincir",
        photo:["../js/images/tsubaki.jpg",],
        text:"Asa, Bs , Ziraai zincir grupları"}
      ,{name: "Promak Mekanik Salmastra",
        photo:["../js/images/salmastra.jpg"],
        text:null}
      ,{name: " Çiftel ve Kama Teker",
        photo:["../js/images/teker.jpg"],
        text:null}
      ,{name: "Hassel Dişli",
        photo:["../js/images/disli.jpg"],
        text:null}];



    const PhotoComponents = urun.map((foto,i) => {
      return <Photo key={i} {...foto} height="300" width="300"/>;
    });



    return (
        <div>
          {PhotoComponents}
        </div>
    );
  }
}