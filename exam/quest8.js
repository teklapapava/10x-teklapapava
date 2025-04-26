let retryCount = 2;
const maxRetries = 5;
const status = retryCount < maxRetries ? "Continue" : "stop";

console.log(`Status: ${status}`);
