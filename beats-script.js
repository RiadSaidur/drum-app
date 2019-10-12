window.addEventListener('load', ()=>{
  const kits = document.querySelectorAll('.sound');
  const beats = document.querySelectorAll('.beats div');

  let groove = [];
  let stop=false;
  let i=0;

  beats.forEach((beat, index)=>{
      beat.addEventListener('click', function(){
          kits[index].currentTime = 0;
          kits[index].play();
          groove.push(index);
      });
  });

  function recorded(){
    if(i==groove.length) i=0;
    if(i<groove.length && !stop) setTimeout(recorded, 1000);
    kits[groove[i]].play();
    kits[groove[i]].currentTime = 0;
    i++;
    stop=false;
    console.log(i);
  }

  document.querySelector('.play').addEventListener('click', ()=>{
    stop=false;
    recorded();
  });

  document.querySelector('.record').addEventListener('click', ()=>{
    i=0;
    stop=false;
    groove=[];

  });

  document.querySelector('.stop').addEventListener('click', ()=>{
    stop=true;
  });

});

