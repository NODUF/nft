/*####### COLLECTION #######*/

//DATA
var post=[
  {
    title: "SUNNY DAY WITH MASTER CHIEF",
    datecreated:"10/17/21",
    toolsused:"Blender",
    originalresolution:"2000 x 2500",
    filesize: "1,882,181 bytes",
    nftart: "nfts/sunny-day-with-master-chief.png",
    href: "sunny-day-with-master-chief",
    link: "https://rarible.com/token/0xf6793da657495ffeff9ee6350824910abc21356c:104238516375740187513133738248866004109794379427696023384912212459279381168133?tab=details"
},
  {
      title: "BANANA ISLAND?!",
      datecreated:"10/26/21",
      toolsused:"Blender",
      originalresolution:"3840 x 2160",
      filesize: "16,035,829 bytes",
      nftart: "nfts/banana-island.png",
      href: "banana-island",
      link: "https://rarible.com/token/0xf6793da657495ffeff9ee6350824910abc21356c:104238516375740187513133738248866004109794379427696023384912212459279381168140?tab=details"
  },
  {
    title: "WANT SOME HERS COFFEE?",
    datecreated:"10/27/21",
    toolsused:"Blender, Photoshop",
    originalresolution:"2000 x 2500",
    filesize: "4,460,355 bytes",
    nftart: "nfts/want-some-hers-coffee.png",
    href: "want-some-hers-coffee",
    link: "https://rarible.com/token/0xf6793da657495ffeff9ee6350824910abc21356c:104238516375740187513133738248866004109794379427696023384912212459279381168141?tab=details"
},
{
  title: "SOUL KEY",
  datecreated:"11/23/21",
  toolsused:"Blender",
  originalresolution:"2000 x 2500",
  filesize: "5,282,733 bytes",
  nftart: "nfts/soul-key.png",
  href: "soul-key",
  link: "https://rarible.com/token/0xF6793dA657495ffeFF9Ee6350824910Abc21356C:104238516375740187513133738248866004109794379427696023384912212459279381168142"
},
];
  
//Loop length:
var postLength = post.length;
//Empty container:
$(".nft-box").empty();


function IfNotFound(){
  var listItem = 
      '<li class="nft-item">'+
        '<span>'+
          '<div class="nft">'+
              '<p class="title">CANT FIND ANYTHING...</p>'+
            '</a>'+
          '</div>'+
        '</span>'+
      '</li>';
      
    $(".nft-box").append(listItem);
}


//GETTING DATA
$(document).ready(function() {
  if (window.location.href.indexOf("?nft=soul-key") > -1){
    nftid = 3
  }
  if (window.location.href.indexOf("?nft=want-some-hers-coffee") > -1){
    nftid = 2
  }

  if (window.location.href.indexOf("?nft=banana-island") > -1){
    nftid = 1
  }

  if (window.location.href.indexOf("?nft=sunny-day-with-master-chief") > -1){
    nftid = 0
  }
  else{
    IfNotFound();
  }

    console.log(nftid)
    var listItem = 
      '<li class="nft-item">'+
        '<span>'+
          '<div class="nft">'+
              '<p class="title">'+post[nftid].title+'</p>'+
              '<img src="'+post[nftid].nftart+'" alt="">'+
              '<p class="datecreated">DATE CREATED:<br>'+post[nftid].datecreated+'</p>'+
              '<p class="toolsused">TOOLS USED:<br>'+post[nftid].toolsused+'</p>'+
              '<p class="originalresolution">ORIGINAL RESOLUTION:<br>'+post[nftid].originalresolution+'</p>'+
              '<p class="filesize">FILE SIZE:<br>'+post[nftid].filesize+'</p>'+
            '</a>'+
          '</div>'+
        '</span>'+
      '</li>';
      
    $(".nft-box").append(listItem);
});