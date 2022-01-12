var util = require('hexo-util')
var version = require('./package.json').version

hexo.extend.filter.register('after_post_render', function(data) {
  var htmlTags = ''

  // kity.js
  htmlTags = htmlTags + util.htmlTag('script', {
    type: 'text/javascript',
    src: 'https://unpkg.com/kity@2.0.4/dist/kity.min.js'
  }, '')

  // kityminder-core.js
  htmlTags = htmlTags + util.htmlTag('script', {
    type: 'text/javascript',
    src: 'https://unpkg.com/kityminder-core@1.4.50/dist/kityminder.core.min.js'
  }, '')

  // mindmap.js
  htmlTags = htmlTags + util.htmlTag('script', {
	defer: 'true',
    type: 'text/javascript',
    src: 'https://unpkg.com/hexo-simple-mindmap@' + version + '/dist/mindmap.min.js'
  }, '')

  // mindmap.css
  htmlTags = htmlTags + util.htmlTag('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://unpkg.com/hexo-simple-mindmap@' + version + '/dist/mindmap.min.css'
  })

  data.content = data.content + htmlTags

  return data
});