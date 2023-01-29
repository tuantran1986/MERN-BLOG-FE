// import { makeStyles } from '@material-ui/core';

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    boxShadow: '2px 2px lightblue',
    padding: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: '0 0 10px 0',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#1976d2',
  },
  title: {
    margin: '0 0 10px 0!important',
  },
  textarea: {
    padding: '10px',
    marginBottom: '10px',
    minHeight: '160px',
  },
  footer: {
    marginTop: '10px',
  },
}));
