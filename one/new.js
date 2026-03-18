function uploadVideo(){
    console.log("Uploading video...");
    setTimeout(() => {
        console.log("Video uploaded.");
    }   , 3000);
}

function publishVideo() {
    console.log("Publishing video...");
    setTimeout(() => {  
        console.log("Video published.");
        ;
    }   , 2000);
}

function notifySubscribers() {
    console.log("Notifying send");
}

uploadVideo();
publishVideo();
notifySubscribers();