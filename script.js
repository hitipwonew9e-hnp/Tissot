
  let zminna1 = {
    data() {
        return {
          imgArr1: [
            { name: 'Tissot Chrono XL T116.1.jpg', title: 'фото 1' },
            { name: 'Tissot Chrono XL T116.2.jpg', title: 'фото 2' },
            { name: 'Tissot Chrono XL T116.3.jpg', title: 'фото 3' },
            { name: 'Tissot Chrono XL T116.4.jpg', title: 'фото 3' },
           
        ],
            i1: 0,


        }
    },
    methods: {
        next() {
          this.i1++
         if( this.i1 > this.imgArr1.length-1){
            this.i1=0
         }
        },
        prev() {
           this.i1--
            if (this.i1 < 0) {
                this.i1 = this.imgArr1.length-1;
            }
        }
    },
}
Vue.createApp(zminna1).mount('.my-slider1')


let zminna2 = {
  data() {
      return {
        imgArr2: [
          { name: 'Tissot Couturier Chronograph T035.1.jpg', title: 'фото 1' },
          { name: 'Tissot Couturier Chronograph T035.2.jpg', title: 'фото 2' },
          { name: 'Tissot Couturier Chronograph T035.3.jpg', title: 'фото 3' },
          { name: 'Tissot Couturier Chronograph T035.4.jpg', title: 'фото 4' },
          { name: 'Tissot Couturier Chronograph T035.5.jpg', title: 'фото 5' },
       
      ],
          i2: 0,


      }
  },
  methods: {
      next() {
        this.i2++
       if( this.i2 > this.imgArr2.length-1){
          this.i2=0
       }
      },
      prev() {
         this.i2--
          if (this.i2 < 0) {
              this.i2 = this.imgArr2.length-1;
          }
      }
  },
}
Vue.createApp(zminna2).mount('.my-slider2')


let zminna3 = {
    data() {
        return {
          imgArr3: [
            { name: 'Tissot Couturier T035.1.jpg', title: 'фото 1' },
            { name: 'Tissot Couturier T035.2.jpg', title: 'фото 2' },
          

        ],
            i3: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i3++
         if( this.i3 > this.imgArr3.length-1){
            this.i3=0
         }
        },
        prev() {
           this.i3--
            if (this.i3 < 0) {
                this.i3 = this.imgArr3.length-1;
            }
        }
    },
}
Vue.createApp(zminna3).mount('.my-slider3')


let zminna4 = {
    data() {
        return {
          imgArr4: [
{ name: 'Tissot Luxury Automatic T086.1.jpg', title: 'фото 1' },
{ name: 'Tissot Luxury Automatic T086.2.jpg', title: 'фото 2' },
{ name: 'Tissot Luxury Automatic T086.3.jpg', title: 'фото 3' },
          

        ],
            i4: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i4++
         if( this.i4 > this.imgArr4.length-1){
            this.i4=0
         }
        },
        prev() {
           this.i4--
            if (this.i4 < 0) {
                this.i4 = this.imgArr4.length-1;
            }
        }
    },
}
Vue.createApp(zminna4).mount('.my-slider4')


let zminna5 = {
      data() {
          return {
            imgArr5: [
                { name: 'Tissot Seastar 1000 Quartz Chronograph.1.jpg', title: 'фото 1' },
                { name: 'Tissot Seastar 1000 Quartz Chronograph.2.jpg', title: 'фото 2' },
                { name: 'Tissot Seastar 1000 Quartz Chronograph.3.jpg', title: 'фото 3' },
                { name: 'Tissot Seastar 1000 Quartz Chronograph.4.jpg', title: 'фото 4' },
  
          ],
              i5: 0,
    
    
          }
      },
      methods: {
          next() {
            this.i5++
           if( this.i5 > this.imgArr5.length-1){
              this.i5=0
           }
          },
          prev() {
             this.i5--
              if (this.i5 < 0) {
                  this.i5 = this.imgArr5.length-1;
              }
          }
      },
}
Vue.createApp(zminna5).mount('.my-slider5')
  
  
let zminna6 = {
      data() {
          return {
            imgArr6: [
              { name: 'Tissot PRC 200 Chronograph T055.1.jpg', title: 'фото 1' },
              { name: 'Tissot PRC 200 Chronograph T055.2.jpg', title: 'фото 2' },
       
          ],
              i6: 0,
    
    
          }
      },
      methods: {
          next() {
            this.i6++
           if( this.i6 > this.imgArr6.length-1){
              this.i6=0
           }
          },
          prev() {
             this.i6--
              if (this.i6 < 0) {
                  this.i6 = this.imgArr6.length-1;
              }
          }
      },
}
Vue.createApp(zminna6).mount('.my-slider6')

let zminna7 = {
        data() {
            return {
              imgArr7: [
             
                { name: 'Tissot PR 100 Sport Chic T101.1.jpg', title: 'фото 1' },
                { name: 'Tissot PR 100 Sport Chic T101.2.jpg', title: 'фото 2' },
                { name: 'Tissot PR 100 Sport Chic T101.3.jpg', title: 'фото 3' },
                { name: 'Tissot PR 100 Sport Chic T101.4.jpg', title: 'фото 4' },
                { name: 'Tissot PR 100 Sport Chic T101.5.jpg', title: 'фото 5' },
            ],
                i7: 0,
      
      
            }
        },
        methods: {
            next() {
              this.i7++
             if( this.i7 > this.imgArr7.length-1){
                this.i7=0
             }
            },
            prev() {
               this.i7--
                if (this.i7 < 0) {
                    this.i7 = this.imgArr7.length-1;
                }
            }
        },
}
Vue.createApp(zminna7).mount('.my-slider7')

let zminna8 = {
    data() {
        return {
          imgArr8: [
            { name: 'Tissot Tradition 5.5 T063.1.jpg', title: 'фото 1' },
            { name: 'Tissot Tradition 5.5 T063.2.jpg', title: 'фото 2' },
            { name: 'Tissot Tradition 5.5 T063.3.jpg', title: 'фото 3' },
           
        ],
            i8: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i8++
         if( this.i8 > this.imgArr8.length-1){
            this.i8=0
         }
        },
        prev() {
           this.i8--
            if (this.i8 < 0) {
                this.i8 = this.imgArr8.length-1;
            }
        }
    },
}
Vue.createApp(zminna8).mount('.my-slider8')

let zminna9 = {
    data() {
        return {
          imgArr9: [
            { name: 'Tissot Tradition Powermatic 80 Open Heart T063.1.jpg', title: 'фото 1' },
            { name: 'Tissot Tradition Powermatic 80 Open Heart T063.2.jpg', title: 'фото 2' },
            { name: 'Tissot Tradition Powermatic 80 Open Heart T063.3.jpg', title: 'фото 3' },
            { name: 'Tissot Tradition Powermatic 80 Open Heart T063.4.jpg', title: 'фото 4' },

           
        ],
            i9: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i9++
         if( this.i9 > this.imgArr9.length-1){
            this.i9=0
         }
        },
        prev() {
           this.i9--
            if (this.i9 < 0) {
                this.i9 = this.imgArr9.length-1;
            }
        }
    },
}
Vue.createApp(zminna9).mount('.my-slider9')

let zminna10 = {
    data() {
        return {
          imgArr10: [
            { name: 'Tissot Tradition T063.1.jpg', title: 'фото 1' },
            { name: 'Tissot Tradition T063.2.jpg', title: 'фото 2' },
    
        ],
            i10: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i10++
         if( this.i10 > this.imgArr10.length-1){
            this.i10=0
         }
        },
        prev() {
           this.i10--
            if (this.i10 < 0) {
                this.i10 = this.imgArr10.length-1;
            }
        }
    },
}
Vue.createApp(zminna10).mount('.my-slider10')

$(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });

    function myFunction() {
        var x = document.getElementById("container-md");
        if (x.style.display === "block")  {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      } 


      function myFunction2() {
        var button = document.getElementById("show-more-btn");
      
        if (button.innerText === "Показати більше") {
          button.innerText = "Приховати";
        } else {
          button.innerText = "Показати більше";
        }
      }





