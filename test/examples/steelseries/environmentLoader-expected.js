import environment from environment
import sockets from sockets

export default {
  whenServerIsAvailable(cb) {
    return environment.loadProperties(() => sockets.waitTillConnectionIsEstablished(cb));
  }
}
