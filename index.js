const h1=document.getElementById("h1")
const h2=document.getElementById("h2")
const h3=document.getElementById("h3")
const h4=document.getElementById("h4")
const h5=document.getElementById("h5")
const h6=document.getElementById("h6")
const h7=document.getElementById("h7")
const h8=document.getElementById("h8")
const h9=document.getElementById("h9")
const h10=document.getElementById("h10")
const h11=document.getElementById("h11")
const h12=document.getElementById("h12")
const h13=document.getElementById("h13")
const h14=document.getElementById("h14")
const h15=document.getElementById("h15")
const h16=document.getElementById("h16")
const h17=document.getElementById("h17")
const h18=document.getElementById("h18")
const h19=document.getElementById("h19")
const h20=document.getElementById("h20")
const h21=document.getElementById("h21")
const h22=document.getElementById("h22")
const h23=document.getElementById("h23")
const h24=document.getElementById("h24")
const h25=document.getElementById("h25")
const h26=document.getElementById("h26")
const h27=document.getElementById("h27")
const h28=document.getElementById("h28")
const h29=document.getElementById("h29")
const h30=document.getElementById("h30")
const h31=document.getElementById("h31")
const h32=document.getElementById("h32")
const h33=document.getElementById("h33")
const h34=document.getElementById("h34")
const h35=document.getElementById("h35")
const h36=document.getElementById("h36")
const h37=document.getElementById("h37")
const h38=document.getElementById("h38")
const h39=document.getElementById("h39")
const h40=document.getElementById("h40")
const d1=document.getElementById("img1")
const d2=document.getElementById("img2")
const d3=document.getElementById("img3")
const d4=document.getElementById("img4")
const d5=document.getElementById("img5")
const d6=document.getElementById("img6")
const d7=document.getElementById("img7")
const d8=document.getElementById("img8")
const d9=document.getElementById("img9")
const d10=document.getElementById("img10")
const d11=document.getElementById("img11")
const d12=document.getElementById("img12")
const d13=document.getElementById("img13")
const d14=document.getElementById("img14")
const d15=document.getElementById("img15")
const d16=document.getElementById("img16")
const d17=document.getElementById("img17")
const d18=document.getElementById("img18")
const d19=document.getElementById("img19")
const d20=document.getElementById("img20")








const news= async ()=>{

    const url=`https://newsdata.io/api/1/latest?country=bd&category=top&apikey=pub_53420b8781b78843b8d1119ddf13273dde687`

   const newsfetch= await fetch(`${url}`)
    .then(res=>res.json())
console.log(newsfetch)

d1.innerHTML=`<img src= ${newsfetch.results[0].image_url} width=480 height=260  alt="Image not available";>`
d1.style.textAlign="center"

h1.innerHTML=newsfetch.results[0].title
h2.innerHTML=`<a href=${newsfetch.results[0].link} title="সম্পূর্ণ খবর" >সম্পূর্ণ খবর >>  </a>`


d2.innerHTML=`<img src= ${newsfetch.results[1].image_url} width=480 height=260  alt="Image not available";>`

d2.style.textAlign="center"

h3.innerHTML=newsfetch.results[1].title
h4.innerHTML=`<a href=${newsfetch.results[1].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`


d3.innerHTML=`<img src= ${newsfetch.results[2].image_url} width=480 height=260  alt="Image not available";>`

d3.style.textAlign="center"

h5.innerHTML=newsfetch.results[2].title
h6.innerHTML=`<a href=${newsfetch.results[2].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d4.innerHTML=`<img src= ${newsfetch.results[3].image_url} width=480 height=260  alt="Image not available";>`

d4.style.textAlign="center"

h7.innerHTML=newsfetch.results[3].title
h8.innerHTML=`<a href=${newsfetch.results[3].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`


d5.innerHTML=`<img src= ${newsfetch.results[4].image_url} width=480 height=260  alt="Image not available";>`

d5.style.textAlign="center"

h9.innerHTML=newsfetch.results[4].title
h10.innerHTML=`<a href=${newsfetch.results[4].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d6.innerHTML=`<img src= ${newsfetch.results[5].image_url} width=480 height=260  alt="Image not available";>`

d6.style.textAlign="center"

h11.innerHTML=newsfetch.results[5].title
h12.innerHTML=`<a href=${newsfetch.results[5].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`


d7.innerHTML=`<img src= ${newsfetch.results[6].image_url} width=480 height=260  alt="Image not available";>`

d7.style.textAlign="center"

h13.innerHTML=newsfetch.results[6].title
h14.innerHTML=`<a href=${newsfetch.results[6].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d8.innerHTML=`<img src= ${newsfetch.results[7].image_url} width=480 height=260  alt="Image not available";>`

d8.style.textAlign="center"

h15.innerHTML=newsfetch.results[7].title
h16.innerHTML=`<a href=${newsfetch.results[7].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d9.innerHTML=`<img src= ${newsfetch.results[8].image_url} width=480 height=260  alt="Image not available";>`

d9.style.textAlign="center"

h17.innerHTML=newsfetch.results[8].title
h18.innerHTML=`<a href=${newsfetch.results[8].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d10.innerHTML=`<img src= ${newsfetch.results[9].image_url} width=480 height=260  alt="Image not available";>`

d10.style.textAlign="center"

h19.innerHTML=newsfetch.results[9].title
h20.innerHTML=`<a href=${newsfetch.results[9].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`



}
news()

const news1= async ()=>{


    const url1=`https://newsdata.io/api/1/latest?country=bd&category=sports&apikey=pub_53420b8781b78843b8d1119ddf13273dde687`

   const newsfetch= await fetch(`${url1}`)
    .then(res=>res.json())
console.log(newsfetch)

d11.innerHTML=`<img src= ${newsfetch.results[0].image_url} width=480 height=260  alt="Image not available";>`
d11.style.textAlign="center"

h21.innerHTML=newsfetch.results[0].title
h22.innerHTML=`<a href=${newsfetch.results[0].link} title="সম্পূর্ণ খবর" >সম্পূর্ণ খবর >>  </a>`


d12.innerHTML=`<img src= ${newsfetch.results[1].image_url} width=480 height=260  alt="Image not available";>`

d12.style.textAlign="center"

h23.innerHTML=newsfetch.results[1].title
h24.innerHTML=`<a href=${newsfetch.results[1].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`


d13.innerHTML=`<img src= ${newsfetch.results[2].image_url} width=480 height=260  alt="Image not available";>`

d13.style.textAlign="center"

h25.innerHTML=newsfetch.results[2].title
h26.innerHTML=`<a href=${newsfetch.results[2].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d14.innerHTML=`<img src= ${newsfetch.results[3].image_url} width=480 height=260  alt="Image not available";>`

d14.style.textAlign="center"

h27.innerHTML=newsfetch.results[3].title
h28.innerHTML=`<a href=${newsfetch.results[3].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`


d15.innerHTML=`<img src= ${newsfetch.results[4].image_url} width=480 height=260  alt="Image not available";>`

d15.style.textAlign="center"

h29.innerHTML=newsfetch.results[4].title
h30.innerHTML=`<a href=${newsfetch.results[4].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d16.innerHTML=`<img src= ${newsfetch.results[5].image_url} width=480 height=260  alt="Image not available";>`

d16.style.textAlign="center"

h31.innerHTML=newsfetch.results[5].title
h32.innerHTML=`<a href=${newsfetch.results[5].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`


d17.innerHTML=`<img src= ${newsfetch.results[6].image_url} width=480 height=260  alt="Image not available";>`

d17.style.textAlign="center"

h33.innerHTML=newsfetch.results[6].title
h34.innerHTML=`<a href=${newsfetch.results[6].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d18.innerHTML=`<img src= ${newsfetch.results[7].image_url} width=480 height=260  alt="Image not available";>`

d18.style.textAlign="center"

h35.innerHTML=newsfetch.results[7].title
h36.innerHTML=`<a href=${newsfetch.results[7].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d19.innerHTML=`<img src= ${newsfetch.results[8].image_url} width=480 height=260  alt="Image not available";>`

d19.style.textAlign="center"

h37.innerHTML=newsfetch.results[8].title
h38.innerHTML=`<a href=${newsfetch.results[8].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`

d20.innerHTML=`<img src= ${newsfetch.results[9].image_url} width=480 height=260  alt="Image not available";>`

d20.style.textAlign="center"

h39.innerHTML=newsfetch.results[9].title
h40.innerHTML=`<a href=${newsfetch.results[9].link} title="সম্পূর্ণ খবর">সম্পূর্ণ খবর >>  </a>`


}
news1()