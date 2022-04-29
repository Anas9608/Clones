console.log("welcome to spotify");
//intitialize variables associated with buttons on the interface
let audioElement = new Audio('songs/Bucketheadland - Healing Inside Outside Every Side - 01 How Much Does A Thought Weigh.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let soundGIF = document.getElementById('soundGIF');
let soundGIFBottom = document.getElementById('soundGIFBottom');

let songItems = Array.from(document.getElementsByClassName("songItem"));
let songIndex = 0;
let masterSongName = document.getElementById("masterSongName");
let songs= [
    {songName:"How much does a thought weigh", filePath:"songs/Bucketheadland - Healing Inside Outside Every Side - 01 How Much Does A Thought Weigh.mp3",coverPath:"covers/cover00.jpg"},
    {songName:"Healing inside outside everyside", filePath:'songs/Bucketheadland - Healing Inside Outside Every Side - 02 Healing Inside Outside Every Side.mp3',coverPath:"covers/cover01.jpg"},
    {songName:"Rockpond", filePath:'songs/Bucketheadland - Healing Inside Outside Every Side - 03 The Rock Pond.mp3',coverPath:"covers/cover02.jpg"},
    {songName:"Fireflies", filePath:'songs/Bucketheadland - Healing Inside Outside Every Side - 04 Fireflies.mp3',coverPath:"covers/cover03.jpg"},
    {songName:"The dream that dreamt", filePath:'songs/Bucketheadland - Healing Inside Outside Every Side - 05 The Dream That Dreamt.mp3',coverPath:"covers/cover04.jpg"},
    {songName:"Antenna", filePath:'songs/Bucketheadland - Healing Inside Outside Every Side - 06 Antenna.mp3',coverPath:"covers/cover05.jpg"},
    
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
   

})
//playing the song
masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<= 0){
        soundGIFBottom.style.opacity= 1;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        soundGIFBottom.style.opacity= 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

    }

})

//switching to next and previous songs


//update seek bar and songs according to the context
audioElement.addEventListener('timeupdate',()=>{

    //update the progress bar
    progress= parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value = progress;
    if(progress=== 100){
        soundGIF.style.opacity = 0;
    }
    //update song progress according to position of the progress bar
    myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
    })
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.currentTime = 0;
        
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
      
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        soundGIFBottom.style.opacity= 1;

    }
   )
})   
    

//this function change the state of play button to pause and vice versa in song catalogue

document.getElementById("prevPlay").addEventListener("click",()=>{
    
    if(songIndex >= 0){
       
    songIndex = songIndex-1;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    soundGIFBottom.style.opacity= 1;

    }
    else{
        audioElement.currentTime = 0;
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        soundGIFBottom.style.opacity= 0;
    }
})

document.getElementById("nextPlay").addEventListener("click",()=>{
    
    if(songIndex != songs.length -1){
        songIndex = songIndex+1;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.play();
        soundGIFBottom.style.opacity= 1;
       
       
    }
    else{
        audioElement.currentTime = 0;
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        soundGIFBottom.style.opacity= 0;

    }
})

