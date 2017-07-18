var mongoose = require("mongoose");
var Portfolio = require("./models/portfolio");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        numberofservice:4,
        service1:"Event Branding",
        service2:"Event Branding",
        service3:"Event Branding",
        service4:"Event Branding",
        video:"https://www.youtube.com/embed/5YL_dOgEGVw?vq=hd720",
        host:"Ardent",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date:"05-23-1998",
        image1:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image2:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image3:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image4:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image5:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image6:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image7:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image8:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image9:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image10:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image11:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image12:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
    
    },
    {
        name: "Desert Mesa", 
        image: "https://www.leonia.in/Entertainment/images/Background-Sildes/LiveEvents01.jpg",
        numberofservice:3,
        service1:"Event Branding",
        service2:"Event Branding",
        service3:"Event Branding",
        video:"https://www.youtube.com/embed/5YL_dOgEGVw?vq=hd720",
        host:"Ardent",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date:"05-23-2007",
        image1:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image2:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image3:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image4:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image5:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image6:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image7:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image8:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image9:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image10:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image11:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image12:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
    },
    {
        name: "Cloud's Rest1", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        numberofservice:4,
        service1:"Event Branding",
        service2:"Event Branding",
        service3:"Event Branding",
        service4:"Event Branding",
        video:"https://www.youtube.com/embed/5YL_dOgEGVw?vq=hd720",
        host:"Ardent",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date:"05-23-1998",
        image1:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image2:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image3:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image4:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image5:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image6:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image7:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image8:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image9:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image10:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image11:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image12:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        
    },
    {
        name: "Desert Mesa2", 
        image: "https://www.leonia.in/Entertainment/images/Background-Sildes/LiveEvents01.jpg",
        numberofservice:1,
        service1:"Event Branding",
        video:"https://www.youtube.com/embed/5YL_dOgEGVw?vq=hd720",
        host:"Ardent",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date:"05-23-2007",
        image1:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image2:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image3:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image4:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image5:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image6:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image7:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image8:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image9:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image10:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image11:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
        image12:"https://www.typewolf.com/assets/img/sotd/2016-04-11.png",
    }
]

function seedDB(){
   //Remove all portfolio
   Portfolio.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed portfolio");
         //add a few portfolio
        data.forEach(function(seed){
            Portfolio.create(seed, function(err, portfolio){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a portfolio");
                }
            });
        });
    }); 
    //add a few portfolio
}

module.exports = seedDB;
