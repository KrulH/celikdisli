import React from "react";

import Photo from "../components/Photo";




export default class Anasayfa extends React.Component {
  render() {
    var urun ={name: null,
      photo:["../js/images/chain.jpg",
        ]};

    return (

        <div>
          <Photo urun={urun} height="300" width="300" />
          <br/>
          <br/>
          <h2 >Bünyemizde bulunan bayilikler,  <br/>

            Hitachi ve Tsubaki Marka Transmisyon Zinciri Türkiye Yetkili İthalatı, <br/>
            Fag ve Nsk Marka Sanayi Rulmanları Adana Bayi, <br/>
            Çiftel ve Kama Marka Sanayi Tekerleri bölge Bayi, <br/>
            Hassel Marka Transmisyon Dişli Bayi, <br/>
            Promak Marka Mekanik Salmastra Adana Bayii. <br/></h2>

          <div class="row"></div>

        </div>
    );
  }
}
