
let backendURL = "";
let environment = 'local';

const enum enumEnvironment {
  local = 'local',
  staging = 'staging',
  prodcution = 'production'
}

if (environment === enumEnvironment.local) {
  backendURL = `http://localhost:3002`;
  
} else if (environment === enumEnvironment.staging) {
  backendURL= `http://localhost:3000`;
}
export const BACKEND_API_URL=backendURL
