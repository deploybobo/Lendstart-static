const menuButton = document.querySelector("#mobile_menu_btn");
const menu = document.querySelector("#menu");
window.onresize = initMobile;
const defaultScore = 690;
var listdata;
var listdatab;
var client_ip = geoplugin_request()


function initMobile() {
  if (window.innerWidth < 1100) {
    menu.style.display = "none";
    document.querySelectorAll(".category").forEach((el) => {
      el.setAttribute("onclick", "return false;");
    });
  }else {
    menu.style.display = "flex";
  }
};

menuButton.addEventListener("click", () => {
  if (menu.style.display == "none") {
    menu.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    menu.style.display = "none";
    document.body.style.overflow = "visible";
  }
});


// list handler
// ============================

const brandlist = [
    {
        "brand_name": "AmeriSave Mortgage",
        "brand_id": "102547",
        "ribbonName": "Editor's Choice",
        "brand_logo": "https://assets.trafficpointltd.com/app/uploads/sites/136/2020/10/04115204/amerisave_horizontal_nmls_l.svg",
        "brand_selling_line": "Make Your Offer with Confidence",
        "selling_lines": "<ul>\n<li>Lock your rate for 90 days with ‘Lock &amp; Shop’</li>\n<li>&#8216;Certified Closing Promise’ &#8211; close your loan or get $1500</li>\n<li>Customized rate quote in &lt; 3 mins</li>\n</ul>\n",
        "pros_cons": "<div class=\"personal-loan personal-loan-pros\">\n<p><strong>Pros</strong></p>\n<ul>\n<li>Easy online application process</li>\n<li>Diverse loan options available</li>\n<li>Transparent information on their website</li>\n<li>3% minimum down payment available</li>\n<li>Accurate quotes, not estimates</li>\n</ul>\n</div>\n<div class=\"personal-loan personal-loan-cons\">\n<p><strong>Cons</strong></p>\n<ul>\n<li>$500 application fee</li>\n<li>Offers no program for first-time homebuyers</li>\n</ul>\n</div>\n",
        "key_facts": "<ul>\n<li>Mortgage types: Purchase, refinance, adjustable, fixed, jumbo, FHA, VA, and USD.</li>\n<li>Minimum credit score: 600.</li>\n<li>NMLS#: 1168</li>\n</ul>\n",
        "brand_min_credit_score": 600,
        "outlink": "https://out.lendstart.com/track/click/?pid=670816",
        "brand_link": "https://lendstart.com/mortgage/reviews/amerisave/"
    },
    {
        "brand_name": "SoFi",
        "brand_id": "101779",
        "ribbonName": "Low Rates",
        "brand_logo": "https://assets.trafficpointltd.com/app/uploads/sites/136/2019/05/21123922/sofi_l.svg",
        "brand_selling_line": "Get Pre-Qualified in Two Minutes",
        "selling_lines": "<ul>\n<li>A large variety of mortgage options</li>\n<li>No hidden fees or prepayment penalties</li>\n<li>Members save $500 on processing fees</li>\n</ul>\n",
        "pros_cons": "<div class=\"personal-loan personal-loan-pros\">\n<p><strong>Pros</strong></p>\n<ul>\n<li>SoFi offers conventional loans without private mortgage insurance (PMI) requirements with a 10% down payment</li>\n<li>The streamlined online process minimizes paperwork</li>\n<li>SoFi members get a 50% discount on origination fees</li>\n</ul>\n</div>\n<div class=\"personal-loan personal-loan-cons\">\n<p><strong>Cons</strong></p>\n<ul>\n<li>SoFi is not licensed to originate mortgages in West Virginia, South Dakota, New York, New Mexico, New Hampshire, Missouri, Massachusetts, Hawaii, or Alaska</li>\n<li>Must live in the home or second home for at least 12 months.</li>\n<li>No FHA, VA, or USDA loans</li>\n<li>No down payment assistance programs</li>\n</ul>\n<p>&nbsp;</p>\n</div>\n",
        "key_facts": "<ul>\n<li style=\"font-weight: 400;\">Mortgage Types: conventional, refinance, jumbo</li>\n<li style=\"font-weight: 400;\">Min. Credit Score: 660</li>\n<li style=\"font-weight: 400;\">APR starting at 3.7883%</li>\n<li style=\"font-weight: 400;\">NMLS#: 1121636</li>\n</ul>\n",
        "brand_min_credit_score": 660,
        "outlink": "https://out.lendstart.com/track/click/?pid=671539",
        "brand_link": "https://lendstart.com/mortgage/reviews/sofi-mortgage-loans/"
    },
    {
        "brand_name": "Quicken Loans",
        "brand_id": "102565",
        "ribbonName": null,
        "brand_logo": "https://assets.trafficpointltd.com/app/uploads/sites/136/2021/05/05151556/Quicken_Loans.svg",
        "brand_selling_line": "A+ Customer Satisfaction",
        "selling_lines": "<ul>\n<li>35 years of experience</li>\n<li>Fully automated, online process</li>\n<li>Pre-approval available</li>\n</ul>\n",
        "pros_cons": "<div class=\"personal-loan personal-loan-pros\">\n<p><strong>Pros:</strong></p>\n<ul>\n<li>Rate Lock</li>\n<li>Online application process</li>\n<li>Good reputation for customer satisfaction</li>\n<li>Pre-approval available</li>\n</ul>\n</div>\n<div class=\"personal-loan personal-loan-cons\">\n<p><strong>Cons:</strong></p>\n<ul>\n<li>Fees could potentially be high</li>\n<li>No physical branches available</li>\n</ul>\n</div>\n",
        "key_facts": "<ul>\n<li>Mortgage Types: Purchase, Refinance, Jumbo, Fixed, Adjustable, FHA, VA, USDA</li>\n<li>Min. Credit Score: 620</li>\n<li>APR set by lender</li>\n<li>NMLS#: 3030</li>\n</ul>\n",
        "brand_min_credit_score": 620,
        "outlink": "https://out.lendstart.com/track/click/?pid=670810",
        "brand_link": "https://lendstart.com/mortgage/reviews/quicken-loans/"
    },
    {
        "brand_name": "Rocket Mortgage",
        "brand_id": "101782",
        "ribbonName": null,
        "brand_logo": "https://assets.trafficpointltd.com/app/uploads/sites/136/2020/01/30111955/Rocket-Mortgage-logo-NMLS-3.svg",
        "brand_selling_line": "Mortgage Experts Available 24/7",
        "selling_lines": "<ul>\n<li>Apply 24/7 through the mobile app</li>\n<li>Get pre-approved &amp; lock your rate in minutes</li>\n<li>Award-winning customer service</li>\n</ul>\n",
        "pros_cons": "<div class=\"personal-loan personal-loan-pros\">\n<p><strong>Pros</strong></p>\n<ul>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Closing costs rolled into loan automatically</span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Smartphone app</span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Syncs with your bank account for easy application process</span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">98% of financial institutions supported for digital asset verification</span></li>\n</ul>\n</div>\n<div class=\"personal-loan personal-loan-cons\">\n<p><strong>Cons </strong></p>\n<ul>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Can’t have face-to-face interaction with loan officer; online only</span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">No alternative credit data considered</span></li>\n</ul>\n</div>\n",
        "key_facts": "<ul>\n<li>Mortgage Types: finance, refinance, adjustable-rate, fixed-rate</li>\n<li>Min. Credit Score: 580</li>\n<li>APR dependent on credit score</li>\n<li>NMLS#: 3030</li>\n</ul>\n",
        "brand_min_credit_score": 580,
        "outlink": "https://out.lendstart.com/track/click/?pid=670813",
        "brand_link": "https://lendstart.com/mortgage/reviews/rocket-mortgage/"
    },
    {
        "brand_name": "Veterans United",
        "brand_id": "104983",
        "brand_logo": "https://assets.trafficpointltd.com/app/uploads/sites/136/2021/08/22084324/VUlogo_Legal.svg",
        "brand_selling_line": "Where Veterans Become Homeowners",
        "selling_lines": "<ul>\n<li>A top VA purchase lender in the last 5 years</li>\n<li>Facilitated more than $16 billion in loans</li>\n<li>Lock your rate by submitting your application</li>\n</ul>\n",
        "pros_cons": "<div class=\"personal-loan personal-loan-pros\">\n<p><strong>Pros</strong></p>\n<ul>\n<li>No down payment needed</li>\n<li>No prepayment penalties</li>\n<li>No PMI</li>\n<li>Available in all 50 states</li>\n</ul>\n</div>\n<div class=\"personal-loan personal-loan-cons\">\n<p><strong>Cons</strong></p>\n<ul>\n<li>VA fee of 2.3% of the purchase price (Veterans receiving compensation for a service-connected disability and select others do not pay the VA Funding Fee.)</li>\n<li>Only available to veterans, service members, and spouses</li>\n<li>Can only be used for a primary residence</li>\n</ul>\n</div>\n",
        "key_facts": "<ul>\n<li>Mortgage types: VA, FHA, USDA, Conventional Loans.</li>\n<li>Minimum credit score: 620.</li>\n<li>NMLS#: 1907</li>\n</ul>\n",
        "brand_min_credit_score": 620,
        "outlink": "https://out.lendstart.com/track/click/?pid=671425",
        "brand_link": "https://lendstart.com/mortgage/reviews/veterans-united/"
    },
    {
        "brand_name": "New American Funding",
        "brand_id": "101791",
        "brand_logo": "https://assets.trafficpointltd.com/app/uploads/sites/136/2020/02/01112407/Logo_MR_new-american-funding-NMLS-4.2021.svg",
        "brand_selling_line": "Your Mortgage, Your Terms",
        "selling_lines": "<ul>\n<li>Historically Low Rates</li>\n<li>A+ BBB Rating</li>\n<li>Offers low-down-payment loans</li>\n</ul>\n",
        "pros_cons": "<div class=\"personal-loan personal-loan-pros\">\n<p><strong>Pros:</strong></p>\n<ul>\n<li>Manual underwriting available to evaluate credit</li>\n<li>One of the few non-bank lenders offering equity lending and reverse mortgages</li>\n<li>Can participate in the entire process online</li>\n<li>English and Spanish-speaking loan officers available</li>\n</ul>\n</div>\n<div class=\"personal-loan personal-loan-cons\">\n<p><strong>Cons:</strong></p>\n<ul>\n<li>No mortgages in Hawaii or New York</li>\n<li>Doesn’t work with down payment assistance programs in all states</li>\n</ul>\n</div>\n",
        "key_facts": "<ul>\n<li>Mortgage Types: Variety of home purchase, equity, &amp; refinance</li>\n<li>Min. Credit Score: 580/620</li>\n<li>APR dependent on loan type</li>\n<li>NMLS#: 6606</li>\n</ul>\n",
        "brand_min_credit_score": 580,
        "outlink": "https://out.lendstart.com/track/click/?pid=670840",
        "brand_link": "https://lendstart.com/mortgage/reviews/new-american-funding/"
    },
    {
        "brand_name": "Mutual of Omaha",
        "brand_id": "106059",
        "brand_logo": "https://assets.trafficpointltd.com/app/uploads/sites/136/2022/03/10124702/mutual-brand-blue.svg",
        "brand_selling_line": "More than a century of experience",
        "selling_lines": "<ul>\n<li>Competitive refinancing rates</li>\n<li>Relatively fast funding timeline</li>\n<li>Efficient application process</li>\n</ul>\n",
        "pros_cons": "<div class=\"personal-loan personal-loan-pros\">\n<p><strong>Pros:</strong></p>\n<ul>\n<li>100+ years of experience</li>\n<li>Wide range of payment term lengths</li>\n<li>Streamlined application process</li>\n<li>Access to up-to-date mortgage rates</li>\n</ul>\n</div>\n<div class=\"personal-loan personal-loan-cons\">\n<p><strong>Cons:</strong></p>\n<ul>\n<li>Not available in West Virginia or New York</li>\n<li>Physical locations in only 24 states</li>\n</ul>\n</div>\n",
        "key_facts": "<ul>\n<li>Mortgage Types: mortgage refinance</li>\n<li>Min. Credit Score: 620</li>\n<li>APR: 3.33%-3.953%</li>\n<li>NMLS#: 1025894</li>\n</ul>\n",
        "brand_min_credit_score": 620,
        "outlink": "https://out.lendstart.com/track/click/?pid=674493",
        "brand_link": "https://lendstart.com/mortgage/reviews/mutual-of-omaha/"
    }
];


function ribbon(ribbonName){
    if(typeof(ribbonName) != 'undefined'){
        if(ribbonName === null ){
            return '<div></div>'
        }
        return `<div class="ribben">${ribbonName} </div>`
    }else{
        return '<div></div>'
    }
}


const data = JSON.parse(localStorage.getItem('list'));
let outdata = data;
document.querySelector(".list").innerHTML = '';
listdata = data.desktop.brands; 
data.desktop.brands.forEach((brand, i) => {
    let id = brand.brand_id;
    let pos = ++i;
    brandlist.forEach(br =>{
        if( id === br.brand_id ){
        var list_item =
        `<div class="list_item">
        ${ribbon(brand.ribbonName)}
        <div class="list_box">

            <div class="intro">

                <a href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-logo&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" >
                    <img src="${br.brand_logo}" alt="${br.brand_name}" width="170" height="73">
                </a>

            </div>

            <div class="info">

                <div>
                    <a href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-brand-name&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow">
                        <p class="brand_title">
                            ${br.brand_name}
                        </p>
                    </a>

                    <a href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-brand-amount&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" >
                        <p class="main_brand_line">
                            ${br.brand_selling_line}
                        </p>
                    </a>

                    <ul class="brand_selling_line">
                        ${br.selling_lines}
                    </ul>
                </div>

            </div>
            
            <div class="cta">

                <a class="btn_cta" href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-btn&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" >Get my rate</a>
                <a class="visit_link" href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-text&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" >Visit site »</a>

            </div>
            
        </div>

        <details>

            <summary class="more new_more">View details</summary>
            <div class="more_info">
                
                <div class="facts">
                    <span>
                        <p class="sub_title">Key Facts</p>
                        ${br.key_facts}
                    </span>

                    <a class="visit_link" href="${br.brand_link}" target="_blank" rel="nofollow" >Read ${br.brand_name} Review »</a>

                </div>

                <div class="pros">
                    
                    ${br.pros_cons}

                </div>
            </div>

        </details>

        </div>`;
            document.querySelector(".list").innerHTML += list_item;
            document.getElementsByClassName("list")[0].style.visibility = "visible";
        }
    })

});



window.onload = function () {
    fetch(`http://unicorn.dock-stg.trafficpointltd.com/api/v1/sites/136/lists/762.json?forSite=1&isWeightRotated=1&openList=true&_user-agent=${window.navigator.userAgent}&_ip=84.110.37.255&Device=c`)
        .then((response) => response.json())
        .then(function (data) {
        let outdata = data.data;
        console.log(data.data.desktop);
        document.querySelectorAll(".list")[1].innerHTML = '';
        listdatab = data.data.desktop.brands; 
        listdatab.forEach((brand , i) => {
            let id = brand.brand_id;
            let pos = ++i;
            brandlist.forEach(br =>{
                if( id === br.brand_id ){
                var list_item =
                `<div class="list_item">
                ${ribbon(brand.ribbonName)}
                <div class="list_box">

                    <div class="intro">

                        <a href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-logo&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow">
                            <img src="${br.brand_logo}" alt="${br.brand_name}" width="170" height="73">
                        </a>

                    </div>

                    <div class="info">

                        <div>
                            <a href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-brand-name&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow">
                                <p class="brand_title">
                                    ${br.brand_name}
                                </p>
                            </a>

                            <a href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-brand-amount&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow">
                                <p class="main_brand_line">
                                    ${br.brand_selling_line}
                                </p>
                            </a>

                            <ul class="brand_selling_line">
                                ${br.selling_lines}
                            </ul>
                        </div>

                    </div>
                    
                    <div class="cta">
                        
                        <a class="btn_cta" href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-btn&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" >Get my rate</a>
                        <a class="visit_link" href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-text&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" >Visit site »</a>

                    </div>
                    
                </div>

                <details>

                    <summary class="more new_more">View details</summary>
                    <div class="more_info">
                        
                        <div class="facts">
                            <span>
                                <p class="sub_title">Key Facts</p>
                                ${br.key_facts}
                            </span>

                            <a class="visit_link" href="${br.brand_link}">Read ${br.brand_name} Review »</a>

                        </div>

                        <div class="pros">
                            
                            ${br.pros_cons}

                        </div>
                    </div>

                </details>

                </div>`;
                    document.querySelectorAll(".list")[1].innerHTML += list_item;
                    document.getElementsByClassName("list")[0].style.visibility = "visible";
                }
            })

        });

        });

};


// socre filter 
// =========================

var page =  document.querySelector('#page');
page.addEventListener('change',()=>{
    window.location.href = page.value;
});

var filter = document.querySelector('#score');
filter.addEventListener('change', ()=>{
    console.log(filter.value);
    document.querySelector(".list").innerHTML = '';
    listdata.forEach((brand,i) => {
    let id = brand.brand_id;
    let pos = ++i;
    brandlist.forEach(br =>{
        if( id === br.brand_id ){
            if( filter.value > br.brand_min_credit_score ){
                var list_item=`<div class="list_item"> ${ribbon(brand.ribbonName)}<div class="list_box"> <div class="intro"> <a href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-logo&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" > <img src="${br.brand_logo}" alt="${br.brand_name}" width="170" height="73"> </a> </div><div class="info"> <div> <a href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-brand-name&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow"> <p class="brand_title"> ${br.brand_name}</p></a> <a href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-brand-amount&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" > <p class="main_brand_line"> ${br.brand_selling_line}</p></a> <ul class="brand_selling_line"> ${br.selling_lines}</ul> </div></div><div class="cta"> <a class="btn_cta" href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-btn&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" >Get my rate</a> <a class="visit_link" href="${br.outlink}&page=/mp/mortgage-purchase/&position=${pos}&dynamic_list=${outdata.name}&action=dl-text&list_id=${outdata.id}&internal=true" target="_blank" rel="nofollow" >Visit site »</a> </div></div><details> <summary class="more new_more">View details</summary> <div class="more_info"> <div class="facts"> <span> <p class="sub_title">Key Facts</p>${br.key_facts}</span> <a class="visit_link" href="${br.brand_link}" target="_blank" rel="nofollow" >Read ${br.brand_name}Review »</a> </div><div class="pros"> ${br.pros_cons}</div></div></details> </div>`;
                
                document.querySelector(".list").innerHTML += list_item;
            };
        };
        });
    });


});



// scrap the list       

// var newlist = []; 
// window.listData.primary.brandsListsInfo[758].desktop.brands.forEach((br, i ) =>{
//     newlist.push({ 
//             "brand_name" : br.name,
//             "brand_id" : br.brand_id,
//             "ribbonName" : br.ribbonName,
//             "brand_logo" : br.images.brand_logo,
//             "brand_selling_line" : br.brand_selling_line,
//             "selling_lines" : br.selling_lines,
//             "pros_cons" : br.pros_cons,
//             "key_facts" : br.key_facts,
//             "brand_min_credit_score" : br.brand_min_credit_score,
//             "outlink" : br.outlinks.desktop,
//             "brand_link" : br.brand_link
//         });
// });

