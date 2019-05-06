const server = http.createServer((req, res) => {
  let data = []
  req.on('data', chunk => {
    data.push(chunk)
  });
  req.on('end', () => {
    JSON.parse(data).todo // 'Buy the milk'
  })
})