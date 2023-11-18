const insert = document.getElementById("insert");

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <div class="color">
    <table>
    <tr class="head">
      <th class = "keyss">key</th>
      <th class ='keycode'>key-code</th>
      <th class="code">code</th>
    </tr>
    <tr>
      <td>${e.key===' ' ? 'space': e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table> 
    </div>
    `;
});

