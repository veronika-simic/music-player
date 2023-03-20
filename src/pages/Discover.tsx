import { Error, Loader, SongCard } from '../components';

export default function Discover() {
  const genreTitle = 'Ranchera';
  return (
    <div>
      <div>
        <h2>Discover {genreTitle}</h2>
        <select onChange={()=> {}}></select>
      </div>
    </div>
  );
}
