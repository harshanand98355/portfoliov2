/* =========================================================
   PERSONAL DIGITAL MARKETING PORTFOLIO — JAVASCRIPT
   File: js/script.js
   SECTIONS:
   01. Mobile navigation open/close
   02. Dynamic copyright year
   03. Reveal-on-scroll animation
   04. Contact form email preparation
   ========================================================= */

// 01 — Toggle the mobile navigation menu
const menuBtn=document.getElementById('menubtn'),navLinks=document.getElementById('navlinks');
menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'✕':'☰'});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}));
// 02 — Keep the footer year current
document.getElementById('year').textContent=new Date().getFullYear();
// 03 — Reveal cards and sections as they enter the viewport
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.card,.project,.timeline,.sectionhead,.aboutgrid').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
// 04 — Prepare a message in the visitor's default email app
// Replace YOUR_EMAIL@example.com with your real contact email before publishing.
document.getElementById('contactform').addEventListener('submit',e=>{e.preventDefault();const recipient='YOUR_EMAIL@example.com';if(recipient==='YOUR_EMAIL@example.com'){document.getElementById('formnote').textContent='Before publishing, replace YOUR_EMAIL@example.com in the HTML with your real email address. The message is not sent automatically.';return;}const subject=encodeURIComponent('Portfolio enquiry — '+document.getElementById('name').value);const body=encodeURIComponent('Name: '+document.getElementById('name').value+'\nEmail: '+document.getElementById('email').value+'\nCompany: '+document.getElementById('company').value+'\nService: '+document.getElementById('service').value+'\n\nProject details:\n'+document.getElementById('message').value);window.location.href='mailto:'+recipient+'?subject='+subject+'&body='+body;});
