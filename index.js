const config = require('./config');
const { info, error, trace } = require('./libs/logger');
const { render } = require('./libs/renderer');

trace();
info(config.site.name, 'by', config.site.author);
render().catch(error);
