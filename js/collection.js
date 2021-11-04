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
        href: "want-some-hers-coffee",
        link: "https://rarible.com/token/0xf6793da657495ffeff9ee6350824910abc21356c:104238516375740187513133738248866004109794379427696023384912212459279381168141?tab=details"
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
        title: "SUNNY DAY WITH MASTER CHIEF",
        datecreated:"10/17/21",
        toolsused:"Blender",
        originalresolution:"2000 x 2500",
        filesize: "1,882,181 bytes",
        nftart: "nfts/sunny-day-with-master-chief.png",
        href: "sunny-day-with-master-chief",
        link: "https://rarible.com/token/0xf6793da657495ffeff9ee6350824910abc21356c:104238516375740187513133738248866004109794379427696023384912212459279381168133?tab=details"
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
        //'<a>'+
        //'<a href='+post[i].link+'>'+
        '<a href='+"nft-detail.html?nft="+''+post[i].href+'>' +
          '<div class="nft">'+
              '<p class="title">'+post[i].title+'</p>'+
              '<p class="datecreated">'+post[i].datecreated+'</p>'+
              '<img src="'+post[i].nftart+'" alt="">'+
              //'<button type="button" action="nft" method="GET">CC</button>'
            '</a>'+
          '</div>'+
        '</a>'+
      '</li>';
    //Append thumb:
    $(".nft-box").append(listItem);
  };