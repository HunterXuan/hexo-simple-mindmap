var util = require('hexo-util')
var version = '0.1.0'

hexo.extend.filter.register('after_post_render', function(data) {
  var htmlTags = ''

  // kity.js
  htmlTags = htmlTags + util.htmlTag('script', {
    type: 'text/javascript',
    href: 'https://cdn.jsdelivr.net/npm/kity@2.0.4/dist/kity.min.js'
  })

  // kityminder-core.js
  htmlTags = htmlTags + util.htmlTag('script', {
    type: 'text/javascript',
    href: 'https://cdn.jsdelivr.net/npm/kityminder-core@1.4.50/dist/kityminder.core.min.js'
  })
  
  // mindmap.js
  htmlTags = htmlTags + util.htmlTag('script', {
    type: 'text/javascript',
    src: 'https://cdn.jsdelivr.net/npm/hexo-simple-mindmap@' + version + '/dist/mindmap.min.js'
  })

  // mindmap.css
  htmlTags = htmlTags + util.htmlTag('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://cdn.jsdelivr.net/npm/hexo-simple-mindmap@' + version + '/dist/mindmap.min.css'
  })

  data.content = data.content + htmlTags

  return data
});