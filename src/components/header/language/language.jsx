import i18n from '../../../modules/i18n/i18n';
import Session from '../../../modules/session';
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

  function changeLanguageToIndonesia() {
    i18n.changeLanguage('id');
    Session.setSession(LanguageKey, { Language: 'id' });
  }

  function changeLanguageToEnglish() {
    i18n.changeLanguage('en');
    Session.setSession(LanguageKey, { Language: 'en' });
  }

  function changeLanguageToJapanese() {
    i18n.changeLanguage('jp');
    Session.setSession(LanguageKey, { Language: 'jp' });
  }

  return (
    <Grid item>
      <Box sx={sxButton}>
        <IconButton onClick={openLanguage}>
          <LanguageIcon sx={{ color: white }} />
        </IconButton>
      </Box>
      <Menu
        keepMounted
        anchorEl={anchorE1}
        open={anchorE1}
        onClose={closeLanguage}
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
