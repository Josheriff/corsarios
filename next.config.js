module.exports = {
    basePath: '/corsarios',
    swcMinify: true,
    async redirects() {
        return ([
          {
            source: '/',
            destination: '/corsarios',
            permanent: true,
            basePath: false,
          },
        ]);
      },
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            buffer: false,
        };
        return config;        
    }        
}