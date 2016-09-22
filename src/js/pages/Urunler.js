import React from "react";
import Photo from "../components/Photo";


export default class Urunler extends React.Component {
  render() {

    var urun ={name: "Fag rulman",
      photo:["../js/images/fag-rulman.jpg"],
    text: "Sanayi, İğneli, Lineer ve Otomotiv rulman serileri"};
    var urun1 ={name: "Hitachi Zincir",
      photo:["../js/images/hitachi.JPG"],
      text: "Asa, Bs , Ziraai zincir grupları" };
    var urun2 ={name: "Tsubaki Zincir",
      photo:["../js/images/tsubaki.jpg"],
      text:"Asa, Bs , Ziraai zincir grupları"};
    var urun3 ={name: "Promak Mekanik Salmastra",
      photo:["../js/images/salmastra.jpg"],
      text:null};
    var urun4 ={name: " Kama ve Çiftel Teker",
      photo:["../js/images/teker.jpg"],
      text:null};
    var urun5 ={name: "Hassel Dişli",
      photo:["../js/images/disli.jpg"],
      text:null};


    return (
      <div>
        
        <div class="row"></div>
        <Photo urun={urun} height="300" width="300"/>
        <Photo urun={urun1} height="300" width="300"/>
        <Photo urun={urun2} height="300" width="300"/>
        <Photo urun={urun3} height="300" width="300"/>
        <Photo urun={urun4} height="300" width="300"/>
        <Photo urun={urun5} height="300" width="300"/>
      </div>
    );
  }
}
