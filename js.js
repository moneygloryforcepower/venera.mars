const vacList = document.getElementById('vacancyList');
    const tpl = document.getElementById('vacancyTpl').content;
    for(let i=0;i<5;i++){
      const node = document.importNode(tpl, true);
      vacList.appendChild(node);
    }


    document.querySelectorAll('.faq-toggle').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const body = btn.parentElement.querySelector('.faq-body');
        body.classList.toggle('hidden');
        btn.querySelector('span:last-child').textContent = body.classList.contains('hidden') ? '+' : '−';
      })
    });


    document.querySelectorAll('.filter-btn').forEach(b=>{
      b.addEventListener('click',()=>{
        document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('bg-teal-700','text-white'));
        b.classList.add('bg-teal-700','text-white');
      })
    });
    document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {

      const body = btn.parentElement.querySelector('.faq-body');
      const icon = btn.querySelector('span:last-child');
      if (body.classList.contains('hidden')) {
        body.classList.remove('hidden');
        icon.textContent = "−"; 
      } 
      else {
        body.classList.add('hidden');
        icon.textContent = "+"; 
      }
    });
  });

  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest(".faq-item");
      const body = item.querySelector(".faq-body");
      const icon = btn.querySelector("span:last-child");

      if (body.classList.contains("hidden")) {
        body.classList.remove("hidden");
        icon.textContent = "−";
      } else {
        body.classList.add("hidden");
        icon.textContent = "+";
      }
    });
  });
  const mars = document.getElementById("sixTime");
let count = 0;

mars.textContent = "0";

let timer = setInterval(() => {
    count++;
    mars.textContent = count;

    if (count === 6) {
        clearInterval(timer);
    }
}, 500);

const modal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.open-contact').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});