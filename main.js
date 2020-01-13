//let FlickrRequest=  "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=e507d89017626ef9a61e8a1dc8268d61&gallery_id=6065-72157617483228192&per_page=&format=json&nojsoncallback=1"
let FlickrRequest="https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e507d89017626ef9a61e8a1dc8268d61&format=json&nojsoncallback=1"
var data;
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
    document.getElementById('title').innerHTML =''+title;
    document.body.style.backgroundImage = "url("+FlickrUrl+")";
    document.body.style.height="100px"
    document.body.style.position="center"
    document.body.style.backgroundSize="cover"
}

request.send()

