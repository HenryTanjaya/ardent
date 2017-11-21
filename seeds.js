var mongoose = require("mongoose");
var Portfolio = require("./models/portfolio");
var Journal = require("./models/journal");
var Landing = require("./models/landing");

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
    },
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
    },
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
    },
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
    }
]

var dataJournal = [
    {
        title: "Cloud's Rest",
        date: "02-05-1998",
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        image2: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        desc2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        title: "Cloud's Rest2",
        date: "02-05-1999",
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        image2: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        desc2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        title: "Cloud's Rest3",
        date: "02-05-2000",
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        image2: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        desc2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        title: "Cloud's Rest4",
        date: "02-05-2001",
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        image2: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        desc2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        title: "Cloud's Rest5",
        date: "02-05-2002",
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        image2: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        desc2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        title: "Cloud's Rest6",
        date: "02-05-2003",
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        image2: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        desc2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }
]

var dataLanding = [
    {
      imagetitle:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      imagevision:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      imagemission:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      imagevalues:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      imagecontact:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"
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

    Journal.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("removed journal");
        //add a few journal
        dataJournal.forEach(function(seedJournal){
            Journal.create(seedJournal, function(err,journal){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a journal");
                }
            })
        })
    });

    Landing.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("removed landing");
        //add a few landing
        dataLanding.forEach(function(seedLanding){
            Landing.create(seedLanding, function(err,landing){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a landing");
                }
            })
        })
    })
}

module.exports = seedDB;
