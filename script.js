document.querySelector('#knicks').addEventListener('click',goKnicks)
document.querySelector('#yanks').addEventListener('click',goYanks)
document.querySelector('#jets').addEventListener('click',goJets)
document.querySelector('#mets').addEventListener('click',goMets)
document.querySelector('#giants').addEventListener('click',goGiants)


function reset(){
document.querySelector('h2').innerText = 'Do You Know When We Last Won It All?'
document.getElementById('main').style.backgroundImage = 'url(https://i.ibb.co/C2rq35J/nyc-cover.jpg)'
document.getElementById('main').style.backgroundPosition = 'center'
document.getElementById('main').style.backgroundRepeat = 'no-repeat'
document.getElementById('main').style.backgroundSize= 'cover'
document.querySelector('h4').innerText = ''

}

function goKnicks(){
  document.getElementById('main').style.backgroundImage = 'url(https://i.ibb.co/ZJKT2nP/b716f32fc814f03ac1a278c62faa4e2b-crop-exact.jpg)'
}
  document.getElementById('main').style.backgroundPosition = 'center'
  document.getElementById('main').style.backgroundRepeat = 'no-repeat'
  document.getElementById('main').style.backgroundSize= 'cover'
  document.querySelector('h4').innerText = 'Last Championship Won in 1972'

function goYanks(){
  document.getElementById('main').style.backgroundImage = 'url(https://i.ibb.co/9s65Gr9/r.jpg)'
}
  document.getElementById('main').style.backgroundPosition = 'center'
  document.getElementById('main').style.backgroundRepeat = 'no-repeat'
  document.getElementById('main').style.backgroundSize= 'cover'
  document.querySelector('h4').innerText = 'Last Championship Won in 2009'

function goJets(){
  document.getElementById('main').style.backgroundImage = "url(https://i.ibb.co/GJGCs0Q/Screen-Shot-2022-09-20-at-19-11-22.png)"
}
  document.getElementById('main').style.backgroundPosition = 'center'
  document.getElementById('main').style.backgroundRepeat = 'no-repeat'
  document.getElementById('main').style.backgroundSize= 'cover'
  document.querySelector('h4').innerText = 'Last Championship Won in 1968'

function goMets(){
  document.getElementById('main').style.backgroundImage = 'url(https://i.ibb.co/7b2NM7K/1986-mets-gettyimages-147211047.jpg)'
  document.getElementById('main').style.backgroundPosition = 'center'
  document.getElementById('main').style.backgroundRepeat = 'no-repeat'
  document.getElementById('main').style.backgroundSize= 'cover'
  document.querySelector('h4').innerText = 'Last Championship Won in 1969'
}

function goGiants(){
  document.getElementById('main').style.backgroundImage = 'url(https://i.ibb.co/wK5f8pZ/maxresdefault.jpg)'
  document.getElementById('main').style.backgroundPosition = 'center'
  document.getElementById('main').style.backgroundRepeat = 'no-repeat'
  document.getElementById('main').style.backgroundSize= 'cover'
  document.querySelector('h4').innerText = 'Last Championship Won in 2007'
}