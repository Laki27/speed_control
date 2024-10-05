const video = document.getElementById('myVideo');
const slider = document.getElementById('slider');
const vrednost = document.getElementById('vrednost');
var brzina=1.0;

function setEqualHeight() {
    slider.style.height = `${video.offsetWidth/16*9}px`;
}

const resizeObserver = new ResizeObserver(setEqualHeight);
resizeObserver.observe(video);

slider.addEventListener('click', function(event){
    let visina = slider.offsetHeight;
    let click = event.offsetY;
    skalirana = ((5 * (visina-click)) / visina).toFixed(1);
    video.playbackRate = skalirana;
    vrednost.style.top = `${click}px`
    vrednost.innerText=`${skalirana}x`;
})

const input = document.getElementById('video_input');
input.addEventListener('change', function(event){
    const file = event.target.files[0];
    if(file){
        const videoURL = URL.createObjectURL(file);
        video.src = videoURL;
    }
})

const reader = new FileReader()
reader.addEventListener("load", () => {
    uploaded_video = reader.result
})

