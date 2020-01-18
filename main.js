let FlickrRequest="https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e507d89017626ef9a61e8a1dc8268d61&format=json&nojsoncallback=1"
let QuoteRequest="https://api.quotable.io/random"
var data;

var Request=new XMLHttpRequest()
Request.open('GET',QuoteRequest,true)

Request.onload=function(){
    quote=JSON.parse(Request.response)
    document.getElementById('title').innerHTML =quote.content
}
Request.send()


var request = new XMLHttpRequest()
request.open('GET',FlickrRequest,true)

request.onload =function() {
     
    data = JSON.parse(request.response)
    var index= Math.floor(Math.random() * Math.floor(data.photos.photo.length));
    let farmId=data.photos.photo[index].farm;
    let serverId=data.photos.photo[index].server;
    let id =data.photos.photo[index].id;
    let secret=data.photos.photo[index].secret;
    let title=data.photos.photo[index].title;
    
    let FlickrUrl="https://farm"+farmId+".staticflickr.com/"+serverId+"/"+id+"_"+secret+"_b.jpg"
    //document.body.style.backgroundImage = "url("+Wallpapers[Math.floor(Math.random() * Wallpapers.length)]+")";
    //document.getElementById('title').innerHTML =''+title;
    document.body.style.backgroundImage = "url("+FlickrUrl+")";
    document.body.style.height="100px"
    document.body.style.position="center"
    document.body.style.backgroundSize="cover"
}

request.send()

