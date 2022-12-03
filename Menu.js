class Menu {
    constructor() {
 
      this.menuButton = createButton("");

    }

    

handleElements() {
   
        this.menuButton.class("menuButton");
        this.menuButton.position( 100, 50);
    
        
      }

play (){

        this.handleElements();
        this.handlemenuButton();
      
}

      handlemenuButton() {
        this.menuButton.mousePressed(() => {
          menu = createSprite(displayWidth/2-70,displayHeight/2-200,40,40);
          menu.addAnimation("menu",menuImage);
          menu.scale = 3
          // this.showMenu();

            
                 
        });
      }
      showMenu() {
        swal({
          title: `¡Menu!`,
          imageUrl:
           "https://www.tu-web.com.mx/images/blanca.jpg",
           imageSize: "400x400",  
          confirmButtonText: "Ok"
        });
      }
     
    
}