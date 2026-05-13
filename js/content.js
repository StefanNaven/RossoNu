async function loadJson(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Could not load ${path}`);
  }

  return response.json();
}

function renderNews(news) {
  const container = document.querySelector('#news-list');

  if (!container) return;

  container.innerHTML = news.map(item => `
    <article class="news-item">
      <a href="${item.url}">
        <time datetime="${item.date}">${item.displayDate}</time>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </a>
    </article>
  `).join('');
}

function renderEvents(events) {
  const container = document.querySelector('#event-list');

  if (!container) return;

  container.innerHTML = events.map(item => `
    <article class="event-item">
      <span class="event-date">${item.displayDate}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
    </article>
  `).join('');
}

async function initContent() {
  try {
    const [news, events] = await Promise.all([
      loadJson('data/news.json'),
      loadJson('data/events.json')
    ]);

    renderNews(news);
    renderEvents(events);
  } catch (error) {
    console.error(error);
  }
}

initContent();
