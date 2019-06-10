const chalk = require('chalk-animation');

const validMethods = [ `glitch`, `karaoke`, `neon`, `pulse`, `radar`, `rainbow` ];
  // grab third positiong in args array
const scriptArg = process.argv[2]
  // check the arg is valid and use it or default to 'rainbow'
const method = validMethods.includes(scriptArg) ? scriptArg : 'rainbow';

function animateString(string) {
    const animation = chalk[method](string)


  animation.start()

  setTimeout(() => animation.stop(), 2000)
}

module.exports = { animateString: animateString };