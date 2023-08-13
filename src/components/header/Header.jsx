import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Language from './language/language';

const sxToolbar = {
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  justifyContent: 'space-between',
};

export default function HeaderView() {
  const { t } = useTranslation('app_header', 'Title');

  return (
    <>
      <AppBar>
        <Toolbar sx={sxToolbar}>
          <Typography noWrap>{t('Title')}</Typography>
          <Language />
        </Toolbar>
      </AppBar>
    </>
  );
}
