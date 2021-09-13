(function () {
  var MM_FUNCS = {
    // 将 li 节点转换为 JSON 数据
    li2jsonData: function(liNode) {
      let liData;
      const aNodes = liNode.querySelectorAll(':scope > a');
      if (aNodes.length !== 0) {
        liData = {
          "data": {
            "text": aNodes[0].text,
            "hyperlink": aNodes[0].href
          }
        };
      } else {
        liData = {
          "data": {
            "text": liNode.childNodes[0].nodeValue.trim()
          }
        };
      }
      
      const childLiNodes = liNode.querySelectorAll(':scope > ul > li');
      for (let i=0; i<childLiNodes.length; i++) {
        if (!liData.hasOwnProperty("children")) {
          liData.children = [];
        }
        liData.children.push(MM_FUNCS.li2jsonData(childLiNodes[i]));
      }
      
      return liData;
    },
    // 绘制脑图
    drawMindMap: function(ulParent) {
      const ulElements = ulParent.querySelectorAll(':scope > ul');
      const ulElement = ulElements.length ? ulElements[0] : null;
      if (!ulElement) {
        return;
      }
  
      const mmData = {"root": {}};
      const minder = new kityminder.Minder({
        renderTo: ulParent
      });
      
      mmData.root = MM_FUNCS.li2jsonData(ulElement.getElementsByTagName('li')[0]);
      minder.importData('json', JSON.stringify(mmData));
      minder.disable();
      minder.execCommand('hand');

      ulElement.style.display = 'none';
      ulElement.style.visibility = 'hidden';
    }
  };

  const mindMapElements = document.getElementsByClassName('mindmap');
  for (let i=0; i< mindMapElements.length; i++) {
    MM_FUNCS.drawMindMap(mindMapElements[i]);
  }
})();