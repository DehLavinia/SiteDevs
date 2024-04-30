const teste = document.querySelector('#produtos_drop');
const menu = document.querySelector('#dropdown');

teste.addEventListener('mouseenter', ()=> {
    menu.classList.add('active')
})


teste.addEventListener('mouseleave', ()=> {
    menu.classList.remove('active')
})


//click, mouseover, mouseleave, mouseenter etc...

const faleConosco = document.querySelector('#contatos_drop');
const contatos = document.querySelector('#comunicacao');

faleConosco.addEventListener('mouseenter', ()=> {
    contatos.classList.add('active')
})


faleConosco.addEventListener('mouseleave', ()=> {
    contatos.classList.remove('active')
})

// ATENÇÃO USAR NO MINIMO 4 BANNERS!!!
 class SliderProduct {
    constructor(nextButton, backButton, sliderItems) {
      this.nextButton = document.querySelector(nextButton);
      this.backButton = document.querySelector(backButton);
      this.sliderItems = document.querySelectorAll(sliderItems);
      this.currentBanner = 0;
      this.nextBanner = 1;
      this.previousBanner = this.sliderItems.length - 1;
      this.lastBanner = this.sliderItems.length - 2;
      this.trocarBanner = 0;
  
      this.setupEventListeners();
      this.updateBannerClasses();
      this.trocarAuto();
  
      
    }
  
    setupEventListeners() {
      this.nextButton.addEventListener("click", () => this.changeBanner(1));
      this.backButton.addEventListener("click", () => this.changeBanner(-1));
    }
  
    changeBanner(direction) {
      this.currentBanner += direction;
      this.nextBanner += direction;
      this.previousBanner += direction;
      this.lastBanner += direction;
  
      this.trocarBanner = 0;
  
      if (this.currentBanner >= this.sliderItems.length) {
        this.currentBanner = 0;
      } else if (this.currentBanner < 0) {
        this.currentBanner = this.sliderItems.length - 1;
      }
  
      if (this.nextBanner >= this.sliderItems.length) {
        this.nextBanner = 0;
      } else if (this.nextBanner < 0) {
        this.nextBanner = this.sliderItems.length - 1;
      }
  
      if (this.previousBanner >= this.sliderItems.length) {
        this.previousBanner = 0;
      } else if (this.previousBanner < 0) {
        this.previousBanner = this.sliderItems.length - 1;
      }
  
      if (this.lastBanner >= this.sliderItems.length) {
        this.lastBanner = 0;
      } else if (this.lastBanner < 0) {
        this.lastBanner = this.sliderItems.length - 1;
      }
  
      this.updateBannerClasses();
    }
  
    updateBannerClasses() {
      this.sliderItems.forEach((item, index) => {
        item.classList.remove(
          "banner_ativo",
          "proximoBanner",
          "bannerAnterior",
          "last_banner"
        );
  
        if (index === this.currentBanner) {
          item.classList.add("banner_ativo");
          item.style.transform = "translateX(0)";
          item.style.opacity = "1";
        } else if (index === this.nextBanner) {
          item.classList.add("proximoBanner");
          item.style.transform = "translateX(100vw)";
        } else if (index === this.previousBanner) {
          item.classList.add("bannerAnterior");
          item.style.transform = "translateX(-100vw)";
        } else if (this.sliderItems.length > 2 && index === this.lastBanner) {
          item.classList.add("last_banner");
          item.style.transform = "translateX(200vw)";
          item.style.opacity = "0";
        }
      });
    }
  
    trocarAuto() {
      setInterval(() => {
        this.trocarBanner++;
        if (this.trocarBanner == 8) {
          this.nextButton.click();
          this.trocarBanner = 0;
        }
      }, 1000);
    }
  }

  const Banner = new SliderProduct(".nextButtonBanner", ".backButtonBanner", ".slider_item")

  //MODAL 
  const buttonCarrinho = document.getElementById('iconeCarrinho');
  const modalCarrinho = document.querySelector('.modalCarrinho');
  const transparencia = document.querySelector('.transparencia');
  const buttonCloseCarrinho = document.getElementById('closeModalCarrinho')

  buttonCarrinho.addEventListener('click', ()=>{
    modalCarrinho.classList.add('modalCarrinhoActive')
    transparencia.classList.add('transparenciaActive')
  })

  buttonCloseCarrinho.addEventListener('click', ()=>{
    modalCarrinho.classList.remove('modalCarrinhoActive')
    transparencia.classList.remove('transparenciaActive')
  })

  produtosCarrinho = [
    {
      produto: {
        codigo: 'calcinha',
        cor: 'vermelha', 
        tamanho: 'p'
      }
    }
  ]




  