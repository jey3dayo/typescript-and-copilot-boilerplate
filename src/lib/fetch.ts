export default (...args: any) => import('node-fetch').then(({ default: fetch }) => fetch({ ...args }));
