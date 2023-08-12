import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const sxToolbar = {
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  justifyContent: 'space-between',
};

export default function HeaderView() {
  const { t } = useTranslation('App.Header');

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
