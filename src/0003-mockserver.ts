import {
  createServer
} from 'miragejs';

const hostToMock = 'http://api.com/';

createServer({
  routes() {
    this.get(
      `${hostToMock}/me`, () => '007'
    );
  },
});

// further...
fetch('http://api.com/me') // => 007