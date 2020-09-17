const ACTIVE_DEBUG = false;
const ACTIVE_INFO = false;

export const info = (msg) => {
  if (ACTIVE_INFO) console.log(`info: ${msg}`);
};
export const debbug = (msg) => {
  if (ACTIVE_DEBUG) console.log(`debbug: ${msg}`);
};

export default { debbug, info };
