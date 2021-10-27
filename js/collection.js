/*####### COLLECTION #######*/

//DATA
var post=[
    {
        title: "WANT SOME HERS COFFEE?",
        datecreated:"10/27/21",
        toolsused:"Blender, Photoshop",
        originalresolution:"2000 x 2500",
        filesize: "4,460,355 bytes",
        nftart: "nfts/want-some-hers-coffee.png",
        href: "want-some-hers-coffee"
    },
    {
        title: "BANANA ISLAND?!",
        datecreated:"10/26/21",
        toolsused:"Blender",
        originalresolution:"3840 x 2160",
        filesize: "16,035,829 bytes",
        nftart: "nfts/banana-island.png",
        href: "banana-island"
    },
    {
        title: "SUNNY DAY WITH MASTER CHIEF",
        datecreated:"10/17/21",
        toolsused:"Blender",
        originalresolution:"2000 x 2500",
        filesize: "1,882,181 bytes",
        nftart: "nfts/sunny-day-with-master-chief.png",
        href: "sunny-day-with-master-chief"
    },
  ];
  
//Loop length:
var postLength = post.length;
//Empty container:
$(".nft-box").empty();
//Loop:
for (i=0; i<postLength; i++) {
    //Create card structure:
    var listItem =
      '<li class="nft-item">'+
        //'<a href='+"search=?"+''+post[i].href+'>'+
        '<a>'+
          '<div class="nft">'+
              '<p class="title">'+post[i].title+'</p>'+
              '<p class="datecreated">'+post[i].datecreated+'</p>'+
              '<img src="'+post[i].nftart+'" alt="">'+
            '</a>'+
          '</div>'+
        '</a>'+
      '</li>';
    //Append thumb:
    $(".nft-box").append(listItem);
  };