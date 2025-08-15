console.log("wellcome to spotify");
const songs = [
    { img: "cover1.jpg", title: "Let me love you", duration: "05:34" ,audiosrc:"let_me_love_you.mp3"},
    { img: "cover1.jpg", title: "Shape of You", duration: "04:20" ,audiosrc:"believer.mp3"},
    { img: "cover1.jpg", title: "Perfect", duration: "04:05",audiosrc:"let_me_love_you.mp3" },
    { img: "cover1.jpg", title: "Despacito", duration: "03:48",audiosrc:"believer.mp3" },
    { img: "cover1.jpg", title: "Faded", duration: "03:32",audiosrc:"despacito.mp3" },
    { img: "cover1.jpg", title: "Believer", duration: "03:24" ,audiosrc:"believer.mp3"},
    { img: "cover1.jpg", title: "Closer", duration: "04:10",audiosrc:"despacito.mp3" }
];
let index=0;
const container= document.getElementById('songItemContainer');
for(let song of songs){
    const songbox=document.createElement('div');
    songbox.classList.add('songItem');
    songbox.innerHTML=`<img src=${song.img} alt=${song.title} >
    <span>${song.title}</span>
    <span class='timestamp'>
    <span>
            ${song.duration}
             <i class="fa-solid fa-circle-play" data-index=${index}></i>
    </span>
    </span>`;
    container.appendChild(songbox);
    index++;
}



//initialize variable

let songIndex=0;
let audioElement=new Audio('beliver.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('progressBar');


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        
    }
})
audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

//prev song

let prevBtn = document.getElementById('prev');

prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop to last if at first
    audioElement.src = songs[songIndex].audiosrc;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});


//next song

let nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length; // Loop back to start
    audioElement.src = songs[songIndex].audiosrc;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
