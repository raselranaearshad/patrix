// VenoBox Plugin Settings 
new VenoBox({
  selector: '.open_video',
  autoplay: true,
  spinner: 'grid',
});


// MixitUp Plugin Settings
var mixer = mixitup('.mixcontainer', {
  animation: {
    enable: true,
    effects: 'fade translateY(100%)',
    duration: 800,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    perspectiveDistance: '2000px',
  },
});