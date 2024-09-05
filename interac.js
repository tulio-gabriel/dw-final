function clicando(){
    let nick=document.getElementById('nomeusu')
    let novonick=document.getElementById('txtnome').value
    nick.innerHTML=novonick
}
function funclog(){
    let no=document.getElementById('nomel').value
    let sen=document.getElementById('senhal').value
    if(sen.length < 3){
        window.alert=('preencha corretamente')
    }else{
        window.location.href=("http://127.0.0.1:5500/trabalho2.html")
    }
}
function menuclic(){
    let mens=document.getElementById('menus')
    let me=document.getElementById('men')
    if(me.style.display=='none'){
        me.style.display='block'
        mens.style.backgroundColor='lightwhite'
        mens.style.borderRadius='10px'
        mens.style.borderStyle='solid'
        mens.style.borderColor='black'
        mens.style.borderWidth='2px'
    }else{
        me.style.display='none'
        mens.style.backgroundColor=''
        mens.style.borderStyle='solid'
        mens.style.borderColor='black'
        mens.style.borderWidth='0px'
    }
}
function funccompra(){
    let cp=document.getElementById('cpf').value
    if (cp.length==11){
        window.location.href=('http://127.0.0.1:5500/fim.html')
    }else{
        window.alert('dados incorretos')
    }
}