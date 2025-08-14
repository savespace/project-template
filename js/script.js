'use strict';

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function titleClickHandler(event) {
  event.preventDefault();

  const clickedElement = this;
  console.log('Link was clicked!', clickedElement);

  const activeLinks = document.querySelectorAll('.titles a.active');
  for (const activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  clickedElement.classList.add('active');

  const allArticles = document.querySelectorAll(optArticleSelector);
  for (let article of allArticles) {
    article.classList.remove('active');
  }

  const articleSelector = clickedElement.getAttribute('href');
  const targetArticle = document.querySelector(articleSelector);
  if (targetArticle) {
    targetArticle.classList.add('active');
  }
}

function generateTitleLinks() {
  /* remove contents of titleList */
  /* ... */

  /* find all the articles and save them to variable: articles */
  /* ... */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';

  for (let article of articles) {
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    html += linkHTML;
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  for (const link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}


function generateTags() {
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    const tagWrapper = article.querySelector(optArticleTagsSelector);
    if (!tagWrapper) continue;

    let html = '';

    const articleTags = article.getAttribute('data-tags');
    if (!articleTags) {
      tagWrapper.innerHTML = '';
    }

    const tagsArray = articleTags.split('').filter(Boolean);

    for (let tag of tagsArray) {
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      html += linkHTML;
      console.log(articleTags);
    }

    tagWrapper.innerHTML = html;
  }
}

generateTitleLinks();
generateTags();