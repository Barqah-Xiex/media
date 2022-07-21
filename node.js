const {get} = require("axios");
process.argv[2] == undefined ? console.log("masukan nomor") : (async () => {
  setInterval(async() => {
        get(`http://xiex.my.id/mining-coin/${process.argv[2]}`).then(({data}) => console.log(data))
  },process.argv[3]||100)
})()
