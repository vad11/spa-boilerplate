import Core from '../core';

export default Core.getClassList(require.context('./'), /module.js/i);