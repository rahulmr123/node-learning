const yargs = require('yargs');
const geocode = require('./geocode/geocode');
let args = yargs.options({
  a: {
    alias: 'address',
    string: true,
    describe: 'to fetch weather',
    demand: true
  }
})
.help()
.alias('help', 'h')
.argv;
geocode.getAddress(args.a, (errorMessage, results) => {
  if(errorMessage)
 console.log(errorMessage);
 else if(results)
 console.log(results)
});

