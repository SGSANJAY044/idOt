const allporoject=document.querySelector('#allproject')
const API = axios.create({baseURL:'http://localhost:5000/api/user'})
let Data;
const getData = async (url) => {
try {
const response = await API.get(url);
// console.log(response.data)
return (response.data)
}
catch (error) {
console.log(error);
}
}
getData('/')
.then(data=>{
    data.forEach(element => {
        const div=document.createElement('div');
        div.className="col-xl-6 col-lg-12";
div.innerHTML=`
<div class="row">
    <div class=" col-xl-12 col-lg-12">
        <div class="tp-project-box-sm d-flex align-items-center mb-20">
            <div class="tp-project-sm-img fix ml-25 mr-35">
                <img src="assets/img/project/app-2.jpg" alt="">
            </div>
            <div class="tp-project-sm-content">
                <h3 class="pro-sm-title"><a href="portfolio-details.html">${element.title}</a></h3>
                <p>${element.disp}</p>
                <a class="tp-btn-white-sm" href="portfolio-details.html">Case Studies <i
      class="far fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
`;
allporoject.append(div);
    });
})