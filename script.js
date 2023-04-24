
let root = null;



function Node(user, email, passwordhash, birthdate) {
    this.left = null;
    this.right = null;
    this.user = user;
    this.email = email;
    this.passwordhash = passwordhash;
    this.birthdate = birthdate;
  }
  
  
  function hashPassword(password) {
    const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
  }
  
  
  function inorder(node) {
    if (node == null) {
      return;
    }
    inorder(node.left);
    console.log(node.user, node.email, node.passwordhash, node.birthdate);
    inorder(node.right);
  }
  
  
  function preorder(node) {
    if (node == null) {
      return;
    }
    console.log(node.user, node.email, node.passwordhash, node.birthdate);
    preorder(node.left);
    preorder(node.right);
  }
  
  
  function posorder(node) {
    if (node == null) {
      return;
    }
    posorder(node.left);
    posorder(node.right);
    console.log(node.user, node.email, node.passwordhash, node.birthdate);
  }
  
  
  function insert(node, user, email, password, birthdate) {
    if (node == null) {
      return;
    }
  
    const passwordhash = hashPassword(password);
  
    if (user > node.user) {
      if (node.right == null) {
        node.right = new Node(user, email, passwordhash, birthdate);
      } else {
        insert(node.right, user, email, passwordhash, birthdate);
      }
    } else {
      if (node.left == null) {
        node.left = new Node(user, email, passwordhash, birthdate);
      } else {
        insert(node.left, user, email, passwordhash, birthdate);
      }
    }
  }
  


  function find(node, user, email, password) {
    if (!node) {
      return null;
    }

    const passwordhash = hashPassword(password)
  
    if (node.user === user && node.email === email && node.passwordhash === passwordhash) {
      return node;
    }
  
    if (user < node.user || (user === node.user && email < node.email) || (user === node.user && email === node.email && passwordhash < node.passwordhash)) {
      return find(node.left, user, email, passwordhash);
    }
    return find(node.right, user, email, passwordhash);
  }
  
  
  function handleInsert() {
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordhash = hashPassword(password);
    const birthdate = document.getElementById('birthdate').value;
    


    insert(root, user, email, passwordhash, birthdate);
    console.log('Se ha insertado el nodo:');
    document.getElementById("letrero").innerHTML =  "Se ha insertado el nodo:";
    console.log(find(root, user, email, password));
  }
  

  function handleFind(node) {
    const user = document.getElementById('searchUser').value;
    const email = document.getElementById('searchEmail').value;
    const password = document.getElementById('searchPassword').value;
  
    const result = find(root, user, email, password);
    if (result) {
      console.log('Se ha encontrado el nodo:');
      document.getElementById("letrero").innerHTML =  "Se ha encontrado el nodo:";
      console.log(node.user, node.email, node.passwordhash, node.birthdate);
      document.getElementById("letrero").innerHTML =  result;
    } else {
      console.log('No se ha encontrado el nodo');
      document.getElementById("letrero").innerHTML =  "No se ha encontrado el nodo:";    
    }
  }
  
  


function nuevo() {
  location.reload();
  document.getElementById("letrero").innerHTML =  "se actualizo la pagina";
}

  function inOrder()
  {
    document.getElementById("boton-inOrder").addEventListener("click", inOrderAccion);
  }
  
