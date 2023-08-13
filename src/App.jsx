import { useTranslation } from 'react-i18next';
import './App.css';
import Column from './components/column/Column';
import HeaderView from './components/header/Header';
import { Context } from './components/context/context';

function App() {
  const { t, il8n } = useTranslation('app_progress', '');
  const value = 'My Context Value';

  return (
    <div className="App">
      <HeaderView />
      <Context.Provider value={value}>
        <Column progress={t('PLANNED')} />
        <Column progress={t('ONGOING')} />
        <Column progress={t('DONE')} />
      </Context.Provider>
    </div>
  );
}

export default App;
