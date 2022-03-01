/** @type {import('next').NextConfig} */

const { NODE_ENV: environment } = process.env;
let API_HOST = 'http://localhost:3000';

if(environment==='production'){
  API_HOST='http://google.com'
}

const nextConfig = {
  reactStrictMode: true,
  env: {
    'API_HOST': API_HOST
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome',
        permanent: true,
      },
      {
        source: '/myokr',
        destination: '/myokr/dashboard',
        permanent: true,
      },
    ]
  },

}
module.exports = nextConfig
