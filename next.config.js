module.exports = {
    basePath: '/corsarios',
    swcMinify: true,
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            buffer: false,
        };
        return config;
    }    
}