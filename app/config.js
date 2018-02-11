export const loggerOptions = {
  // required ['debug', 'info', 'warn', 'error', 'fatal']
  logLevel: 'debug',
  stringifyArguments: true,
  showLogLevel: true,
  showMethodName: true,
  showConsoleColors: true,
};

export const headOptions = {
  title: {
    inner: 'Vue.js Boilerplate',
    complement: 'Homepage',
  },
  meta: [
    { name: 'application-name', content: 'Vue.js Boilerplate', id: 'appName' },
    { name: 'description', content: 'Vue.js Boilerplate', id: 'desc' },
  ],
  link: [
    { rel: 'canonical', href: 'http://example.com/', id: 'canonical' },
  ],
};
