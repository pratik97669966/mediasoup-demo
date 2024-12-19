import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// try to get host domain from server/config.js if any
import Module from 'node:module'
const require = Module.createRequire(import.meta.url)
let host = process.env.DOMAIN || 'localhost'
try {
  host = require('../server/config').domain || host
} catch(err) {
  // ignore file not found
}
const port = Number(process.env.VITE_LISTEN_PORT) || 3000

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: Infinity,
  },
  server: {
    host,
    port,
  },
})

import qs from 'qs'
import openBrowser from 'react-dev-utils/openBrowser'
import waitPort from 'wait-port'

runDev()

async function runDev() {
  const dev = process.env.DEV
  if (!dev) {
    return
  }

  await waitPort({
    host,
    port,
    output: 'silent',
  })

  const default_ = {
    roomId: 'dev',
    _throttleSecret: 'foo',
    info: true,
  }
  const defaultProducer = {
    consume: false,
  }
  const defaultConsumer = {
    produce: false,
  }

  let producer = null
  let consumer = null

  if (dev === 'tcp') {
    producer = {
      roomId: 'dev-tcp',
      forceTcp: true,
    }
    consumer = {
      roomId: 'dev-tcp',
      forceTcp: true,
    }
  } else if (dev === 'vp9') {
    producer = {
      roomId: 'dev-vp9',
      forceVP9: true,
      numSimulcastStreams: 3,
      webcamScalabilityMode: 'L1T3',
    }
    consumer = {
      roomId: 'dev-vp9',
      forceVP9: true,
    }
  } else if (dev === 'h264') {
    producer = {
      roomId: 'dev-h264',
      forceH264: true,
    }
    consumer = {
      roomId: 'dev-h264',
      forceH264: true,
    }
  }

  const qProducer = qs.stringify({
    ...default_,
    ...defaultProducer,
    ...producer,
  })
  open(qProducer)

  const qConsumer = qs.stringify({
    ...default_,
    ...defaultConsumer,
    ...consumer,
  })
  open(qConsumer)
}

function open(query: string) {
  const url = `http://${host}:${port}/?${query}`
  openBrowser(url)
}
