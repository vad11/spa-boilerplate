import Core from '../core';

export default Core.getClassListMap(require.context('./'), /store.js/i);