import { hpApi } from '@/services/HPService';

const HomePage = () => {
  const { data: characters, error, isLoading } = hpApi.useGetAllCharactersQuery();

  return (
    <div>
      <p>Home page</p>
      {isLoading && <h1>Загрузка...</h1>}
      {error && <h1>Ошибка!</h1>}
      <div style={{ marginTop: 20 }}>{characters && characters[0].name}</div>
    </div>
  );
};

export default HomePage;
