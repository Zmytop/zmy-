// 确保DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有导航链接和主内容区的section
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  // 点击导航滚动到对应section
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // 阻止默认跳转
      const targetId = this.getAttribute('href').substring(1); // 获取id
      const targetSection = document.getElementById(targetId);
      if(targetSection){
        targetSection.scrollIntoView({behavior:'smooth', block:'start'});
      }

      // 点击切换高亮
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // 滚动监听，高亮对应导航
  window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      if(scrollPos >= top && scrollPos < bottom){
        // 找到对应导航链接
        navLinks.forEach(link => {
          link.classList.remove('active');
          if(link.getAttribute('href').substring(1) === id){
            link.classList.add('active');
          }
        });
      }
    });
  });

});