import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-accordion-datetime-bug',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://127.0.0.1:8080',
    cleartext: true,
  },
};

export default config;
