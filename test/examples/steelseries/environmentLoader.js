define(['environment', 'sockets'], (environment, sockets) => ({
  whenServerIsAvailable(cb) {
    return environment.loadProperties(() => sockets.waitTillConnectionIsEstablished(cb));
  }
})
);
