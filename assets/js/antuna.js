// fondo que se va moviendo con el scroll (sutil, dos resplandores cálidos)
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  function onScroll(){
    var doc = document.documentElement;
    var max = (doc.scrollHeight - doc.clientHeight) || 1;
    var pct = Math.min(1, Math.max(0, window.scrollY / max));
    root.style.setProperty('--wash-y', (8 + pct * 80) + '%');
    root.style.setProperty('--wash-y2', (30 + pct * 60) + '%');
  }
  if (!reduce){
    var ticking = false;
    window.addEventListener('scroll', function(){
      if (!ticking){
        requestAnimationFrame(function(){ onScroll(); ticking = false; });
        ticking = true;
      }
    }, {passive:true});
    onScroll();
  }
})();

var yEl = document.getElementById('y');
if (yEl) yEl.textContent = new Date().getFullYear();
