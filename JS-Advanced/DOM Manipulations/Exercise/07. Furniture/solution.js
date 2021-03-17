function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('#exercise button')
  const [generateArea, buyArea] = document.querySelectorAll('#exercise textarea');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  const tbody = document.querySelector('tbody');

  function generate(e) {
    let generateInput = generateArea.value;
    generateInput = JSON.parse(generateInput);

    for (const product of generateInput) {

      //const newTr = document.createElement('tr');
      //newTr.innerHTML = `<td><img src=${product.img}></td><td><p>${product.name}</p><td><p>${product.price}</p></td><td><p>${product.decFactor}</p></td><td><input type="checkbox" /></td>` 
      const newProduct = el('tr',[
        el('td', [el('img', '', { src: product.img })]),
        el('td', [el('p', product.name)]),
        el('td', [el('p', product.price)]),
        el('td', [el('p', product.decFactor)]),
        el('td', [el('input', '', { type: 'checkbox' })])
      ])
      tbody.appendChild(newProduct);
    }
  }

  function buy() {
    const allProducts = Array.from(tbody.querySelectorAll('input'));
    const checked = allProducts.filter(i => i.checked)
      .map(i => i.parentNode.parentNode)
      .map(row => {
        return {
          name: row.children[1].textContent.trim(),
          price: Number(row.children[2].textContent),
          decFactor: Number(row.children[3].textContent),
        }
      })

    const output = [
      `Bought furniture: ${checked.map(item => item.name).join(', ')}`,
      `Total price: ${(checked.reduce((acc, cur) => acc + cur.price, 0)).toFixed(2)}`,
      `Average decoration factor: ${(checked.reduce((acc, cur) => acc + cur.decFactor, 0) / checked.length)}`,
    ]

    buyArea.textContent = output.join('\n')

    console.log(checked);
  }
  function el(type, content, attributes) {
    const result = document.createElement(type);

    if (attributes !== undefined) {
      Object.assign(result, attributes);
    }

    if (Array.isArray(content)) {
      content.forEach(append);
    } else {
      append(content);
    }

    function append(node) {
      if (typeof node === 'string') {
        node = document.createTextNode(node);
      }

      result.appendChild(node);
    }

    return result
  }

}