window.addEventListener('load', ()=>{
  const kits = document.querySelectorAll('.sound');
  const beats = document.querySelectorAll('.beats div');
  // console.log(beats);
  let groove = [];
  let stop=false;
  let i=0;

  function beatBox(){
      for(let i=0; i< groove.length; i++){
          kits[i].play();
      }
  }

  function preRecord(){
    beats.forEach((beat, index)=>{
      beat.addEventListener('click', function(){
        if(stop) return;
        groove.push(index);
        console.log(index);
      });
    });  
  }

  beats.forEach((beat, index)=>{
      beat.addEventListener('click', function(){
          kits[index].currentTime = 0;
          kits[index].play();
      });
  });

  function recorded(){
    if(i==groove.length) i=0;
    if(i<groove.length && !stop) setTimeout(recorded, 1000);
    kits[groove[i]].play();
    console.log(groove[i]);
    i++;
    stop=false;
    console.log(stop);
  }

  document.querySelector('.play').addEventListener('click', ()=>{
    stop=false;
    console.log(stop);
    recorded();
  });
  // document.querySelector('.clear').addEventListener('click', ()=>{
  //   groove=[];
  // });
  document.querySelector('.record').addEventListener('click', ()=>{
    stop=false;
    preRecord();
  });
  document.querySelector('.stop').addEventListener('click', ()=>{
    stop=true;
  });
});

