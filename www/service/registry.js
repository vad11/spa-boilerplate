import Core from '../core';

export default Core.getClassList(require.context('./'), /service.js/i);