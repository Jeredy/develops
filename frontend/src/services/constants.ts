const urlEnvironment = {
  development: process.env.NEXT_PUBLIC_BASE_URL_DEVELOPMENTE,
  production: process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION,
};

export const baseUrl: string = 
  process.env.NODE_ENV === 'production'
    ? urlEnvironment.production ?? ''
    : urlEnvironment.development ?? '';

if (!baseUrl) {
  console.error('Base URL is not defined. Check your environment variables.');
}