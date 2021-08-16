import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Snackbar,
  SnackbarCloseReason,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ContentCopyIcon } from './icons/ContentCopyIcon';
import { GithubIcon } from './icons/GIthubIcon';
import { LinkVariant } from './icons/LinkVariant';
import { configs, hosts, targets } from './options';

type SnackPack = {
  message: string;
  key: number;
};

type StateType = {
  target: string;
  url: string;
  config?: string;
  host: string;
  customHost?: string;
};

const initialState: StateType = {
  target: targets[0],
  url: '',
  config: 'ACL4SSR_AdblockPlus.ini',
  host: hosts[0].value,
  customHost: '',
};

function App() {
  const [cookies, setCookie] = useCookies<'state', { state: StateType }>([
    'state',
  ]);
  const [state, setState] = useState(cookies.state || initialState);
  const [resLink, setResLink] = useState('');
  const [checkError, setCheckError] = useState(false);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const errors = useMemo(
    () => ({
      url: checkError && !state.url,
      customHost: checkError && state.host === 'custom' && !state.customHost,
    }),
    [checkError, state.customHost, state.host, state.url]
  );

  const [snackPack, setSnackPack] = useState<Array<SnackPack>>([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState<SnackPack | undefined>(
    undefined
  );

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [messageInfo, open, snackPack]);

  const handleClick = (message: string) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (
    event: React.SyntheticEvent,
    reason: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const handleValueChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const copyToClipboard = (text: string) => {
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        handleClick('复制成功');
      });
    }
  };

  const handleClickGeneration = () => {
    setCheckError(true);

    if (!state.url || (state.host === 'custom' && !state.customHost)) {
      return;
    }

    let link = `${
      state.host === 'custom' ? state.customHost : state.host
    }/sub?target=${state.target}&url=${encodeURIComponent(state.url)}`;
    if (state.config) {
      link += `&config=${encodeURIComponent(`config/${state.config}`)}`;
    }

    setResLink(link);
    copyToClipboard(link);

    setCookie('state', state, { maxAge: 3600 * 24 * 7 });
  };

  return (
    <Container>
      <CssBaseline />
      <Paper sx={{ p: 2, mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant='h6' sx={{ mr: 1 }}>
            Subconverter
          </Typography>
          <Link
            color='inherit'
            href='https://github.com/tindy2013/subconverter'
            target='_blank'
            sx={{ width: 24, height: 24 }}
          >
            <GithubIcon />
          </Link>
        </Box>
        <Grid container sx={{ alignItems: 'center' }} spacing={2}>
          <Grid item xs={2}>
            <InputLabel required>订阅链接</InputLabel>
          </Grid>
          <Grid item xs={10}>
            <TextField
              size='small'
              fullWidth
              name='url'
              value={state.url}
              error={errors.url}
              helperText={errors.url && '不能为空'}
              onChange={handleValueChange}
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <InputLabel required>客户端</InputLabel>
          </Grid>
          <Grid item xs={10}>
            <TextField
              size='small'
              fullWidth
              select
              name='target'
              value={state.target}
              onChange={handleValueChange}
            >
              {targets.map((target, index) => (
                <MenuItem key={index} value={target}>
                  {target}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <InputLabel>配置</InputLabel>
          </Grid>
          <Grid item xs={10}>
            <TextField
              size='small'
              fullWidth
              select
              name='config'
              value={state.config}
              onChange={handleValueChange}
            >
              {configs.map((config, index) => (
                <MenuItem key={index} value={config.value}>
                  {config.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <InputLabel required>后端地址</InputLabel>
          </Grid>
          <Grid item xs={10}>
            <TextField
              size='small'
              fullWidth
              name='host'
              value={state.host}
              select
              onChange={handleValueChange}
            >
              {hosts.map((host, index) => (
                <MenuItem key={index} value={host.value}>
                  {host.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {state.host === 'custom' && (
            <>
              <Grid item xs={2}>
                <InputLabel required>自定义地址</InputLabel>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  size='small'
                  fullWidth
                  name='customHost'
                  value={state.customHost}
                  onChange={handleValueChange}
                  error={errors.customHost}
                  helperText={errors.customHost && '不能为空'}
                ></TextField>
              </Grid>
            </>
          )}
          <Grid item xs={2}>
            <InputLabel>生成的链接</InputLabel>
          </Grid>
          <Grid item xs={10}>
            <TextField
              size='small'
              fullWidth
              value={resLink}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position='end'>
                    <Tooltip title='打开链接'>
                      <Link
                        color='inherit'
                        href={resLink ? resLink : '#'}
                        target={resLink ? '_blank' : undefined}
                        sx={{ mr: 1 }}
                      >
                        <IconButton sx={{ p: 0 }}>
                          <LinkVariant />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip title='复制'>
                      <IconButton
                        sx={{ p: 0 }}
                        onClick={() => {
                          copyToClipboard(resLink);
                        }}
                      >
                        <ContentCopyIcon fontSize='small' />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' onClick={handleClickGeneration}>
              🔗生成订阅链接
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        message={messageInfo ? messageInfo.message : undefined}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
      ></Snackbar>
    </Container>
  );
}

export default App;
