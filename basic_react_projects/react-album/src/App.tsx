import { MainRoutes } from './routes/MainRoutes'

const App = () => {

  return (
    <>
      <header>
        <h1 className="font-bold text-4xl p-4">Galeria de fotos</h1>
      </header>
      <hr />
      <main>
        <MainRoutes />
      </main>
      <hr />
      <footer>
        Direitos reservados a
      </footer>
    </>
  );
}

export default App;