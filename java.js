const posts = Array.from({ length: 100 }).map((_, i) => {
  const usePicsum = Math.random() > 0.5;
  const image = usePicsum
    ? `https://picsum.photos/seed/${i}/600/338`
    : `https://source.unsplash.com/random/600x338?sig=${i}`;

  return {
    title: i % 2 === 0
      ? 'Kenali Tingkatan Influencers berdasarkan Jumlah Followers'
      : 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing',
    date: new Date(2023, 8, 5 + i),
    image,
  };
});

let currentPage = 1;

const perPageSelect = document.getElementById('perPage');
const sortSelect = document.getElementById('sort');
const grid = document.getElementById('postGrid');
const pagination = document.getElementById('pagination');
const showingInfo = document.getElementById('showingInfo');

function saveState() {
  localStorage.setItem('ideasState', JSON.stringify({
    sort: sortSelect.value,
    perPage: perPageSelect.value,
    page: currentPage
  }));
}

function restoreState() {
  const state = JSON.parse(localStorage.getItem('ideasState'));
  if (state) {
    sortSelect.value = state.sort;
    perPageSelect.value = state.perPage;
    currentPage = state.page;
  }
}

function sortPosts(data) {
  return [...data].sort((a, b) => {
    return sortSelect.value === 'newest'
      ? b.date - a.date
      : a.date - b.date;
  });
}

function paginate(data) {
  const perPage = parseInt(perPageSelect.value);
  const start = (currentPage - 1) * perPage;
  return data.slice(start, start + perPage);
}

function renderPosts() {
  const sorted = sortPosts(posts);
  const paged = paginate(sorted);

  grid.innerHTML = paged.map(post => `
    <div class="card">
      <div class="image-wrapper">
        <img 
          src="${post.image}" 
          alt="Thumbnail" 
          loading="lazy" 
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="fallback-image">
          <div class="icon">⚠️</div>
          <div class="text">Image Not Available</div>
        </div>
      </div>
      <div class="card-meta">
        <span class="date">${post.date.toDateString()}</span>
        <h3 class="card-title">${post.title}</h3>
      </div>
    </div>
  `).join('');

  updateShowingInfo(sorted.length);
  renderPagination(sorted.length);
  saveState();
}

function updateShowingInfo(total) {
  const perPage = parseInt(perPageSelect.value);
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, total);
  if (showingInfo) {
    showingInfo.textContent = `Showing ${start}–${end} of ${total}`;
  }
}

function renderPagination(total) {
  const perPage = parseInt(perPageSelect.value);
  const pages = Math.ceil(total / perPage);

  pagination.innerHTML = '';
  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    if (i === currentPage) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentPage = i;
      renderPosts();
    });
    pagination.appendChild(btn);
  }
}

perPageSelect.addEventListener('change', () => {
  currentPage = 1;
  renderPosts();
});

sortSelect.addEventListener('change', () => {
  currentPage = 1;
  renderPosts();
});

window.addEventListener('scroll', function () {
  const banner = document.querySelector(".hero-banner");
  const content = document.querySelector(".hero-content");
  let scroll = window.pageYOffset;
  banner.style.backgroundPositionY = `${scroll * 0.5}px`;
  content.style.transform = `translateY(${scroll * 0.2}px)`;
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add('hidden');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.remove('hidden');

    if (scrollTop > 50) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.querySelectorAll('.nav-links a').forEach(link => {
  if (window.location.href.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

restoreState();
renderPosts();
