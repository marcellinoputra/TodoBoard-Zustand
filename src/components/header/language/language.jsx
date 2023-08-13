import i18n from '../../../modules/i18n/i18n';
import { SESSION_STORAGE_KEY as LanguageKey } from '../../../modules/language';
import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import session from '../../../modules/session';

const sxButton = {
  marginRight: 8,
};

export default function Language() {
  const { t } = useTranslation('App.Header.Language');
  const [anchorE1, setAnchorE1] = useState(null);

  function openLanguage(e) {
    setAnchorE1(e.currentTarget);
  }

  function closeLanguage() {
    setAnchorE1(null);
  }

  async function changeLanguageToIndonesia() {
    session.set(LanguageKey, { Language: 'id' });
    await i18n.changeLanguage('id');
    console.log('');
    closeLanguage();
  }

  function changeLanguageToEnglish() {
    i18n.changeLanguage('en');
    session.set(LanguageKey, { Language: 'en' });
    console.log('Di Pencet');
    closeLanguage();
  }

  function changeLanguageToJapanese() {
    i18n.changeLanguage('jp');
    session.set(LanguageKey, { Language: 'jp' });
    console.log('Di Pencet');
    closeLanguage();
  }

  return (
    <Grid item>
      <Box sx={sxButton}>
        <IconButton onClick={openLanguage}>
          <LanguageIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <Menu
        keepMounted
        anchorEl={anchorE1}
        open={Boolean(anchorE1)}
        onClose={() => closeLanguage()}
      >
        <MenuItem onClick={changeLanguageToEnglish}>
          <Typography>{t('English')}</Typography>
        </MenuItem>
        <MenuItem onClick={changeLanguageToIndonesia}>
          <Typography>{t('Indonesia')}</Typography>
        </MenuItem>
        <MenuItem onClick={changeLanguageToJapanese}>
          <Typography>{t('Japanese')}</Typography>
        </MenuItem>
      </Menu>
    </Grid>
  );
}
