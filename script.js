
function mobileMenu() {
    if (document.getElementById('active-tgl').style.display =='block'){
      document.getElementById('active-tgl').style.display = 'none';
    } else{
      document. getElementById('active-tgl').style.display ='block'; 
    }
  }
  
   
  
document.getElementById('box').addEventListener('click',mobileMenu);
