// //let FlickrRequest="https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=e507d89017626ef9a61e8a1dc8268d61&gallery_id=6065-72157617483228192&per_page=&format=json&nojsoncallback=1"
// let FlickrRequest="https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e507d89017626ef9a61e8a1dc8268d61&format=json&nojsoncallback=1"
// var data;
// var request = new XMLHttpRequest()
// request.open('GET',FlickrRequest,true)

// request.onload =function() {
     
//     data = JSON.parse(request.response)
//     let farmId=data.photos.photo[3].farm;
//     let serverId=data.photos.photo[3].server;
//     let id =data.photos.photo[3].id;
//     let secret=data.photos.photo[3].secret;
//     let FlickrUrl="https://farm"+farmId+".staticflickr.com/"+serverId+"/"+id+"_"+secret+"_b.jpg"
//     console.log(data.photos.photo[3].title)
//     console.log(FlickrUrl)
// }

// request.send()

// // Info: Flickr Source Url And Size Suffix: https://www.flickr.com/services/api/misc.urls.html

