import './main.scss'
const playVedio = () => {
  const vid = document.getElementById('video')
  document.getElementById('play').addEventListener('click', (e) => {
    vid.play()
    e.target.style.display = 'none'
  })
}
playVedio()
