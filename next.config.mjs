import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        // You can add SVGR options here if needed
                    },
                },
            ],
        });
        return config;
    },
    images: {
        domains: ['i.imgur.com'],
    },
    compiler: {
        styledComponents: true
    },
};

export default withNextIntl(nextConfig);
