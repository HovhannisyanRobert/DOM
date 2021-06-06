const main = document.createElement('main');
main.setAttribute('class' ,  'main_container');
document.body.appendChild(main);

const nav = document.createElement('nav');
nav.setAttribute('class' ,  'left_column');
main.appendChild(nav);

const div_avatar = document.createElement('div');
div_avatar.setAttribute('class' ,  'avatar');
nav.appendChild(div_avatar);

const h2 = document.createElement('h2');
div_avatar.appendChild(h2);
h2.textContent = 'Jane Doe'

const span_icon1 = document.createElement('span');
nav.appendChild(span_icon1);
const br = document.createElement('br');
nav.appendChild(br);
const br3 = document.createElement('br');
nav.appendChild(br3);


const span_icon2 = document.createElement('span');
nav.appendChild(span_icon2);
const br1 = document.createElement('br');
nav.appendChild(br1);
const br2 = document.createElement('br');
nav.appendChild(br2);

const span_icon3 = document.createElement('span');
nav.appendChild(span_icon3);
const br4 = document.createElement('br');
nav.appendChild(br4);
const br5 = document.createElement('br');
nav.appendChild(br5);


const span_icon4 = document.createElement('span');
nav.appendChild(span_icon4);
const hr = document.createElement('hr');
const br6 = document.createElement('br');
nav.appendChild(br6);
const br7 = document.createElement('br');
nav.appendChild(br7);
nav.appendChild(hr);
const br8 = document.createElement('br');
nav.appendChild(br8);


const avatar_icon_1 = document.createElement('i');
avatar_icon_1.setAttribute('class' ,  'fa fa-briefcase fa-fw ');
span_icon1.appendChild(avatar_icon_1);
avatar_icon_1.textContent = 'Designer'
const avatar_icon_2 = document.createElement('i');
avatar_icon_2.setAttribute('class' ,  'fa fa-home ');
span_icon2.appendChild(avatar_icon_2);
avatar_icon_2.textContent = 'London UK';

const avatar_icon_3 = document.createElement('i');
avatar_icon_3.setAttribute('class' ,  'fa fa-envelope fa-fw');
span_icon3.appendChild(avatar_icon_3);
avatar_icon_3.textContent = 'ex@mail.com';

const avatar_icon_4 = document.createElement('i');
avatar_icon_4.setAttribute('class' ,  'fa fa-phone fa-fw');
span_icon4.appendChild(avatar_icon_4);
avatar_icon_4.textContent = '1224435534'


const span_icon5 = document.createElement('span');
nav.appendChild(span_icon5);
span_icon5.style.width = "25px";
span_icon5.style = "height: 25px";
span_icon5.style = "font-size: 25px";
span_icon5.style = "color: grey";
span_icon5.style = "font-weight: bold";
const avatar_icon_5 = document.createElement('i');
avatar_icon_5.setAttribute('class' ,  'fa fa-asterisk fa-fw');
span_icon5.appendChild(avatar_icon_5);
avatar_icon_5.textContent = 'Skills';


const nav_p1 = document.createElement('p');
nav.appendChild(nav_p1);
nav_p1.textContent = 'Adobe Photoshop'

const skill_div1 = document.createElement('div');
skill_div1.setAttribute('class' ,  'percent');
nav.appendChild(skill_div1);
const skill_span1 = document.createElement('span');
skill_span1.setAttribute('class' ,  'percent_value 100');
skill_span1.textContent = '90%'
skill_span1.style = "width: 90%"
skill_div1.appendChild(skill_span1);


const nav_p2 = document.createElement('p');
nav.appendChild(nav_p2);
nav_p2.textContent = 'Photography'

const skill_div2 = document.createElement('div');
skill_div2.setAttribute('class' ,  'percent');
nav.appendChild(skill_div2);
const skill_span2 = document.createElement('span');
skill_span2.textContent = '80%'
skill_span2.style = "width: 80%"
skill_span2.setAttribute('class' ,  'percent_value 100');
skill_div2.appendChild(skill_span2);


const nav_p3 = document.createElement('p');
nav.appendChild(nav_p3);
nav_p3.textContent = 'Photography'

const skill_div3 = document.createElement('div');
skill_div3.setAttribute('class' ,  'percent');
nav.appendChild(skill_div3);
const skill_span3 = document.createElement('span');
skill_span3.textContent = '75%'
skill_span3.style = "width: 75%"
skill_span3.setAttribute('class' ,  'percent_value 100');
skill_div3.appendChild(skill_span3);


const nav_p4 = document.createElement('p');
nav.appendChild(nav_p4);
nav_p4.textContent = 'Photography'

const skill_div4 = document.createElement('div');
skill_div4.setAttribute('class' ,  'percent');
nav.appendChild(skill_div4);
const skill_span4 = document.createElement('span');
skill_span4.textContent = '75%'
skill_span4.style = "width: 75%"
skill_span4.setAttribute('class' ,  'percent_value 100');
skill_div4.appendChild(skill_span4);

let br9 = document.createElement('br')
nav.appendChild(br9)

const hr1 = document.createElement('hr');
nav.appendChild(hr1);

let br10 = document.createElement('br')
nav.appendChild(br9)


const span_icon10 = document.createElement('span');
nav.appendChild(span_icon10);
span_icon10.style.width = "25px";
span_icon10.style = "height: 25px";
span_icon10.style = "font-size: 25px";
span_icon10.style = "color: grey";
span_icon10.style = "font-weight: bold";
const avatar_icon_10 = document.createElement('i');
avatar_icon_10.setAttribute('class' ,  'fa fa-asterisk fa-fw');
span_icon10.appendChild(avatar_icon_10);
avatar_icon_10.textContent = 'LANGUAGES'

const nav_p5 = document.createElement('p');
nav.appendChild(nav_p5);
nav_p5.textContent = 'English'

const skill_div5 = document.createElement('div');
skill_div5.setAttribute('class' ,  'percent');
nav.appendChild(skill_div5);
const skill_span5 = document.createElement('span');
skill_span5.setAttribute('class' ,  'percent_value lang');
skill_span5.textContent = '90%'
skill_span5.style = "width: 90%"
skill_div5.appendChild(skill_span5);

const nav_p7 = document.createElement('p');
nav.appendChild(nav_p7);
nav_p7.textContent = 'Spanishh'

const skill_div7 = document.createElement('div');
skill_div7.setAttribute('class' ,  'percent');
nav.appendChild(skill_div7);
const skill_span7 = document.createElement('span');
skill_span7.textContent = '75%'
skill_span7.style = "width: 75%"
skill_span7.setAttribute('class' ,  'percent_value lang');
skill_div7.appendChild(skill_span7);


const nav_p8 = document.createElement('p');
nav.appendChild(nav_p8);
nav_p8.textContent = 'German'

const skill_div8 = document.createElement('div');
skill_div8.setAttribute('class' ,  'percent');
nav.appendChild(skill_div8);
const skill_span8 = document.createElement('span');
skill_span8.textContent = '50%'
skill_span8.style = "width: 50%"
skill_span8.setAttribute('class' ,  'percent_value 100');
skill_div8.appendChild(skill_span8);



const section_1 = document.createElement('section');
section_1.setAttribute('class', 'work_experience');
main.appendChild(section_1);


arr_h5 = ['Front End Developer / w3schools.com', 'Web Developer / something.com' , 'Graphic Designer / designsomething.com']
arr_b = ['Jan 2015', 'Mar 2012 - Dec 2014', 'Jun 2010 - Mar 2012']
arr_p = ['Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.', 'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ];



function section1ciklner(section, arr_h5, arr_b, arr_p){

for (let i = 0; i < 3; i++) {
    const sect_div = document.createElement('div')
    
    const h5 = document.createElement('h5')
    sect_div.appendChild(h5)
    
    const h6 = document.createElement('h6')
    sect_div.appendChild(h6)

    const sect_b = document.createElement('b')
    h6.appendChild(sect_b)
    
    const sect_i = document.createElement('i')
    h6.appendChild(sect_i)

    
    
    const sect_p = document.createElement('p')
    sect_div.appendChild(sect_p)
    
    
    section.appendChild(sect_div)
    const br_sect = document.createElement('br')
    section.appendChild(br_sect)
    const hr_sect = document.createElement('hr')
    section.appendChild(hr_sect)

    sect_i.setAttribute('class',  'fa fa-calendar fa-fw')
    
    for (let j = i; j < arr_h5.length; j++) {
        
       h5.textContent = arr_h5[i]
        
    }

    for (let k = i; k < arr_b.length; k++) {
       sect_b.textContent = arr_b[i]
        
        
    }

    for (let z = i; z < arr_p.length; z++) {

        sect_p.textContent = arr_p[i]
        
    }
}
}

section1ciklner(section_1, arr_h5, arr_b , arr_p )

const section_2 = document.createElement('section');
section_2.setAttribute('class', 'education');
main.appendChild(section_2);

arr_sect2_h5 = ['W3Schools.com', 'London Business School' , 'School of Coding']
arr_sect2_b = ['JForever', '2013 - 2015', '2010 - 2013']
arr_sect2_p = ['Web Development! All I need to know in one place', 'Master Degree', 'Bachelor Degree' ];

section1ciklner(section_2, arr_sect2_h5, arr_sect2_b, arr_sect2_p)


const footer = document.createElement('footer')
main.appendChild(footer)
footer.setAttribute('class', 'footer')

const foot_div = document.createElement('div')
footer.appendChild(foot_div);

const foot_p = document.createElement('p')
foot_div.appendChild(foot_p);
foot_p.textContent = 'Find me on social media.'

for (let i = 0; i < 6; i++) {
    const foot_i = document.createElement('i');
    foot_div.appendChild(foot_i);
    
}
const foot_p2 = document.createElement('p')
foot_div.appendChild(foot_p2);
foot_p2.textContent = 'Powerd by'
const foot_a = document.createElement('a')
foot_p2.appendChild(foot_a)
foot_a.textContent = 'W3.css';
foot_a.setAttribute = ('href', ' w3.com')







