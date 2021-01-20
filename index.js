const path = require('path')
const fs = require('fs')

const app = require('express')()
const Mustache = require('mustache')

const { PORT = 9399 } = process.env

app.get('/static/her-pics/:fileName', (req, res) => {
  const fileName = req.params.fileName
  res.sendFile(path.join(__dirname, 'static', 'her-pics', fileName))
})

app.get('/static/:fileName', (req, res) => {
  const fileName = req.params.fileName
  res.sendFile(path.join(__dirname, 'static', fileName))
})

app.get('/song/:folder/:file', (req, res) => {
  const folder = req.params.folder
  const file = req.params.file
  res.sendFile(path.join(__dirname, 'static', 'songs', folder, file))
})

app.get('/video/:file', (req, res) => {
  const file = req.params.file
  res.sendFile(path.join(__dirname, 'static', 'videos', file))
})

app.get('/song', (req, res) => {
  const songInfo = JSON.parse(fs.readFileSync(path.join(__dirname, 'static', 'songs', 'song-info.json'), 'utf8'))
  res.send(songInfo)
})

app.get('/', (req, res) => {
  const template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8')
  const picFiles = fs.readdirSync(path.join(__dirname, 'static', 'her-pics'))
  const herPics = picFiles.map(file => `/static/her-pics/${file}`)
  const data = {
    realname: 'realname',
    nickname: 'nickname',
    herPics: herPics
  }
  console.log(new Date().toGMTString())
  res.send(Mustache.render(template, data))
})

app.listen(PORT, () => {
  console.info(`Server is running at PORT - ${PORT}...!`)
})
