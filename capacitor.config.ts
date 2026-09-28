import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.hemphill.ohhellscorekeeper',
  appName: 'Oh Hell Scorekeeper',
  webDir: 'out',
  ios: {
    backgroundColor: '#02040b',
  },
  plugins: {
    StatusBar: {
      style: 'DARK',
      overlaysWebView: true,
    },
  },
}

export default config
