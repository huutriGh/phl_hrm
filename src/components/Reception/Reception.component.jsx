import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 20,
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));
const Reception = () => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            id='outlined-error-helper-text'
            label='Mã barcode'
            helperText=''
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id='outlined-error-helper-text'
            label='Mã BN'
            helperText=''
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id='outlined-error-helper-text'
            label='Họ tên'
            helperText=''
            variant='outlined'
            fullWidth
          />
        </Grid>

        <Grid item xs={1}>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel ref={inputLabel} id='demo-simple-select-outlined-label'>
              Nam/Nữ
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              fullWidth
              labelWidth={labelWidth}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='M'>Nam</MenuItem>
              <MenuItem value='F'>Nữ</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id='date'
            label='Ngày sinh'
            type='date'
            fullWidth
            // className={classes.textField}
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reception;
