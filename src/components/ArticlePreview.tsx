import { format } from 'date-fns';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types/article';
import { useUser } from '../services/user';
import { useArticleFavorites } from '../services/article';

export function ArticlePreview({
  article: {
    createdAt,
    favorited,
    favoritesCount,
    slug,
    title,
    description,
    tagList,
    author: { image = '', username = '' },
  },
}: {
  article: Article;
}) {
  const user = useUser();
  const [isSubmitting, setSubmitting] = useState(false);

  const [, emitFavoriteAction] = useArticleFavorites();

  async function onFavoriteToggle() {
    if (!user) return;

    setSubmitting(true);

    await emitFavoriteAction({
      type: favorited ? 'UnfavoriteAction' : 'FavoriteAction',
      slug,
      uid: user.uid,
    });

    setSubmitting(false);
  }

  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <Link to={`/profile/${username}`} className='author'>
          <img src={image || undefined} />
        </Link>
        <div className='info'>
          <Link to={`/profile/${username}`} className='author'>
            {username}
          </Link>
          <span className='date'>{format(createdAt, 'PP')}</span>
        </div>
        <button
          className={`btn btn-sm pull-xs-right ${favorited ? 'btn-primary' : 'btn-outline-primary'}`}
          aria-label='Toggle Favorite'
          disabled={isSubmitting}
          onClick={onFavoriteToggle}
        >
          <i className='ion-heart'></i> {favoritesCount}
        </button>
      </div>
      <Link to={`article/${slug}`} className='preview-link'>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <TagList tagList={tagList} />
      </Link>
    </div>
  );
}

export function TagList({ tagList }: { tagList: string[] }) {
  return (
    <ul className='tag-list'>
      {tagList.map((tag) => (
        <li key={tag} className='tag-default tag-pill tag-outline'>
          {tag}
        </li>
      ))}
    </ul>
  );
}
