function extractMessage(data) {
  if (!data || typeof data !== "object" || !data.errors) return null;

  const [field] = Object.keys(data.errors);
  if (!field) return null;

  const detail = data.errors[field];
  const message = Array.isArray(detail) ? detail[0] : detail;

  return message ? `${field} ${message}` : null;
}

function errorHandler(error) {
  if (!error.response) {
    console.error(error);
    throw "Unable to connect to the server. Please try again.";
  }

  const { status, data } = error.response;

  throw extractMessage(data) || `Request failed with status ${status}`;
}

export default errorHandler;
