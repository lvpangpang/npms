var script = process.argv[2] || 'start';

require(`../scripts/${script}.js`)

bsvConf.babelPlugins || {}