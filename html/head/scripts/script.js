// 创建'list','p'元素，并初始化变量list,info
const list = document.createElement('ul');
const info = document.createElement('p');
//寻找html元素，找到的值放入变量html中
const html = document.querySelector('html');
//在变量info中添加字段，并放入p元素中
info.textContent = '下面是一个动态列表。单击页面上的任意位置以添加新的列表项。单击现有列表项将其文本更改为其他内容.';
//定义子节点
document.body.appendChild(info);
document.body.appendChild(list);
//父元素html中监听
html.onclick = function() {
  //创建'li'元素，并初始化listItem列表
  const listItem = document.createElement('li');
  //初始化listContent变量，并弹出弹窗询问
  const listContent = prompt('您希望列表包含哪些内容');
  //将弹窗询问到的东西放入列表中
  listItem.textContent = listContent;
  //在子节点列表的末尾添加新的子节点
  list.appendChild(listItem);
  //子元素列表监听
  listItem.onclick = function(e) {
    //防止调用相同时间的传播（传播包括向上冒泡到父元素，向下捕获到子元素）
    e.stopPropagation();
    //再次点击则弹出修改提示
    const listContent = prompt('为列表项输入新内容');
    this.textContent = listContent;
  }
}